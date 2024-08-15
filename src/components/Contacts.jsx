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
                <span className='text-thirdColor'>
                On 
                </span>
            </h2>
            <div className="socials flex flex-wrap justify-center items-center gap-3 mt-4">

                <a href="#" className="s-icon bg-[#fff] border-mainColor border p-3 flex items-center justify-center rounded ">
                <box-icon type='logo' name='whatsapp' color={"#22DD22"}></box-icon>                    
                </a>
                <a href="#" className="s-icon bg-[#fff] border-mainColor border p-3 flex items-center justify-center rounded">
                <box-icon  name='envelope' color={"#22DD22"}></box-icon>                    
                </a>
                <a href="#" className="s-icon bg-[#fff] border-mainColor border p-3 flex items-center justify-center rounded">
                <box-icon  name='phone' type={'solid'} color={"#22DD22"}></box-icon>                    
                </a>

            </div>


    </div>
  )
}

export default Contacts
