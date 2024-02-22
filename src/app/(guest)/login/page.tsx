'use client';

import {Hub} from "@aws-amplify/core";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {startTransition, useEffect} from "react";
import {signInWithRedirect} from "@aws-amplify/auth";

export default function Login() {
    const router = useRouter()

    const redirectToApp = () => {
        startTransition(() => router.push("/"))
        startTransition(() => router.refresh())
    }

    const handleClick = async () => {
        try {
            await signInWithRedirect({provider: 'Google'})
        } catch (error) {
            if (error instanceof Error) {
                if (error.name === 'UserAlreadyAuthenticatedException') return redirectToApp()
            }

            throw error
        }
    }

    useEffect(() => {
        const unsubscribe = Hub.listen('auth', ({payload}) => {
            switch (payload.event) {
                case 'signInWithRedirect':
                    redirectToApp();
                    break
            }
        });
        return () => unsubscribe()
    })

    return (
        <section className="h-screen w-full grid place-content-center">
            <Button onClick={handleClick} variant="link">Sign in with Google</Button>
        </section>
    )
}