import React, { useEffect, useState } from 'react';
import { useObject } from 'react-firebase-hooks/database';
import { ref, orderByChild, query } from 'firebase/database';
import { database, DeleteComplaint } from '../database';

const data = [
    {
        name:"--Select Foculty--",
        id: null
    },

  { name: "Medicine", id: "m&s8899" },
  { name: "Education", id: "e8899" },
  { name: "Agriculture and Enviromental Science", id: "a8899" },
  { name: "Engineering & Computer Technology", id: "e&c8899" },
  { name: "Health Sciences", id: "h&s8899" },
  { name: "Business & Economics", id: "b&e8899" },
  { name: "Sharia & Law", id: "s&l8899" },
  { name: "Arts and Social Science" , id: "a&ss8899"}
];

// Transform the array into an object for easy lookup
const fc = data.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});

function ShowComplaints() {
  const [filtered, setFiltered] = useState(data[0].id);

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

  return (
    <div>
      <div className="menue container mx-auto p-6 flex items-center justify-center flex-col text-center gap-3">
        <h2 className="text-3xl font-medium text-mainColor  pb-2">
          Complaints
        </h2>
        <p>Halkani waa cabashooyinka ay ardayda soo gudbiyeen kala filtraey adigo gujinaya buttonada hoose</p>

        <div className="dropdown w-full">
          <select
            value={filtered}
            onChange={(e) => setFiltered(e.target.value)}
            className="p-3 border border-mainColor rounded w-full "
          >
            {data.map((faculty) => (
              <option key={faculty.id} value={faculty.id}>
                {faculty.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <hr />

      <div className="complaints flex gap-2 items-center justify-center flex-wrap mt-5 mb-5 p-6">
        {snapshot && snapshotToArray(snapshot).length === 0 && <h2>No Complaints Yet!</h2>}
        {snapshot && snapshotToArray(snapshot).map((comp) => (
          <SingleComplaint key={comp.key} data={comp} />
        ))}
      </div>
    </div>
  );
}

const SingleComplaint = (props) => {
  const { name, id, simister, foculty, number, message, messageId } = props.data;

  const Copy = (item) => {
    navigator.clipboard.writeText(item).then(() => alert("Text copied to clipboard!"));
  };

  return (
    <div className="border md:w-[25rem] w-full p-3 rounded border-secondColor flex flex-col gap-2">
      <h2 className="text-center font-medium">Unsolved Complaint!!</h2>

      <h2 className="border-mainColor border p-3 font-medium rounded cursor-pointer" onClick={() => Copy(name)}>
        Name : {name}
      </h2>
      <h2 className="border-mainColor border p-3 font-medium rounded cursor-pointer" onClick={() => Copy(foculty)}>
        Faculty : {fc[foculty]}
      </h2>
      <h2 className="border-mainColor border p-3 font-medium rounded cursor-pointer" onClick={() => Copy(id)}>
        ID : {id}
      </h2>
      <h2 className="border-mainColor border p-3 font-medium rounded cursor-pointer" onClick={() => Copy(simister)}>
        Semester : {simister}
      </h2>
      <h2 className="border-mainColor border p-3 font-medium rounded cursor-pointer" onClick={() => Copy(number)}>
        Number : {number}
      </h2>
      <p className="border-mainColor border p-3 font-medium rounded cursor-pointer" onClick={() => Copy(message)}>
        Message : {message}
      </p>

      <button onClick={() => DeleteComplaint(messageId, foculty)} className="bg-mainColor w-full text-[#fff] p-3 rounded text-white">
        Delete this complaint!
      </button>
    </div>
  );
}

export default ShowComplaints;
