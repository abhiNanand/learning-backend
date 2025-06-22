
import { useState, useEffect } from "react";
import axios from 'axios';

//Axios is one of the most powerful and popular libraries used in React for making HTTP requests, especially for APIs.

export default function App(){

  const [jokes,setJokes] = useState([]);

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[]);

  return(<>hello world
  {jokes.map((joke)=>(
    <p key={joke.id}>{joke.answer}</p>
  ))}
  </>);
}