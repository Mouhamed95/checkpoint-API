import {useEffect, useState } from "react";
import axios from "axios";
import React from 'react'

export default function UserList() {
 
    const [user, setUser] = useState ([])
        const fetchData = async() => {
          const response = await axios("https://jsonplaceholder.typicode.com/users")
          console.log('response----------',response);
            setUser(response.data)
        }
        useEffect(() => {
        fetchData();
      }, []);
    
    
    
    return (
   <>
   <table>
   
   {user.map((el,index) => (
           <>
           <tr>
           <td>{el.id}</td>
            <td>{el.name}</td>
            <td>{el.username}</td>
            <td>{el.email}</td>
            <td>{el.address.city}</td>
            <td>{el.phone}</td>
            <td>{el.company.name}</td>
            </tr>
            </>
        
    
   ))}
   
        </table>
   </>
  )
}


