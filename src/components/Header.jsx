import React, { useState } from 'react'
import { useComplaintContext } from '../context/ComplaintsContextProvider'
import logoImg from '../assets/imgs/logo.jpeg'
const Header = () => {
    const [open , setOpen] = useState(false)
    const {setLogging , Logging , isLogged , setLogged} = useComplaintContext()
  return (
    <header className=' fixed  z-20 bg-[#fff] w-full top-0  shadow h-[83px] flex items-center justify-center border-secondColor '>
        <div className="container relative mx-auto p-6 flex justify-between items-center">

            <a href="#!" className="brand flex items-center justify-center gap-3">
                <img 
                className='w-[100px]'
                src={"https://majces.maahiz.com/wp-content/uploads/2024/08/LOGO-UNIONKA-01-1536x1536.png"} alt='siu union logo'/>
            </a>


            <nav className={` md:flex md:relative absolute ${open ? 'flex':'hidden'} top-[100%]  gap-5 items-center justify-center bg-[#fff] md:flex-row flex-col z-10 md:w-fit w-full left-0 border p-3 rounded  border-mainColor md:border-none `}>



                <div className="links flex gap-5 md:flex-row flex-col p-3">
                    <a href="https://majces.maahiz.com/" className='text-mainColor hover:text-secondColor '>HOME</a>
                    <a href="https://majces.maahiz.com/about/" className='text-mainColor hover:text-secondColor '>ABOUT</a>
                    <a href="https://majces.maahiz.com/contacts/" className='text-mainColor hover:text-secondColor '>CONTACTS</a>
                    <a href="https://majces.maahiz.com/activities/" className='text-mainColor hover:text-secondColor '>ACTIVITIES</a>
                    <a href="https://majces.maahiz.com/news-2/" className='text-mainColor hover:text-secondColor '>NEWS</a>
                </div>


                <a onClick={()=>{
                    setOpen(false)
                    setLogging(true)
                }}                
                href="#!" className='hover:border-b-2 hover:border-mainColor'>Complaints</a>
                <button onClick={()=>{
                    setOpen(false)
                    setLogging(true)
                    if (isLogged){
                        localStorage.clear()
                        setLogged(localStorage.getItem('isLogged'))
                        setLogging(false)
                    }
                }}
                className=' bg-secondColor text-[#fff] py-2 px-6 rounded md:w-fit w-full'
                >
                    {isLogged ? "Logout":"LogIn"}
                </button>
            </nav>

            <span onClick={()=> setOpen(!open)}
            
            className=' bg-secondColor p-1 rounded flex items-center justify-center md:hidden cursor-pointer'>
            <box-icon name={`${open ? 'x':'menue'}`} color={'#fff'}></box-icon>                
            </span>
        </div>
    </header>
  )
}

export default Header
