import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from "react-icons/bs"

import { FcAbout } from "react-icons/fc"
import { FaBlogger } from "react-icons/fa"
import { BiSolidContact, BiHomeAlt, BiLogoAmazon } from "react-icons/bi"
import { MdMore } from "react-icons/md"
function Sidebar() {
  const [show, setShow] = useState(false)
  const path = useLocation().pathname;
  console.log(path)
  const nav = [
    { item: "home", link: "/", icon: <BiHomeAlt /> },
    { item: "about", link: "/about", icon: <FcAbout /> },
    { item: "blogs", link: "/blogs", icon: <FaBlogger /> },
    { item: "contact", link: "/contact", icon: <BiSolidContact /> },
    { item: "more", link: "/more", icon: <MdMore /> },
  ]
  return (
    <div className={`sidebar p-3 ${show ? "w-72" : "w-16"} duration-500 relative  h-screen bg-slate-700`}>
      <div className='flex items-center py-4'>
        <BiLogoAmazon className='text-3xl text-white' />
        <h2 className={`text-3xl text-white ml-2 origin-center duration-500 ${!show && "hidden"}`}>Sidebar</h2>
      </div>

      <BsFillArrowLeftCircleFill onClick={() => setShow(!show)} className={` ${show ? "rotate-0" : "rotate-180"} duration-300 text-white absolute top-4 cursor-pointer hover:text-slate-200 -right-5 text-3xl`} />
      <hr className='text-slate-200' />

      {nav.map(item => (
        <Link
          to={item.link}
          className={`${path === item.link ? "active:bg-slate-800 hover:bg-slate-400" : ""
            } p-2 transition duration-500 text-white flex items-center gap-15 text-lg capitalize mt-5`}
          key={item.link}
        >
          <div className='mr-3 text-3xl'>{item.icon}</div>
          <div className={`duration-300 ${!show && "hidden"}`}>{item.item}</div>
        </Link>
      ))}


    </div>
  )
}

export default Sidebar