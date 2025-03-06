"use client"

import Link from "next/link";
import { useRouter } from "next/navigation"

const BotaoRedirect = ({text}) => {

    const router = useRouter();

    function redirectDashboard() {
        router.push("/dashboard");
    }

    return (
        <button onClick={redirectDashboard}>
            {text}
        </button>
    )
}

export default BotaoRedirect
