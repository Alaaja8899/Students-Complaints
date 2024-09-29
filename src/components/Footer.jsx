import React from 'react'

function Footer() {
  return (
    <div className='flex p-6 items-center justify-between'>
  
  
  
        <div className="sec-1">
          <div className="logo w-[120px]">
                <img className='w-full'
                 src="https://majces.maahiz.com/wp-content/uploads/2024/08/LOGO-UNIONKA-01-1536x1536.png" alt="log siu students union" />
          </div>
          <p className='text-mainColor'>
          Nasrudiin Compus Hawl-wadaag, Mogadishu Somalia
          </p>
          <div className="socials flex gap-3">
            <a href="#!"><box-icon type='logo' name='facebook-circle'></box-icon></a>
            <a href="#!"><box-icon name='twitter' type='logo' ></box-icon></a>
            <a href="#!"><box-icon type='logo' name='linkedin-square'></box-icon></a>
            <a href="#!"><box-icon name='instagram' type='logo' ></box-icon></a>
          </div>
        </div>
        <div className="sec-2"> 
          <h2 className='text-secondColor font-bold text-2xl'>Usefull links</h2>
          <ul className=' list-disc'>
            <li>
              <a href="https://majces.maahiz.com/" className='text-mainColor hover:text-secondColor '>HOME</a>
            </li>
            <li>
              <a href="https://majces.maahiz.com/about/" className='text-mainColor hover:text-secondColor '>ABOUT</a>
            </li>
            <li>
              <a href="https://majces.maahiz.com/contacts/" className='text-mainColor hover:text-secondColor '>CONTACTS</a>
            </li>
            <li>
              <a href="https://majces.maahiz.com/activities/" className='text-mainColor hover:text-secondColor '>ACTIVITIES</a>
            </li>
            <li>
              <a href="https://majces.maahiz.com/news-2/" className='text-mainColor hover:text-secondColor '>NEWS</a>
            </li>
          </ul>
        </div>
        <div className="sec-3">
          <h2 className="now">
            SUBSCRIBE NOW 
          </h2>

          <p>
          Don’t miss our future updates! Get Subscribed Today!
          </p>

        <input type="text" placeholder='Email' required />

        </div>
  
  
  
  
  
  
    </div>
  )
}

export default Footer
