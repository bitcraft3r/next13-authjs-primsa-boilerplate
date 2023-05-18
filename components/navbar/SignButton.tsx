'use client'

import { signIn, signOut } from "next-auth/react";
import { Github, LogOut } from "lucide-react"

import { Button } from "../ui/button";

interface SignButtonProps { currentUser?: any }


const SignButton: React.FC<SignButtonProps> = ({ currentUser }) => {
    return (
        <>
            {!currentUser ? (
                <Button onClick={() => signIn('github')}>
                    <Github className="mr-2 h-4 w-4" /> Sign In
                </Button>
            ) : (
                <Button onClick={() => signOut()}>
                    Sign Out <LogOut className="ml-2 h-4 w-4" />
                </Button>
            )}
        </>
    )
}

export default SignButton