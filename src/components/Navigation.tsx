import React from 'react';
import {Link} from 'react-router-dom';

export function Navigation() {
  return (
    <nav className='h-[50px] w-[100%] fixed flex justify-evenly px-5 items-center bg-gray-500 text-white'>
      <span className='font-bold'>TypeScript App</span>

      <span>
        <Link className='mr-3' to="/">Products</Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  )
}