"use client";

import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import MenuItem from "@/components/MenuItem"
import ThemeComps from "@/components/ThemeComps"
import { useRouter } from 'next/navigation';


const Header = () => {
  const [keyword,setKeyword] = useState('');
  const router = useRouter();  
  
  const menu = [
    {
      name: "About",
      url: "/about"
    },
    {
      name: "Sign In",
      url: "/sign-in"
    },
    {
      name: "Sign Up",
      url: "/sign-up"
    }
  ];

  const searchFunc = (e) =>{
    if(e.key === "Enter" && keyword.length>= 3 ){
      router.push(`/search/${keyword}`)
      setKeyword('')
    }
  }

  return (
    <div className='flex items-center gap-7 h-20 p-5'>
      <div className='bg-amber-600 rounded-lg p-3 text-2xl font-bold'>Next - Movie</div>
      <div className='flex flex-1 items-center gap-2 border p-3 rounded-lg'>
        <input value={keyword} onKeyDown={searchFunc} className="outline-none flex-1 bg-transparent" placeholder='Search movie' type="text" onChange={e=>setKeyword(e.target.value)}/>
        <CiSearch size={25} />
      </div>

      <ThemeComps />

      {
        menu.map((mn, i)=>(
          <MenuItem mn={mn} key={i}/>
        ))
      }




    </div>
  )
}

export default Header