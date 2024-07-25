import React from 'react'

import Header from './components/Header'
import Complaints from './components/Complaints'
import Footer from './components/Footer'
import Contacts from './components/Contacts'
import ComplaintForm from './components/ComplaintForm'
function App() {
  
  return (
    <div>


        <Header/>

        <ComplaintForm/>


        
      <Complaints/>
        <div className="bottom-p bg-[#8888A3] rounded-t-[30%]">
                
      <Contacts/>
      <Footer/>

        </div>

    </div>
  )
}

export default App
