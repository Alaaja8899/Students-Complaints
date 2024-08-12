import React from 'react'
import 'boxicons'
function Contacts() {

        const ContactINFO={
            email:"SIUunion@gmail.com",
            phone:"+252610000000",
            whatsapp:"+252610000000",
        }

  return (
    <div className='container mx-auto p-6'>
        
            <h2 className='text-2xl font-bold text-center text-mainColor flex gap-2 justify-center items-center'>
                Find us 
                <span className='text-[#D9D9D9]'>
                On 
                </span>
            </h2>
            <div className="socials flex flex-wrap justify-center items-center gap-3 mt-4">

                <a href="#" className="s-icon bg-[#D9D9D9] p-3 flex items-center justify-center rounded ">
                <box-icon type='logo' name='whatsapp' color={"#12108D"}></box-icon>                    
                </a>
                <a href="#" className="s-icon bg-[#D9D9D9] p-3 flex items-center justify-center rounded">
                <box-icon  name='envelope' color={"#12108D"}></box-icon>                    
                </a>
                <a href="#" className="s-icon bg-[#D9D9D9] p-3 flex items-center justify-center rounded">
                <box-icon  name='phone' type={'solid'} color={"#12108D"}></box-icon>                    
                </a>

            </div>


    </div>
  )
}

export default Contacts
