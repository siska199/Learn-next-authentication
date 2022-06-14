import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: 'd297687e4849064ae607',
      clientSecret: 'dd1ba9b5c2c0eb31429d9a03c8945bdcf5d45183',
    }),
    GoogleProvider({
        clientId: "235416979902-39qrfq4mkdfkpl64ae99pt57pvs1b1mr.apps.googleusercontent.com",
        clientSecret: "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"
      })
  ],
})
