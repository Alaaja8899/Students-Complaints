import React, { useState } from 'react'

const Header = () => {
    const [open , setOpen] = useState(false)
  return (
    <header className='relative shadow h-[83px] flex items-center justify-center border-secondColor '>
        <div className="container mx-auto p-6 flex justify-between items-center">

            <a href="#!" className="brand">
                <h2 className='font-bold text-mainColor md:text-2xl'>
                SIU STUDENTS UNION
                </h2>
            </a>


            <nav className={` md:flex md:relative absolute ${open ? 'flex':'hidden'} top-[100%]  gap-5 items-center justify-center bg-[#fff] md:flex-row flex-col z-10 md:w-fit w-full left-0 border p-3 rounded shadow border-mainColor md:border-none `}>
                <a href="" className='hover:border-b-2 hover:border-mainColor'>Complaints</a>
                <button
                className=' bg-mainColor text-[#fff] py-2 px-6 rounded md:w-fit w-full'
                >
                    Login
                </button>
            </nav>

            <span onClick={()=> setOpen(!open)}
            
            className=' bg-secondColor p-1 rounded flex items-center justify-center md:hidden cursor-pointer'>
            <box-icon name={`${open ? 'x':'grid'}`} color={'#12108D'}></box-icon>                
            </span>
        </div>
    </header>
  )
}

export default Header
