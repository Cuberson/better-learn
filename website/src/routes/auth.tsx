import { makeEventListener } from "@solid-primitives/event-listener"
import { onMount } from "solid-js"
import { register } from "@teamhanko/hanko-elements"
// hanko ships types through an `exports` map that this tsconfig cannot resolve
// @ts-ignore
import { UserClient } from "@teamhanko/hanko-frontend-sdk"
import { useNavigate } from "solid-start"
import { getHankoCookie } from "../../lib/auth"
import { useMobius, useSignIn } from "../root"

// uses https://hanko.io authentication
// https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md
export default function SignInPage() {
  const navigate = useNavigate()
  const signIn = useSignIn()
  const mobius = useMobius()

  // auth is optional: without a Hanko project configured the rest of the site
  // keeps working, the page just explains that sign in is unavailable
  const hankoApi = import.meta.env.VITE_HANKO_API

  onMount(async () => {
    if (!hankoApi) return

    try {
      // checks if user is already logged in with valid token
      // TODO: perhaps there is better way to do this?
      const res = await fetch(`${hankoApi}/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${await getHankoCookie()}`,
        },
      })
      // if status 200, means user is logged in
      // navigate to using the app
      if (res.status === 200) {
        // navigate("/")
      }

      // register hanko component
      await register(hankoApi, {
        shadow: true, // can use https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#css-shadow-parts
        injectStyles: true,
      })
    } catch (error) {
      // TODO: log with Tinybird
      console.log(error, "error")
    }
  })

  makeEventListener(
    document,
    "hankoAuthSuccess",
    async () => {
      if (!hankoApi) return

      try {
        const userClient = new UserClient(hankoApi, {
          timeout: 0,
          cookieName: "hanko",
          localStorageKey: "hanko",
        })
        const user = await userClient.getCurrent()
        const email = user.email

        localStorage.setItem("email", email)

        const hankoCookie = document.cookie
          .split(";")
          .find((cookie) => cookie.trim().startsWith("hanko="))
          ?.split("=")[1]

        if (hankoCookie) signIn(hankoCookie)

        await mobius.mutate({
          createUser: {
            where: {
              email: email,
            },
            select: true,
          },
        })
        navigate("/")
      } catch (error) {
        console.log(error, "could not finish sign in")
      }
    },
    { passive: true },
  )

  return (
    <>
      <style>
        {`
        #Auth:hover {
          transform: translateY(-4px);
          transition: all 0.3s linear;
        }
        #Auth {
          transition: all 0.3s linear
        }
        #text {
          padding-top: 10px;
          opacity: 0.7;
          font-weight: bold;
        }
        hanko-auth, hanko-profile {
          --color: #fff;
          --color-shade-1: #989BA1;
          --color-shade-2: #43464E;
          --brand-color: #AEDFFF;
          --brand-color-shade-1: #A1C9E7;
          --brand-contrast-color: #0B0D0E;
          --background-color: transparent;
          --error-color: #FF2E4C;
          --link-color: #AEDFFF;
          --font-family: "IBM Plex Sans";
          --font-size: 1rem;
          --font-weight: 400;
          --headline1-font-size: 0px;
          --headline1-font-weight: 600;
          --headline2-font-size: 1rem;
          --headline2-font-weight: 600;
          --border-radius: 8px;
          --item-height: 40px;
          --item-margin: 18px 0px;
          --container-padding: 20px 50px 50px 50px;
          --container-max-width: 800px;
          --headline1-margin: 0 0 1rem;
          --headline2-margin: 1rem 0 .5rem;
        }
      }
      `}
      </style>
      <div
        style={{
          "background-color": "#02050e",
        }}
      >
        <div
          style={{
            "background-image": "url('./blue-left.svg')",
            "background-size": "cover",
          }}
        >
          <div
            style={{
              "background-image": "url('./blue-right.svg')",
              "background-size": "cover",
            }}
            class="flex flex-col items-center h-screen justify-center text-white"
          >
            <div
              style={{
                border: "solid 1px rgba(13, 19, 39, 0.5)",
                "background-image": `linear-gradient(
                  34deg in oklab,
                  rgb(1% 2% 5% / 86%) 0%, rgb(7, 12, 25) 50%, rgb(1% 2% 5% / 86%) 100%
                )`,
              }}
              class="flex flex-col items-center p-10 rounded-lg border-2 border-neutral-900"
            >
              {/* TODO: make logo look good in dark theme */}
              {/* <img
                style={{
                  "border-radius": "25px",
                  border: "2.5px solid black",
                  width: "90px",
                  height: "90px",
                }}
                src="./logo.jpg"
              /> */}
              <div id="text" class="text-2xl mt-3 mb-2">
                Sign in/up with
              </div>
              {/* TODO: types.d.ts not helping solve type error, maybe wrong place for the file? */}
              {/* TODO: there is also CORS issue */}
              {/* hanko-auth element does not render */}
              {hankoApi ? (
                // @ts-ignore custom element registered by hanko at runtime
                <hanko-auth />
              ) : (
                <div class="flex flex-col items-center gap-3 text-center max-w-[420px]">
                  <div class="text-[15px] text-neutral-300 leading-[1.5]">
                    Sign in is not configured in this environment. Set
                    <code class="px-1"> VITE_HANKO_API </code>
                    in <code class="px-1">website/.env</code> to enable it.
                  </div>
                  <a href="/" class="text-[#AEDFFF] font-semibold">
                    Keep exploring topics →
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
