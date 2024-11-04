"use client";
import { useSearchParams } from "next/navigation"
import React from 'react'
import Link from "next/link"


const Tabs = () => {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')

    console.log(genre, "genre");


    const tabs = [
        {
            name: "Populer",
            url: "/populer"
        },
        {
            name: "Latest",
            url: "/latest"
        },
        {
            name: "Soon",
            url: "/upcoming"
        }
    ]
    return (
        <div className='p-5 m-5 gap-7 bg-gray-100 dark:bg-gray-900 flex items-center justify-center'>
            {
                tabs.map((tab, i) => (
                    <Link
                        className={`cursor-pointer hover:opacity-80 transition-opacity ${tab.url === genre ? "underline text-amber-600 underline-offset-8" : ""
                            }`}
                        href={`/?genre=${tab.url}`}
                    >
                        {tab.name}
                    </Link>

                ))
            }
        </div>
    )
}

export default Tabs