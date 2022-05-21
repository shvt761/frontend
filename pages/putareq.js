
  // import styles from '../styles/Home.module.css'
// import Head from 'next/head';
// import { app, database } from '../config/firebase';
// import Link from "next/link"
// import {
//     getAuth
// } from 'firebase/auth'
// import {
//     collection,
//     addDoc,
//     // getDocs,
//   } from 'firebase/firestore';
// import { useState } from 'react';
import Link from "next/link"
import Layout from "../Components/Layout"
export default function Register() {

    // const auth = getAuth();
    // const [address, setAddress] = useState('');
    // const [name, setName] = useState('');
    // const [units, setUnits ] = useState('');
    // const [fireData, setFireData] = useState([]);
    // const databaseRef = collection(database, 'req');

    // const addData = () => {
    //     addDoc(databaseRef, {
    //       name: name,
    //       units: units,
    //       address: address
    //     })
    //       .then(() => {
    //         alert('Data Sent')
    //         getData()
    //         setAddress('')
    //         setName('')
    //         setUnits(null)
    //       })
    //       .catch((err) => {
    //         console.error(err);
    //       })
    //   }

      // const getData = async () => {
      //   await getDocs(databaseRef)
      //     .then((response) => {
      //       setFireData(response.docs.map((data) => {
      //         return { ...data.data(), id: data.id }
      //       }))
      //     })
      // }
    
    return (
        <div>
            <Layout/>
                <h1>Add Req</h1>

                <input
                    placeholder='Address'
                    // onChange={(event) => setAddress(event.target.value)}
                    // value={address}
                    type='text'
                />

                <input
                    placeholder='Name'
                    // onChange={(event) => setName(event.target.value)}
                    // value={name}
                    type='text'
                />

                <input
                    placeholder='Units'
                    // onChange={(event) => setUnits(event.target.value)}
                    // value={units}
                    type='number'
                />
                <br/><br/>
                {/* <button onClick={addData}>submit</button> */}
        
        <br/><br/>
        <Link href="/activereq" >View Active Req</Link>
          
           {/* To fetch  */}

                {/* <div>
          {fireData.map((data) => {
            return (
              <div>
                <h3>Name: {data.name}</h3>
                <p>Address: {data.address}</p>
                <p>Units: {data.units}</p>
                <p>ID:{data.id}</p>
              </div>
            )
          })}
        </div>
               */}
        </div>
               
    )
}