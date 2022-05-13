import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import { getProviders } from "next-auth/react"

const Home = () => {
  const {data:session} = useSession()
  console.log("isi session dari use session: ", session)

  return <div className="flex justify-center h-screen w-screen items-center">
    {
      session?(
        <>
            <button onClick ={()=>signOut()} className="bg-blue-500 px-5 py-2 rounded-md text-white">Sign Out</button>
        </>
      ):(
        <>
            <button onClick ={()=>signIn()} className="bg-blue-500 px-5 py-2 rounded-md text-white">Sign In With Github</button>
        </>
      )
    }
  </div>
}

export default Home
