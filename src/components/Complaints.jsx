import React, { useEffect, useState } from 'react';
import { useComplaintContext } from '../context/ComplaintsContextProvider';
import { useObject } from 'react-firebase-hooks/database';
import { ref, query } from 'firebase/database';
import { database } from '../database';

const data = [
    { name: "medicine and surgery", id: "m&s8899" },
    { name: "Education & agriculture", id: "e&a8899" },
    { name: "Engineering & computer", id: "e&c8899" },
    { name: "health sciences", id: "h&s8899" },
    { name: "business & economics", id: "b&e8899" },
    { name: "sharia & law", id: "s&l8899" }
];

const fc = data.reduce((acc, item) => {
    acc[item.id] = item.name;
    return acc;
}, {});

function Complaints() {
    const demoComplaints = [
        { name: "medicine and surgery", count: 90 },
        { name: "Education & agriculture", count: 95 },
        { name: "Engineering & computer", count: 80 },
        { name: "health sciences", count: 125 },
        { name: "business & economics", count: 24 },
        { name: "sharia & law", count: 23 }
    ];

    const [values, setValues] = useState([]);

    const messagesRef = ref(database, `Comaplaints`);  // Corrected the spelling here
    const queryRef = query(messagesRef);
    const [snapshot] = useObject(queryRef);

    const snapshotToArray = (snapshot) => {
        const array = [];
        snapshot.forEach((childSnapshot) => {
            const item = childSnapshot.val();
            item.key = childSnapshot.key;
            array.push(item);
        });
        return array;
    };

    useEffect(() => {
        if (snapshot) {
            const newValues = snapshotToArray(snapshot).map(f => ({
                id: fc[f.key],
                length: Object.keys(f).length - 1
            }));

            console.log("New Values:", newValues);
            setValues(newValues);
        }
    }, [snapshot]);

    useEffect(() => {
        if (values.length > 0) {
            console.log("Updated Values:", values);
        }
    }, [values]);

    return (
        <div className='container mx-auto p-6'>
            <h2 className='text-mainColor font-bold text-2xl text-center'>
                Complaints Of Faculty
            </h2>

            <div className="complaints-container flex flex-wrap gap-3 items-center justify-center mt-4">
                {demoComplaints.map((data, index) => (
                    <Complaint key={index} data={data} />
                ))}
            </div>
        </div>
    );
}

const Complaint = ({ data }) => {
    const { setLogging } = useComplaintContext();
    const { name, count } = data;

    return (
        <div onClick={() => setLogging(true)}
            className='flex items-center justify-center p-6 md:w-[16rem] w-full flex-col border border-[#7777] hover:border-mainColor drop-shadow-xl rounded cursor-pointer gap-2'>
            <h2 className='font-bold text-2xl'>
                {count}K
            </h2>
            <p className='bg-[#D9D9D9] text-mainColor rounded p-3'>
                {name}
            </p>
        </div>
    );
}

export default Complaints;
