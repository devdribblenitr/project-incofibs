import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENTID,
            clientSecret: process.env.CLIENTSECRET,
            // authorization: {
            //     params: {
            //         prompt: "consent",
            //         access_type: "offline",
            //         response_type: "code"
            //     }
            // }
        })
    ],
    jwt: {
        encryption: true,
    },
    secret: process.env.SECRET,
    callbacks: {
        // async jwt(token, account) {
        //   if (account?.accessToken) {
        //     token.accessToken = account.accessToken;
        //   }
        //   return token;
        // },
        redirect: async (url, _baseUrl) => {
          if (url === '/dashboard') {
            return Promise.resolve('/');
          }
          return Promise.resolve('/');
        },
      },
})


// import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';

// export default NextAuth({
//   providers: [
//     Providers.Google({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//       authorizationUrl:
//         'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
//     }),
//   ],
//   jwt: {
//     encryption: true,
//   },
//   secret: process.env.SECRET,
//   callbacks: {
//     async jwt(token, account) {
//       if (account?.accessToken) {
//         token.accessToken = account.accessToken;
//       }
//       return token;
//     },
//     redirect: async (url, _baseUrl) => {
//       if (url === '/profile') {
//         return Promise.resolve('/');
//       }
//       return Promise.resolve('/');
//     },
//   },
// });