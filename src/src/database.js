import { initializeApp } from "firebase/app";
import { getDatabase , remove  ,serverTimestamp , ref , set , onChildAdded , onValue , get , child , orderByChild} from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyC_WlbzYahYEQjdPTttTMzDHH3YBtrbn64",
    authDomain: "complaints-ec9d1.firebaseapp.com",
    databaseURL: "https://complaints-ec9d1-default-rtdb.firebaseio.com",
    projectId: "complaints-ec9d1",
    storageBucket: "complaints-ec9d1.appspot.com",
    messagingSenderId: "150339741837",
    appId: "1:150339741837:web:f96bb01ae1f1e9ea945ac4"
  };


  const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);



const generateID = () => {
  // Logic to generate a unique ID
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const idLength = 16;
  let id = '';

  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    id += chars.charAt(randomIndex);
  }

  return id;
};
export const StoreComplaint = (name , id , number , foculty , simister ,message ) => {
  const messageId = generateID(); 

  const messagesRef = ref(database, `Comaplaints/${foculty}/` + messageId);
  set(messagesRef, {
    timestamp: serverTimestamp(),
    name:name,
    messageId:messageId,
    id:id , 
    number:number,
    foculty:foculty,
    simister:simister,
    message:message
  }).then(() => {
    alert("Complaint sent successfully!")
    const today = new Date();
    const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

    localStorage.setItem("date" , formattedDate)
    location.reload()
}).catch((error) => {
    console.error('Error storing message:', error);
  });
};


export const DeleteComplaint = (messageId, foculty) => {
    const messagesRef = ref(database, `Comaplaints/${foculty}/` + messageId);
  
    remove(messagesRef)
      .then(() => {
        alert("Complaint deleted successfully!");
      })
      .catch((error) => {
        console.error('Error deleting message:', error);
      });
  };
  