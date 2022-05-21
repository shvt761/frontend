import React from 'react'
import { app, database } from '../config/firebase';
import {
    addDoc,
    collection,
      } from 'firebase/firestore';
import { useState } from 'react';

function requests()
    {

    const databaseRef2 = collection(database, 'donated')
    const [fireData, setFireData] = useState([]);
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [bloodtype, setBloodType ] = useState('');    
 
    const donate = () => {
        alert("thanks for donating")
          addDoc(databaseRef2, {
            name: name,
            bloodtype: bloodtype,
            phone: phone,
          })
            .then(() => {
              alert('Data Sent')
              getData()
              setPhone('')
              setName('')
              setBloodType(null)
            })
            .catch((err) => {
              console.error(err);
            })
          }

  return(
      <div>
          <h1 className='container'></h1>
          
          <h1>Donate here with credentials</h1>

            <input
            placeholder='Phone'
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
            type='number'
            />

            <input
            placeholder='Name'
            onChange={(event) => setName(event.target.value)}
            value={name}
            type='text'
            />

            <input
            placeholder='BloodType'
            onChange={(event) => setBloodType(event.target.value)}
            value={bloodtype}
            type='text'
            />
                <br/><br/>
                <button onClick={donate}>Donate</button>
                </div>
            )  
 }

export default requests