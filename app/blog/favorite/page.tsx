import MyFavorites from "../_component/MyFavorite";

export default function FavoritesPage({ userId }: { userId: number }) {
  return (
    <div>
      <h1>Your Favorite Posts</h1>
      <MyFavorites userId={userId} />
    </div>
  );
}
