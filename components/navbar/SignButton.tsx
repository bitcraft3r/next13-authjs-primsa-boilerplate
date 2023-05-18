'use client'

import { signIn, signOut } from "next-auth/react";

interface SignButtonProps { currentUser?: any }


const SignButton: React.FC<SignButtonProps> = ({ currentUser }) => {
    return (
        <>
            {!currentUser ? (
                <button onClick={() => signIn('github')}>Sign In</button>
            ) : (
                <button onClick={() => signOut()}>Sign Out</button>
            )}
        </>
    )
}

export default SignButton