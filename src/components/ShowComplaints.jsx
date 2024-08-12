import React, { useEffect, useState } from 'react'

import {useObject , useObjectVal} from "react-firebase-hooks/database"
import {ref , push , serverTimestamp , orderByChild , query} from "firebase/database"
import { database, DeleteComplaint } from '../database';







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



function ShowComplaints() {
    const [filtered,setFiltered] = useState(data[0].id)

    const messagesRef = ref(database, `Comaplaints/${filtered}`);
    const queryRef = query(messagesRef, orderByChild('timestamp'));
    const [snapshot, loading, error] = useObject(queryRef);
  
    
  const snapshotToArray = (snapshot) => {
    const array = [];
    snapshot.forEach((childSnapshot) => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      array.push(item);
    });
    return array;
  };
  

    useEffect(()=>{
        snapshot && console.log(snapshotToArray(snapshot));
        
    },[snapshot])

  return (
    <div>
        
        <div className="menue container mx-auto p-6 flex items-center justify-center flex-col text-center gap-3">

        <h2
        className='text-3xl font-medium border-b-2 border-[red] pb-2'
        >
            Compalints 
        </h2>
        <p 
        className=''
        >
            Halkani waa cabashooyinka ay ardayda soo gudbiyeen kala filtraey adigo gujinaya buttonada hoose
        </p>
        {/* -------------------- */}


            <div className="btns flex gap-2 flex-wrap items-center justify-center">

                    {data.map(foculty=>{
                        return <button onClick={()=> setFiltered(foculty.id)}
                        className={`p-3 ${filtered==foculty.id && 'bg-secondColor'} border border-mainColor md:w-fit w-full rounded`}
                        >
                                {foculty.name}
                        </button>
                    })}

            </div>


        {/* --------- */}
        </div>

        <hr />
        {/* ---comaplaint cards--- */}
        <div className="complaints flex gap-2 items-center justify-center flex-wrap mt-5 mb-5 p-6">
                {snapshot&& snapshotToArray(snapshot).length ==0 && <h2>No Comaplaints Yet!</h2>}
                {snapshot&& snapshotToArray(snapshot).map(comp=>{
                    return    <SingleCompalint data={comp} />
                })}

        </div>



    </div>
  )
}





const SingleCompalint=(props)=>{

    const {name , id , simister , foculty , number , message , messageId} = props.data

    return(
    <div className=' border md:w-[25rem] w-full p-3 rounded'>

        <h2>
            Name : {name}
        </h2>
        <h2>Foculty : {foculty}</h2>
        <h2>ID : {id}</h2>
        <h2>Simister : {simister}</h2>
        <p>
            Message : {message}
        </p>

        <button
        onClick={()=> DeleteComplaint(messageId , foculty)}
        className='bg-[red] w-full p-3 rounded text-[white]'
        >
            Delete this complaint !
        </button>
    </div>
    )
}












export default ShowComplaints
