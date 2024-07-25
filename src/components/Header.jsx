import React from 'react'

const Header = () => {
  return (
    <header className='shadow h-[83px] flex items-center justify-center border border-[rgb(255,0,0)]'>
        <div className="container mx-auto p-6 flex justify-between items-center">

            <a href="#!" className="brand">
                <h2 className='font-bold text-mainColor md:text-2xl'>
                SIU STUDENTS UNION
                </h2>
            </a>


            <nav className=' md:flex hidden  gap-5 items-center justify-center'>
                <a href="" className='hover:border-b-2 hover:border-mainColor'>Complaints</a>
                <button
                className=' bg-mainColor text-[#fff] py-2 px-6 rounded'
                >
                    Login
                </button>
            </nav>

        </div>
    </header>
  )
}

export default Header
