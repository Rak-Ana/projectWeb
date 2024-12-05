import FavoriteButton from "./FavoriteButton";

export default function PostCard({ post, userId }: { post: any; userId: number }) {
  return (
    <div className="post-card">
      <h2>{post.subject}</h2>
      <p>{post.detail}</p>
      <FavoriteButton postId={post.id} userId={userId} />
    </div>
  );
}
