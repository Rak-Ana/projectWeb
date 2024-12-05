'use client'

import { useEffect, useState } from "react";

export default function MyFavorites({ userId }: { userId: number }) {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch(`/api/favorites?userId=${userId}`);
        if (response.ok) {
          const data = await response.json();
          setFavorites(data);
        } else {
          setError('No favorites found');
        }
      } catch (error) {
        setError('Failed to fetch favorites');
        console.error(error);
      }
    };

    fetchFavorites();
  }, [userId]);

  return (
    <div>
      {error ? (
        <div className="error-message">{error}</div> // แสดงข้อความผิดพลาด
      ) : (
        <div>
          <h1>Your Favorites</h1>
          <ul>
            {favorites.map((favorite) => (
              <li key={favorite.id}>{favorite.subject}</li> // แสดงโพสโปรด
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
