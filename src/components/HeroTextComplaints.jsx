import React from 'react';
import bg from "../assets/imgs/bg.jpeg"

export default function HeroTextComplaints() {
  return (
    <div
      className='w-full relative mt-10 h-[200px] overflow-hidden'
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute border border-[#ffff] w-full h-full flex flex-col items-center text-[#fff] justify-center p-3 text-center bg-mainColor bg-opacity-70">
        <div className="side flex flex-col gap-3">
          <h2 className='font-bold text-3xl'>Send us a message</h2>
          <p className='font-medium text-2xl'>
          Boga cabashada iyo Talooyinka Midowga Ardayda Jamacada SIU
           </p>
        </div>
      </div>
    </div>
  );
}
