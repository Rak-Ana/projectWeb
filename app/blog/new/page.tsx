"use client"
import { useFormState } from "react-dom"
import post from "../_actions/post"
import { redirect } from "next/navigation"
import Link from "next/link"
import SubmitButton from "../_component/SubmitButton"
import {use,useState} from "react"


const style = 'border-2 border-black text-blue-800 px-2 py-1 rounded hover:bg-blue-100 focus-within:bg-blue-200'

export default function New() {
  
  const [data, action] = useFormState(post, {})

  if (data.message) {
    redirect("/blog")
  }
  return (
    <div>
        <div className="font-bold text-xl ml-3 mb-2">Share your post</div>
      <hr />
      <form action={action} className="mt-4 ml-8 bg-gray-100 rounded-2xl mr-8">
        <div className="flex flex-col mb-2 ml-2">
          <label htmlFor="subject">Subject</label>
          <input className=" h-[5em] rounded-lg border border-gray-200 p-3 text-sm m-4"type="subject" name="subject" id="subject" required />
          {data.error?.subject && <div className="text-red-600">{data.error?.subject[0]}</div>}
        </div>
        <div className="flex flex-col mb-4 ml-2">
          <label htmlFor="image">Image</label>
          <textarea className=" h-[5em] rounded-lg border border-gray-200 p-3 text-sm m-4"  name="detail" id="detail" required />
          {data.error?.detail && <div className="text-red-600">{data.error?.image}</div>}
        </div>
        <div className="flex flex-col mb-4 ml-2">
          <label htmlFor="detail">Detail</label>
          <textarea className=" h-[5em] rounded-lg border border-gray-200 p-3 text-sm m-4"  name="detail" id="detail" required />
          {data.error?.detail && <div className="text-red-600">{data.error?.detail[0]}</div>}
        </div>
        <div>
          {data.error?.message && <div className="text-red-600">{data.error?.message}</div>}
        </div>
        <div className=" ml-3 ">
          {data.message ? <p>{data.message}</p> : <SubmitButton label="Post" />}
        </div>
      </form>
      <br /><hr />
      <Link className="ml-6 underline"href="/blog">Back</Link>
    </div>
  )
} 