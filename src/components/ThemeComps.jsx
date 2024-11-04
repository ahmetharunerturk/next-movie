"use client";
import React,{useState, useEffect } from 'react'
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from 'next-themes'


const ThemeComps = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const themeMode = theme=== "system" ? systemTheme : theme;
  console.log(themeMode);
  

  return (
    <div>
        {
            mounted && (
                themeMode==="dark" ? 
                <CiDark onClick={()=>setTheme('light')} size={25} className='cursor-pointer'/> :
                <MdDarkMode onClick={()=>setTheme('dark')} size={25} className='cursor-pointer'/>
            )
        }
        

    </div>
  )
}

export default ThemeComps