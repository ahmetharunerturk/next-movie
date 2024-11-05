"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from 'react';

const Movies = ({ dt }) => {

  const router = useRouter();


  return (
    <div onClick={() => router.push(`/movie/${dt?.id}`)} className='min-w-[470px] relative imgContainer text-white cursor-pointer'>
      <Image
        width={470}
        height={300}
        style={{ objectFit: 'cover' }}
        src={`https://image.tmdb.org/t/p/original${(dt?.backdrop_path || dt?.poster_path || "").trim()}`}
        alt={dt?.title || "Movie Image"}
      />

      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify- opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-2xl font-bold ">
          {dt.title}
        </div>
        <div>
          {dt?.vote_average} - {dt?.release_date}
        </div>
      </div>
    </div>
  );
}

export default Movies;
