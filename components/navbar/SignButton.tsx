'use client'

import { signIn, signOut } from "next-auth/react";

const SignButton = () => {
    return (
        <>
            <button onClick={() => signIn('github')}>Sign In</button>
            <button onClick={() => signOut()}>Sign Out</button>
        </>
    )
}

export default SignButton