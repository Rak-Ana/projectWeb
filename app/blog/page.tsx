import prisma from "@/utils/db"
import Link from "next/link";
import Image from "next/image";
import Logout from "./_component/Logout";
import { getSession } from "@/utils/loginUser";
import DeleteButton from "./_component/DeleteButton";
import deletePost from "./_actions/deletePost";
import { style } from "./constants/style"
import LikeButton from "./_component/LikeButton";
import { likePost, unlikePost } from "./_actions/likePost";
import Foot from "@/components/foot";



export default async function Blog() {

    const posts = await prisma.post.findMany({
        include: {
            user: true,
        },
    });


    const user = await getSession()

    return (
        <div className="mb-10">
            <nav className="flex justify-between mb-4 ">

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
            <div className="flex flex-wrap gap-2 justify-center">
                {posts.map((post) => (
                    <div>
                        <div key={post.id} className=" border-2 mr-4 p-4 rounded-lg min-w-[200px] max-w-[300px] relative hover:shadow-lg mb-4 ml-4">
                            <div className="flex justify-between items-center">
                            <div className="mb-2">{post.subject}</div>
                            <div>
                            {user&& user.id==post.userId ?
                                <>
                                    <Link href={{
                                        pathname: '/blog/edit',
                                        query: { id: post.id, subject: post.subject, image: post.image, detail: post.detail }
                                    }}
                                        className={`${style} border-0 border-indigo-50 p-1 `}>
                                        Edit
                                    </Link>

                                    <DeleteButton
                                        id={post.id}
                                        deletePost={deletePost} />
                                </>
                                :
                                ""}
                                </div>
                            </div>
                            
                            <hr />
                            <div>
                                <img width={50} height={50} src={post.image} alt="image" className="w-full h-auto " />
                            </div>
                            <div className="min-h-24 mt-2">{post.detail}</div>
                            <div>By: {post.user.name}</div>
                            <span>{post.like} <LikeButton id={post.id} likePost={likePost} unlikePost={unlikePost} /> </span>

                           

                        </div>
                    </div>

                ))}
            </div>

            {user ? <div className="mb-5 mt-5">
                <Link href="/blog/new"
                    className="border-2 border-pink-700 p-2 m-2 rounded-lg">
                    New
                </Link>
                <Link href="/blog/user"
                    className="border-2 border-pink-700  p-2 m-2 rounded-lg">
                    User
                </Link>
                <Link href="/blog/cat"
                    className="border-2 border-pink-700  p-2 m-2 rounded-lg">
                        Cat
                </Link>

            </div>

                : " "}


            <Foot />
        </div>




    )

}