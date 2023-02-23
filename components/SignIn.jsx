import { signIn, signOut, useSession } from 'next-auth/react'

const SignIn = () => {
    const { data: session } = useSession()
    console.log(session?.user?.image)

    if (session) {
        return (
            <img src={session?.user?.image} onClick={() => signOut()} className='w-9 h-9 rounded-full' />
        )
    }
    return (
        <>
            <button onClick={() => signIn('google')} className={`text-[#0BAB7C] border-2 border-[#0BAB7C] rounded-xl py-1 px-2 font-bold `}>Sign In</button>
        </>
    )
}

export default SignIn