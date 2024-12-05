"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import SubmitButton from "../_component/SubmitButton";
import { style } from "../constants/style";
import updatePost from "../_actions/updatePost";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";

export default function Edit() {
  const searchParams = useSearchParams(); // Dynamically retrieve search params
  const [params, setParams] = useState({ id: "", subject: "",image:"", detail: "" });
  // Extract search parameters
  const id = searchParams.get("id") || ""; // Default to an empty string if not present
  const subject = searchParams.get("subject") || "";
  const image = searchParams.get("image") || "";
  const detail = searchParams.get("detail") || "";

  const [data, action] = useActionState(updatePost, {});

  // Redirect to "/blog" if the update is successful
  if (data.message) {
    redirect("/blog");
  }

  return (
    <>
      <h1>Edit Post</h1>
      <hr />
      <form action={action} className="mt-4">
        {/* Subject Field */}
        <div className="flex flex-col mb-2">
          <label htmlFor="subject">Subject</label>
          <input
            className={style}
            type="text"
            name="subject"
            id="subject"
            defaultValue={subject}
            required
          />
          {data.error?.subject && (
            <div className="text-red-600">{data.error?.subject[0]}</div>
          )}
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="subject">Image</label>
          <input
            className={style}
            type="text"
            name="image"
            id="image"
            defaultValue={image}
            required
          />
          {data.error?.image && (
            <div className="text-red-600">{data.error?.image[0]}</div>
          )}
        </div>

        {/* Detail Field */}
        <div className="flex flex-col mb-4">
          <label htmlFor="detail">Detail</label>
          <textarea
            className={style}
            name="detail"
            id="detail"
            defaultValue={detail}
            required
          />
          {data.error?.detail && (
            <div className="text-red-600">{data.error?.detail[0]}</div>
          )}
        </div>

        {/* Hidden ID Field */}
        <input type="hidden" name="id" id="id" value={id} />

        {/* Error Message */}
        {data.error?.message && (
          <div className="text-red-600">{data.error?.message}</div>
        )}

        {/* Submit Button */}
        <div>
          {data.message ? <p>{data.message}</p> : <SubmitButton label="Update" />}
        </div>
      </form>

      <br />
      <hr />
      <Link href="/blog">Back</Link>
    </>
  );
}
