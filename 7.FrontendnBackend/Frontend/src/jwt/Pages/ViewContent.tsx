import {useState,useEffect} from 'react';
import { logout } from "../utils/auth";
import { getToken } from '../utils/auth';
export default function ViewContent() {

const[userId,setUserId]=useState<string>('');
useEffect(()=>{
  const token = getToken();
  async function getUserId(){
    const data = await fetch('http://localhost:3000/id',{
      method:'GET',
      headers:{
        Authorization:`Bearer ${token}`,
      },
    });
    if(data.ok){
      const json = await data.json();
      setUserId(json.id);
    }
     else {
        window.alert("Token expired or invalid");
        logout();
        window.location.reload();
      }
  }
  getUserId();
},[])
  return (
  <>
  <h1>Welcome {userId}</h1>
  <h2>This is protected View Content. You are logged in!</h2>
  <button onClick={()=>{logout();window.location.reload();}}>Logout</button>
  </>
  );
}
