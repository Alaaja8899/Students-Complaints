import React, { useState } from 'react'
import { useComplaintContext } from '../context/ComplaintsContextProvider'


const users=[
  {
      username:"Admin",
      password:"admin123"
  },
  {
      username:"SIU",
      password:"siu123"
  },
  {
      username:"Alaaja",
      password:"aj123"
  },
]


function Login() {
      const [username , setUsername] = useState("")
      const [password , setPassword] = useState("")
      const {setLogged , setLogging} = useComplaintContext();

    const handleSubmit =(e)=>{
      e.preventDefault()

      if(username.length>0  && password.length >0){
          let Logged = false
          users.map(user=>{
            if (user.username == username && user.password == password){
              Logged =true
            }
          })
        
        if (Logged){
          alert("Sucessfully!")
          localStorage.setItem('isLogged' , Logged)
          setLogged(localStorage.getItem('isLogged'))
        }else{
          alert("Wrong password!!")
          setUsername("")
          setPassword("")
        }
      }

    }

  return (
    <div 
    className='flex items-start justify-center p-6     absolute bg-[#ffff] h-screen z-10 pt-[20px] w-full'
    >
        
        <form action="" onSubmit={(e)=> handleSubmit(e)}
        className='flex flex-col  border border-thirdColor p-3 gap-3 rounded md:w-[30rem] w-full shadow'
        >
            <span onClick={()=> setLogging(false)}
            className='bg-thirdColor text-center cursor-pointer p-3 text-[#fff] rounded'
            >
              {`<  back`}
            </span>
            <h2 className='font-medium text-center text-2xl'>Log into admin</h2>

            <p className='text-center text-mainColor'>
              Fill into Username and Password to see the dashbord
            </p>

            <input onChange={(e)=> {
                  setUsername(e.target.value)
            }  } value={username} 
            className='p-3 rounded w-full border-2 focus:border-mainColor border-secondColor outline-none '
            type="username" name="" id="" placeholder='Username' required />
            <input onChange={(e)=> {
              setPassword(e.target.value)
            }} value={password}
            className='p-3 rounded w-full border-2 focus:border-mainColor border-secondColor outline-none '
            type="password" name="" id="" placeholder='Password' required/>
            <button type='submit'
            className='bg-thirdColor p-3 w-full text-[#fff] rounded'
            >Login !</button>
        </form>

    </div>
  )
}

export default Login
