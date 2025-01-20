import React from 'react'
import Logo from '../svg/Logo'
import AndroidStore from '../svg/AndroidStore'
import AppleStore from '../svg/AppleStore'

function Footer() {
  return (
    <footer className='min-h-[288px] w-full grid grid-cols-2 bg-black'>
      <div className='flex flex-col gap-4 items-start justify-center p-20'>
        <Logo />
        <ul className='flex flex-col gap-3'>
            <div className='flex gap-4'>
                <li className='cursor-pointer text-white'>
                    Download Now
                </li>
                <li className='cursor-pointer text-white'>License</li>
            </div>
            <div className='flex justify-center gap-4'>
                <li className='cursor-pointer text-white'>About</li>
                <li className='cursor-pointer text-white'>Features</li>
                <li className='cursor-pointer text-white'>Pricing</li>
                <li className='cursor-pointer text-white'>News</li>
                <li className='cursor-pointer text-white'>Help</li>
                <li className='cursor-pointer text-white'>Contact</li>
            </div>
        </ul>
        <p className='text-sm text-slate-500'>@ 2021 Landify UI Kit. All rights reserved. mocked by Federico Aguirre</p>
      </div>
      <div className='flex gap-2 items-end justify-center text-white flex-col p-20'>
        <p>Get the App</p>
        <AndroidStore />
        <AppleStore />
      </div>
    </footer>
  )
}

export default Footer
