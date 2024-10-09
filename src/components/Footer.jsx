import React from 'react'
import logoIMG from '../assets/imgs/logo.png'
function Footer() {
  return (
    <div className='flex p-6 md:items-center items-start md:justify-between justify-start md:flex-row flex-col gap-4'>
  
  
  
        <div className="sec-1 flex flex-col gap-4">
          <div className="logo w-[200px]">
                <img className='w-full'
                src={logoIMG}
                  alt="log siu students union" />
          </div>
          <p className='text-mainColor'>
          Nasrudiin Compus Hawl-wadaag, Mogadishu Somalia
          </p>
          <div className="socials flex gap-3 text-mainColor">
            <a className='bg-[#fff] rounded-full w-[50px] h-[50px] flex items-center justify-center' href="#!"><box-icon type='logo' name='facebook-circle'></box-icon></a>
            <a className='bg-[#fff] rounded-full w-[50px] h-[50px] flex items-center justify-center' href="#!"><box-icon name='twitter' type='logo' ></box-icon></a>
            <a className='bg-[#fff] rounded-full w-[50px] h-[50px] flex items-center justify-center' href="#!"><box-icon type='logo' name='linkedin-square'></box-icon></a>
            <a className='bg-[#fff] rounded-full w-[50px] h-[50px] flex items-center justify-center' href="#!"><box-icon name='instagram' type='logo' ></box-icon></a>
          </div>
        </div>
        <div className="sec-2"> 
          <h2 className='text-secondColor font-bold text-2xl'>Usefull links</h2>
          <ul className=' md:px-0 px-6'>
            <li>
              <a href="https://majsi.siu.edu.so/" className='text-mainColor hover:text-secondColor '>HOME</a>
            </li>
            <li>
              <a href="https://majsi.siu.edu.so/about/" className='text-mainColor hover:text-secondColor '>ABOUT</a>
            </li>
            <li>
              <a href="https://majsi.siu.edu.so/contacts/" className='text-mainColor hover:text-secondColor '>CONTACTS</a>
            </li>
            <li>
              <a href="https://majsi.siu.edu.so/activities/" className='text-mainColor hover:text-secondColor '>ACTIVITIES</a>
            </li>
            <li>
              <a href="https://majsi.siu.edu.so/news-2/" className='text-mainColor hover:text-secondColor '>NEWS</a>
            </li>
          </ul>
        </div>
        <div className="sec-3 space-y-5">
          <h2 className="now text-mainColor font-bold text-3xl">
            SUBSCRIBE NOW 
          </h2>

          <p className='text-mainColor'>
          Don’t miss our future updates! Get Subscribed Today!
          </p>

        <input className=' outline-none border-mainColor border-2 rounded p-3 w-[18rem]' type="text" placeholder='Email' required />

        </div>
  
  
  
  
  
  
    </div>
  )
}

export default Footer
