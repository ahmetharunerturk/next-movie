import React from 'react'
import Movies from "@/components/Movies"

const apiKey = process.env.API_KEY;

const Page = async ({ params }) => {
    const keyword = params.keyword;

    console.log(keyword);

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}&language=en-US`)

    const data = await res.json();

    console.log(data?.results);


    return (
        <div>
            {

                !data?.results ? 
                <div>No results</div>:

                <div className='flex items-center flex-wrap gap-2'>
                    {
                        data?.results?.map((dt, i) => (
                            <Movies key={i} dt={dt} />
                          ))
                    }
                </div>


        }
        </div>
    )
}

export default Page