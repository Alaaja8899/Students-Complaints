import React, { useState } from 'react'
import { StoreComplaint } from '../database'

const data =  [
    {
        name:"Medicine and Murgery" , 
        id: "m&s8899"
    },
    {
        name: "Education & Agriculture", 
        id: "e&a8899"
    },
    {
        name: "Engineering & Computer " , 
        id: "e&c8899"
    },
    {
        name: "Health Sciences", 
        id: "h&s8899"
    },
    {
        name: "Business & Economics", 
        id: "b&e8899"
    },
    {
        name: "Sharia & Law" , 
        id: "s&l8899"
    }

]


const smisters=[
    {
        name:'Simister1',
        id:1
    },
    {
        name:'Simister2',
        id:2
    },
    {
        name:'Simister3',
        id:3
    },
    {
        name:'Simister4',
        id:4
    },
    {
        name:'Simister5',
        id:5
    },
    {
        name:'Simister6',
        id:6
    },
    {
        name:'Simister7',
        id:7
    },
    {
        name:'Simister8',
        id:8
    }
]






function ComplaintForm() {

    const [name ,setName] = useState('')
    const [id , setId] =useState('')
    const [number , setNumber] = useState('')
    const [foculty , setFoculty] = useState(data[0].id)
    const [simister , setSemister] =useState(data[0].id)
    const [message , setMessage]=useState('')



        const handleSubmit=(e)=>{
            e.preventDefault()

            if (name.length > 0 &&id.length > 0 && number.length > 0 &&message.length > 0){
                const today = new Date();
                const newDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
                const prevDate = localStorage.getItem('date')

                if (newDate == prevDate){
                    alert("You already sent complaint Try again after 24hours")
                }else{
                    StoreComplaint(name , id , number , foculty , simister , message)
                }

            }
        }


  return (
    <div className='container mx-auto mt-20 p-6 md:p-9 flex md:flex-row flex-col items-center justify-center'>


        <div className="side md:w-1/2 text-center p-3">
        <h2
        className='font-bold text-3xl text-mainColor'
        >
        Send us a Message
        </h2>
        <p>
        kusoo gudbi wixii Cabashada oo aad
qabtid halkan  si dagdag ah ayaa lagu
xalinaa cabashadaa mudane &marwo 
midowga ardayda jaamacada 
caalamiga ee somalia SIU
        </p>
        </div>


        <form onSubmit={(e)=> handleSubmit(e)}
        className='flex gap-3 items-center justify-center flex-col rounded p-3 md:w-9/12 w-full border '
        >
            <input onChange={(e)=> setName(e.target.value)} 
            className='border border-secondColor p-3 w-full rounded outline-none focus:border-mainColor'
            type="name" placeholder='Name' required/>
            <input onChange={(e)=> setId(e.target.value)}
            className='border border-secondColor p-3 w-full rounded outline-none focus:border-mainColor'
            type="text" placeholder='ID' required/>
            <input onChange={(e)=> setNumber(e.target.value)}
            className='border border-secondColor p-3 w-full rounded outline-none focus:border-mainColor'
            type="tel" placeholder='Phone number' required />

            <div className="foculty border-mainColor border w-full items-center justify-center text-center p-3 rounded cursor-pointer">
                <select onChange={(e)=> setFoculty(e.target.value)}
                className='border w-full h-full cursor-pointer'
                name="" id="">
                    <option value={data[0].id}>--Select Your foculty--</option>
                    {data.map(data=> {
                        return <option value={data.id}>{data.name}</option>
                    })}
                </select>
            </div>
     
            <div className="smister border-mainColor border w-full items-center justify-center text-center p-3 rounded cursor-pointer">
                <select onChange={(e)=> setSemister(e.target.value)}
                className='border w-full h-full cursor-pointer'
                name="" id="">
                    <option value={smisters[0].id}>--Select Your Simister--</option>

                    {smisters.map(data=> {
                        return <option value={data.id}>{data.name}</option>
                    })}
                </select>
            </div>

            <textarea required onChange={(e)=> setMessage(e.target.value)}
            className='border border-mainColor p-3 w-full rounded outline-none  resize-none'            
            name="" id=""
            placeholder='Your complaint!..'
            >

            </textarea>


        <button
        className='bg-mainColor text-[#ffff] w-full p-3 rounded'
>
            Send Comaplaint !
        </button>


        </form>

    </div>
  )
}

export default ComplaintForm
