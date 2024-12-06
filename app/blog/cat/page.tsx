"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Home() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/breeds', {
          headers: {
            'x-api-key': process.env.NEXT_PUBLIC_CAT_API_KEY,
          },
        });
        setCats(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cat data:', error);
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='p-0 '>
      <h1 className='font-bold text-blue-900 text-5xl mb-6 flex justify-center'>Cat Breeds Information</h1>
      <ul className='flex flex-wrap justify-center p-4 '>
        {cats.map((cat) => (

          
          <li key={cat.id} className=' border-2 mr-4 p-4 rounded-lg min-w-[200px] max-w-[300px] relative hover:shadow-lg mb-4 ml-4 bg-slate-50'>
            <h2 className='font-bold'>{cat.name}</h2>
            <hr />
            <p className='mb-4 mt-4'>{cat.description}</p>
            <img className='rounded-xl' src={cat.image?.url} alt={cat.name}  />
          </li>
        ))}
      </ul>
     
      <Link href="/blog"
                    className="border-2 border-pink-700  p-2 m-2 rounded-lg flex justify-center ">
                        Back
                </Link>
    </div>
  );
}
