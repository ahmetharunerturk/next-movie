import React from 'react'
import Image from "next/image";

const apiKey = process.env.API_KEY;

const getMovie = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
    return await res.json();
};

const Page = async ({ params }) => {
    const id = params.id;
    const movieDetail = await getMovie(id);

    console.log(movieDetail);

    return (
        <div className='relative p-7 min-h-screen'>
            <div className='relative w-full h-[500px]'>
                <Image
                    layout="fill"
                    objectFit="cover"
                    src={`https://image.tmdb.org/t/p/original${(movieDetail?.backdrop_path || movieDetail?.poster_path || "").trim()}`}
                    alt={movieDetail?.title || "Movie Image"}
                />
            </div>
            <div className='absolute top-10 left-10'>
                <div className='text-3xl font-bold my-3 text-white'>{movieDetail?.title}</div>
                <div className='w-1/2 text-white'>{movieDetail?.overview}</div>
                <div className='my-3 text-white'>{movieDetail?.vote_average} - {movieDetail?.release_date}</div>
                <div className='border w-32 hover:bg-white hover:text-black p-2 rounded-md text-center text-lg cursor-pointer text-white my-2'>Trail</div>
            </div>
        </div>
    );
};

export default Page;
