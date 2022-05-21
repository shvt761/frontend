// import React from 'react'
// import { app, database } from '../config/firebase';
// import {
//   addDoc,
//     collection,
//     getDoc,
//     getDocs,
//   } from 'firebase/firestore';
// import { useState } from 'react';
// import { useEffect } from 'react';

// function requests()
//     {
//     const databaseRef = collection(database, 'req');
//     const databaseRef2 = collection(database, 'donated')
//     const [fireData, setFireData] = useState([]);
 
//     useEffect(() => {
//       getData()
//     }, [])
    
//     const getData = async () => {
//         await getDocs(databaseRef)
//           .then((response) => {
//             setFireData(response.docs.map((data) => {
//               return { ...data.data(), id: data.id }
//             }))
//           })
//       }

//       const details = () => {
//           alert("You need slug");
//           }

//   return(
//       <div>
//           <h1 className='container'>Active Req</h1>
//           {/* <button onClick={getData}>click me</button> */}
//             <div>
//              {fireData.map((data) => {
//             return (
//                 <div className='card'>
//                 <div className='container'>
//                 <h3>Name: {data.name}</h3>
//                 <p>Address: {data.address}</p>
//                 <p>Units: {data.units}</p>
//                 <button onClick={details}>See Details</button>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//         </div>    
//   )
//  }

// export default requests

// export function req(){
//     const docRef = doc (database, 'req', '3qF5WRc9ndxsAFITAuKg')
//     getDoc(docRef)
//     .then((doc) => {
//         console.log(doc.data(),doc.id)
//     }
// }
import React from 'react'
import Layout from '../Components/Layout'

function requests() {
  return (
    <div>
      <Layout/>
      Active Req
    </div>
  )
}

export default requests