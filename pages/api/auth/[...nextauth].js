import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: "247550224720-h3tbnjiemrln3kpuipbo8l1o49fpepha.apps.googleusercontent.com",
            clientSecret: "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",
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
    secret: "^kEEPMZ479RZk0VoN@Pwr9TLT@",
})