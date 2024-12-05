"use client";

import { useState } from "react";

export default function FavoriteButton({ postId, userId }: { postId: number; userId: number }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = async () => {
    setIsFavorited(!isFavorited);

    try {
      const action = isFavorited ? "remove" : "add";
      const response = await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, userId, action }),
      });
      

      if (!response.ok) {
        console.error("Failed to update favorites", response.status, await response.text());
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`text-2xl p-2 rounded-full transition ${
        isFavorited ? "text-red-500" : "text-gray-400"
      } hover:scale-110`}
      aria-label="Favorite Button"
    >
      {isFavorited ? "❤️" : "🤍"}
    </button>
  );
}
