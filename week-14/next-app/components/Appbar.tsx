"use client";


import { useRouter } from "next/navigation";  // after next js 13 stop importing from the next/router 
import { Button } from "./Button"

// so this is the app bar 
export const Appbar = () => {
    const router = useRouter();
    return (
        <div className=" bg-blue-500 w-screen mt-2 mb-6 p-6 flex justify-between">
            <Button label="home" onclick={() => {
                router.push("/")
            }} />
            <Button label="static page" onclick={() => {
                router.push("/static")
            }} />
            <Button label="Interative page" onclick={() => {
                router.push("/interactive")
            }} />
        </div>
    )
}