import { useState, useEffect } from "react";

type Person = {
  name: string;
  age: number;
};

export default function App() {
  const [message, setMessage] = useState<string>("wating for message");
  const [jsonData, setJsonData] = useState<Person | null >(null);

  //getting text from backend.
  useEffect(() => {
    async function getMessage() {
      const message = await fetch("http://localhost:3000");
      try {
        const json = await message.text();
        setMessage(json);
      } catch {
        setMessage("error in fetching message");
      }
    }
    getMessage();
  }, []);

  //getting json from backend

    useEffect(() => {
    async function getMessage() {
      const message = await fetch("http://localhost:3000/about");
      try {
        console.log(message);
        const json = await message.json();
        setJsonData(json);
      } catch {
        setMessage("error in fetching message");
      }
    }
    getMessage();
  }, []);



  return(<>
  <p>{message}</p>
  <p>{jsonData?.name ??''}</p>
  <p>{jsonData?.age ?? ''}</p>
  </>) 
}
