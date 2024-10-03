import React from 'react';
export default function HeroTextComplaints() {
  return (
    <div
      className='w-full relative mt-10 h-[200px] overflow-hidden'
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0dWRlbnRzfGVufDB8fDB8fHww')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute border border-[#ffff] w-full h-full flex flex-col items-center text-[#fff] justify-center p-3 text-center bg-mainColor bg-opacity-70">
        <div className="side flex flex-col gap-3">
          <h2 className='font-bold text-3xl'>Send us a message</h2>
          <p className='font-medium text-2xl'>
            Boga Cabashada midowga ardayda
            jamacada caalamiga ah ee Somalia SIU
          </p>
        </div>
      </div>
    </div>
  );
}
