import React, { createContext, useContext, useState } from 'react'

const ComplaintContext = createContext()


function ComplaintsContextProvider({children}) {
    const [isLogged , setLogged] = useState(localStorage.getItem('isLogged') ? true:false)
    const [Logging , setLogging]=useState(false)
    const value = {isLogged , setLogged , Logging , setLogging}
    return (
    <ComplaintContext.Provider value={value}>
        {children}
    </ComplaintContext.Provider>
  )
}



export const useComplaintContext=()=>{
    return useContext(ComplaintContext)
}


export default ComplaintsContextProvider
