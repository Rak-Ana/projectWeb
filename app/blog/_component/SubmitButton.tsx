"use client"
import { useFormStatus } from "react-dom"
import {style} from "../constants/style"

export default function SubmitButton({ label }: { label: string }) {
    const { pending } = useFormStatus()
    return <button className="block rounded-md bg-pink-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-pink-700" disabled={pending} type="submit">
        {pending ? "Submitting..." : label}
    </button>
}