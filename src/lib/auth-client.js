import { jwtClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
    plugins: [
        jwtClient()
    ]
    // baseURL: 'http://localhost:3000'
})
export const { signIn, signUp, useSession } = createAuthClient();