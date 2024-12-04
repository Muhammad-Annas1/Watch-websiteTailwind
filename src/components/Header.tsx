import React from 'react'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="bg-[#1A181C] text-white p-5 flex justify-between items-center font-sans ">
      <h1 className="text-xl">Watch Store</h1>
      <nav className="flex  gap-1 sm:gap-10 text-lg font-semibold items-center pr-2">
        <Link href="/" className="hover:bg-yellow-500 py-2 px-4 rounded -mr-8 ">Home</Link>
        <Link href="/store" className="hover:bg-yellow-500 py-2 px-4 rounded -mr-8">Store</Link>
        <Link href="/watches" className="hover:bg-yellow-500 py-2 px-4 rounded -mr-2">Our Collections</Link>
        <Link href="/contact" className="hover:bg-yellow-500 py-2 px-4 rounded -ml-8  ">Contact</Link>
        <FaShoppingCart className="text-white text-2xl  " />
      </nav>
    </header>
  )
}

export default Header
