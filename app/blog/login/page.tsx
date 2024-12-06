"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import login from "../_actions/login";
import Link from "next/link";
import SubmitButton from "../_component/SubmitButton";
import Foot from "@/components/foot";
import Navbar from "@/components/navbar";
import { useActionState } from "react";

export default function Login() {
    const [data, action] = useActionState(login, {});
    const router = useRouter();

    useEffect(() => {
        if (data.message) {
            router.push("/blog");
        }
    }, [data.message, router]);

    return (
        <div>
            <Navbar />
            <div className="form-container">
                <form action={action} className="flex flex-col gap-4 w-full ml-5">
                    <div>
                        <div className="mb-2 block mt-5 ">
                            <label htmlFor="email1">Your email</label>
                            <input
                                className="border-gray-200 border-2 rounded w-1/3 ml-5"
                                id="email1"
                                name="email"
                                type="email"
                                placeholder="name@gmail.com"
                                required
                            />
                            {data.error?.email && <div className="text-red-600">{data.error?.email[0]}</div>}
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <label htmlFor="password1">Your password</label>
                            <input
                                className="border-gray-200 border-2 rounded ml-5"
                                id="password1"
                                name="password"
                                type="password"
                                required
                            />
                            {data.error?.password && <div className="text-red-600">{data.error?.password[0]}</div>}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <input className="w-6 mr-2" type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <div>
                        {data.error?.message && <div className="text-red-600">{data.error?.message}</div>}
                    </div>
                    <div>{data.message ?  <p>{data.message}</p> : <SubmitButton label="Login" />}</div>
                    
                    <Link className="underline" href="/blog">Back</Link>
                </form>
            </div>
            <Foot />
        </div>
    );
}
