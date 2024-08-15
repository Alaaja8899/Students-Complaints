import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div 
    className='w-full p-6'
    >
        <h2 className="text-center text-mainColor">
        &copy; {currentYear} All Rights Reserved 
        </h2>
    </div>
  )
}

export default Footer
