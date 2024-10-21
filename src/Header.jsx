import React from 'react'
import { Link } from 'react-router-dom'
function Header() {

    return (
        <div className="py-7 px-10 bg-emerald-600 text-white flex items-center justify-between">

            <h1 className='text-2xl'>logo <input className='text-black ' type="text" /> </h1>
            <div className='flex gap-10 text-lg underline '>
                <Link to='/home'> Home</Link>
                <Link to='/about'> About</Link>
                <Link to='/product'> Product</Link>
                <Link to='/contact'> Contact</Link>
                {/* <a className='text-xl underlin' href='/home'> Home</a>
                <a className='text-xl underline' href='/about'>About</a>
                <a className='text-xl underline' href='/product'>Product</a>
                <a className='text-xl underline' href='/contact'>Contact</a> */}

            </div>
        </div>
    )
}

export default Header
