import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: "778523413199-u8lp809s489b8upknonerbgq13v4cgrt.apps.googleusercontent.com",
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