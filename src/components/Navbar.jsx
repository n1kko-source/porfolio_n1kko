import React from 'react'

import logo from '../assets/favicon/letra-n.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram} from 'react-icons/fa'


export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className='flex flex-shrink-0 items-center'>
        <h2 className='bg-gradient-to-r from-neutral-500 via-neutral-100 to-neutral-600 
                       bg-clip-text text-4xl font-medium tracking-wide text-transparent'>N1kko</h2>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin/>
        <FaGithub/>
        <FaSquareXTwitter/>
        <FaInstagram/>
      </div>
    </nav>
    
  )
}

export default Navbar