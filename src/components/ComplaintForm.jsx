import React from 'react'

const data =  [
    {
        name:"medicine and surgery" , 
        id: "m&s8899"
    },
    {
        name: "Education & agriculture", 
        id: "e&a8899"
    },
    {
        name: "Engineering & computer " , 
        id: "e&c8899"
    },
    {
        name: "health sciences", 
        id: "h&s8899"
    },
    {
        name: "business & economics", 
        id: "b&e8899"
    },
    {
        name: "sharia & law" , 
        id: "s&l8899"
    }

]


const smisters=[
    {
        name:'simister1',
        id:1
    },
    {
        name:'simister2',
        id:2
    },
    {
        name:'simister3',
        id:3
    },
    {
        name:'simister4',
        id:4
    },
    {
        name:'simister5',
        id:5
    },
    {
        name:'simister6',
        id:6
    },
    {
        name:'simister7',
        id:7
    },
    {
        name:'simister8',
        id:8
    }
]






function ComplaintForm() {
  return (
    <div className='container mx-auto p-6 flex md:flex-row flex-col items-center justify-center'>


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


        <form action=""
        className='flex gap-3 items-center justify-center flex-col rounded p-3 md:w-9/12 w-full border '
        >
            <input
            className='border border-secondColor p-3 w-full rounded outline-none focus:border-mainColor'
            type="name" placeholder='Name' />
            <input
            className='border border-secondColor p-3 w-full rounded outline-none focus:border-mainColor'
            type="text" placeholder='ID' />
            <input
            className='border border-secondColor p-3 w-full rounded outline-none focus:border-mainColor'
            type="tel" placeholder='Phone number' />

            <div className="foculty border-mainColor border w-full items-center justify-center text-center p-3 rounded cursor-pointer">
                <select
                className='border w-full h-full cursor-pointer'
                name="" id="">
                    {data.map(data=> {
                        return <option value={data.id}>{data.name}</option>
                    })}
                </select>
            </div>
     
            <div className="smister border-mainColor border w-full items-center justify-center text-center p-3 rounded cursor-pointer">
                <select
                className='border w-full h-full cursor-pointer'
                name="" id="">
                    {smisters.map(data=> {
                        return <option value={data.id}>{data.name}</option>
                    })}
                </select>
            </div>

            <textarea
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
