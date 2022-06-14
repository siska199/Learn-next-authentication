import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'
import { getProviders } from 'next-auth/react'

const Home = ({ providers }) => {
  console.log("providers: ", providers)
  const { data: session } = useSession()
  console.log('isi session dari use session: ', session)

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {session ? (
        <>
          <button
            onClick={() => signOut()}
            className="rounded-md bg-blue-500 px-5 py-2 text-white"
          >
            Sign Out
          </button>
        </>
      ) : (
        <div>
          {Object.values(providers).map((provider) => (
            <button
            key={provider.name}
              onClick={() => signIn(provider.id)}
              className="rounded-md bg-blue-500 px-5 py-2 text-white"
            >
              Sign In With {provider.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home

export const getServerSideProps = async (contex) => {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
