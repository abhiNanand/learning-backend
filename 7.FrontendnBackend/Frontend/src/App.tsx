import { useState, useEffect } from "react";

type Person = {
  name: string;
  age: number;
  imageUrl: string,
};

export default function App() {
  const [message, setMessage] = useState<string>("wating for message");
  //1. getting text from backend.
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

  //2. getting json from backend
  const [jsonData, setJsonData] = useState<Person | null>(null);
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

  //3.geting image /static laga kr access karna parega
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  useEffect(() => {
    setImageUrl("http://localhost:3000/image/pic1.jpeg");
  }, []);

  return (
    <>
      <p>{message}</p>
      {jsonData?.imageUrl? <img src={jsonData.imageUrl} alt="From Backend" width={300} />:''}
      <p>{jsonData?.name ?? ""}</p>
      <p>{jsonData?.age ?? ""}</p>

      {imageUrl ? (
        <img src={imageUrl} alt="From Backend" width={300} />
      ) : (
        <p>Loading image...</p>
      )}{" "}
    </>
  );
}
