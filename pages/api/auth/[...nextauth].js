import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
    })
  ],
  jwt: {
    encryption: true,
  },
  secret: process.env.SECRET,
});