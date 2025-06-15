import React from 'react'
import Link from "next/link";
import {auth, signIn, signOut} from "@/auth";
import {Button} from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";

const Navbar = async () => {
    const session = await auth();
    return (
        <header className="px-5 py-3 bg-white shadow-lg top-0
        sticky z-50  border-b-3 border-green-300 rounded-2xl">
            <nav className="flex justify-between items-center text-black">
                <Link href="/">
                    <h1 className="text-2xl font-bold">Edu App</h1>
                </Link>
                <div className="flex gap-5 items-center">
                    {session && session?.user?(
                        <>
                            <Button><Link href="/dashboard">Αποτελέσματα</Link></Button>
                            <p>{session?.user?.name}</p>
                            <form
                            action={async () => {
                                "use server"
                                await signOut({redirectTo:"/"});
                            }}
                        >
                            <Button className="cursor-pointer" variant="destructive" type="submit">SignOut</Button>
                        </form>

                        </>
                    ):<form
                        action={async () => {
                            "use server"
                            await signIn("google" , {redirectTo: "/"})
                        }}
                    >
                        <Button className="cursor-pointer group relative overflow-hidden transition-all ease-in delay-50 duration-300 hover:bg-green-300" variant="ghost" type="submit">
                            <span className="inline-block transform transition-all ease-in delay-50 duration-300 group-hover:-translate-x-1">
    Login with Google
  </span>
                            <FaGoogle className="opacity-0 size-2 right-1 translate-y-2 transform transition-all ease-in delay-50 duration-300 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:-translate-y-0 group-hover:size-5" />

                        </Button>
                    </form>}
                </div>
            </nav>

        </header>
    )
}
export default Navbar
