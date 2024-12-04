import prisma from "@/utils/db"
import Link from "next/link";
import Logout from "./_component/Logout";
import { getSession } from "@/utils/loginUser";
import DeleteButton from "./_component/DeleteButton";
import deletePost from "./_actions/deletePost";
import { style } from "./constants/style"
import LikeButton from "./_component/LikeButton";
import { likePost, unlikePost } from "./_actions/likePost";
import Head from "@/components/head";
import Foot from "@/components/foot";

export default async function Blog() {
    const posts = await prisma.post.findMany({
        include: {
            user: true,
        },
    });


    const user = await getSession()

    return (
        <div>
            <nav className="flex justify-between mb-4">
                
                <h1 className="ml-4 mt-2 text-pink-700 text-4xl font-bold">LiteTip</h1>
                <div className="mt-3 mr-3">
                    {user ?
                        <>Hello: {user.name} | <Logout /> </> :
                        <>
                            <Link className="mr-2" href="/blog/login">Login</Link>|
                            <Link className="ml-2" href="/blog/register">Register</Link>
                        </>}
                </div>
            </nav>
            <hr /> <br />
            <div className="flex flex-wrap gap-4 mb-8 ml-8">
                {posts.map((post) => (
                    <div key={post.id} className="border-2 border-blue-800 mr-4 p-4 rounded-lg min-w-[200px] max-w-[300px] relative">
                        <div className="mb-2">{post.subject}</div>
                        <hr />
                        <div className="min-h-24 mt-2">{post.detail}</div>
                        <div>By: {post.user.name}</div>
                        <span>{post.like} <LikeButton id={post.id} likePost={likePost} unlikePost={unlikePost} /> </span>
                        {user ?
                            <>
                                <Link href={{
                                    pathname: '/blog/edit',
                                    query: { id: post.id, subject: post.subject, detail: post.detail }
                                }}
                                    className={`${style} border-0 border-indigo-50  absolute top-2 right-5`}>
                                    Edit |
                                </Link>
                                <DeleteButton
                                    id={post.id}
                                    deletePost={deletePost}
                                />
                            </>
                            :
                            ""}
                    </div>
                ))}
            </div>

            <Link href="/blog/new"
                className="border-2 border-black p-2 m-2 rounded-lg">
                New
            </Link>
            <Link href="/blog/user"
                className="border-2 border-black p-2 m-2 rounded-lg">
                User
            </Link>
            <Link href="/"
                className="border-2 border-black p-2 m-2 rounded-lg"
            >Home</Link>





            <Foot />
        </div>




    )

}