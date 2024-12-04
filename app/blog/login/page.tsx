"use client"
import { useFormState } from "react-dom"
import login from "../_actions/login"
import Link from "next/link"
import { redirect } from "next/navigation"
import SubmitButton from "../_component/SubmitButton"
import Foot from "@/components/foot"
import Navbar from "@/components/navbar"

export default function Login() {
    const [data, action] = useFormState(login, {})

    if (data.message)
        redirect("/blog")

    return (
        <div>
            <Navbar />

            <div className="flex  justify-center mb-11  ">

                <form action={action} className="flex max-w-md flex-col gap-4 ">
                    <div>
                        <div className="mb-2 block ">
                            {data.error?.email && <div className="text-red-600">{data.error?.email[0]}</div>}
                            <label htmlFor="email1" >Your email</label>
                        </div>
                        <input className="border-gray-200 border-2 rounded " id="email1" type="email" placeholder="name@gmial.com" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <label htmlFor="password1"  >Your password</label>
                        </div>
                        <input className="border-gray-200 border-2 rounded" id="password1" type="password" required />
                        {data.error?.password && <div className="text-red-600">{data.error?.password[0]}</div>}
                    </div>
                    <div className="flex items-center gap-2">
                        <input className="w-6  mr-2 " type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <div>
                        {data.error?.message && <div className="text-red-600">{data.error?.message}</div>}
                    </div>
                    
                        {data.message ? <p>{data.message}</p> : <SubmitButton label="Login" />}
                        <Link href="/blog">Back</Link>
                </form>
            </div>
            <Foot />
        </div>
    )
}