import React from 'react'

import Header from './components/Header'
import Complaints from './components/Complaints'
import Footer from './components/Footer'
import Contacts from './components/Contacts'
import ComplaintForm from './components/ComplaintForm'
import HeroTextComplaints from './components/HeroTextComplaints'
import Login from './components/Login'
import ShowComplaints from './components/ShowComplaints'
import { useComplaintContext } from './context/ComplaintsContextProvider'
function App() {
  const {isLogged ,Logging} = useComplaintContext()
  return (
    <div>

        <Header/>
        {Logging && !isLogged && <Login/>}
        <div className="gap mt-[100px]"></div>


            {
              isLogged && <ShowComplaints/>
            }
      


            {
              !isLogged && !Logging && <div>
                  <HeroTextComplaints/>    
                  <ComplaintForm/>
                  <Complaints/>
              </div>
            }


        <div className="bottom-p bg-secondColor rounded-t-[30%] mt-[150px]">
                
      <Contacts/>
      <Footer/>

        </div>

    </div>
  )
}

export default App
