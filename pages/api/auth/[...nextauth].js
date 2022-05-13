import NextAuth from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'
import GitHubProvider from 'next-auth/providers/github'

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: 'd297687e4849064ae607',
      clientSecret: 'dd1ba9b5c2c0eb31429d9a03c8945bdcf5d45183',
    }),
    // TwitterProvider({
    //     clientId: process.env.TWITTER_CLIENT_ID,
    //     clientSecret: process.env.TWITTER_CLIENT_SECRET
    //   })
  ],
})
