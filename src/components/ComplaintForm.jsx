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



function ComplaintForm() {
  return (
    <div>


        <form action="">
            <input type="name" placeholder='Name' />
            <input type="text" placeholder='ID' />
            <input type="tel" placeholder='Phone number' />

            <div className="foculty">
                <select name="" id="">
                    {data.map(data=> {
                        return <option value={data.id}>{data.name}</option>
                    })}
                </select>
            </div>

        </form>

    </div>
  )
}

export default ComplaintForm
