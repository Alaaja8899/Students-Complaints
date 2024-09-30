import React from 'react'
import heroBg from '../assets/imgs/hero-bg.png'
import bookImg from '../assets/imgs/book.jpg'
export default function HeroTextComplaints() {
  return (
    <div
    className='bg-[#000] w-full relative   mt-10 h-[200px]  overflow-hidden'
    >
        <div className="absolute border border-[#ffff] w-full h-full flex flex-col items-center text-[#fff] justify-center p-3 text-center ">

                <div className="side">
                    <h2
                    className='font-bold text-2xl'
                    >
                    send us a messeage
                    </h2>
                    <p
                    className='font-medium text-2xl'
                    >
                    Boga Cabashada  midowga ardayda 
jamacada caalamiga ah ee
 somalia SIU
                    </p>
                </div>
                {/* <img 
                className='md:block hidden'
                src={bookImg} alt="book image" /> */}

        </div>

        <img src={heroBg}
        className='w-full h-[200px] object-cover overflow-hidden '
        alt="hero backgoround" />        
    </div>
  )
}
