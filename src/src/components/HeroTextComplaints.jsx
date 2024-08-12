import React from 'react'
import heroBg from '../assets/imgs/hero-bg.png'
import bookImg from '../assets/imgs/book.jpg'
export default function HeroTextComplaints() {
  return (
    <div
    className='bg-[#000] w-full relative  container mx-auto mt-10 h-[200px] rounded-[5%] overflow-hidden'
    >
        <div className="absolute border border-[#ffff] w-full h-full flex items-center text-[#fff] justify-between p-3">

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
                <img 
                className='md:block hidden'
                src={bookImg} alt="book image" />

        </div>

        <img src={heroBg}
        className='w-full h-[200px] object-cover overflow-hidden '
        alt="hero backgoround" />        
    </div>
  )
}
