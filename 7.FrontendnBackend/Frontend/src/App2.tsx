import { useState, useEffect } from "react";
import { saveAs } from "file-saver";

interface Person {
  id: number;
  name: string;
}
export default function App2() {
  const [data, setData] = useState<Person[] | null>(null);
  const [id, setId] = useState<number | null>(null);
  const [name, setName] = useState<string>('');

  useEffect(() => {
    async function getData() {
      const data = await fetch("http://localhost:3000");
      const json: Person[] = await data.json(); //data.json is async so use await.
      setData(json);
    }
    getData();
  }, []);

  //use filesave library installed it using npm install --save-dev @types/file-saver
  const downloadImage = () => {
    saveAs("http://localhost:3000/image/pic1.jpeg", "download-image-jpeg");
  };

  const handleForm = async () => {
    if (id != null || name != ''){

      await fetch("http://localhost:3000",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({id,name})
      });

    }
    setId(null);
    setName('');
    await showData();
  };

  const handleDelete = async (id:number) => {
    await fetch(`http://localhost:3000/${id}`,{method:"DELETE"});
    await showData();
  };

  const showData = async () => {
    const data = await fetch("http://localhost:3000");
    const json = await data.json();
    setData(json);
  };

  return (
    <>
      <button onClick={downloadImage}>Click here to download image</button>
      <br />
      <div>
        <label>Id: </label>
        <input type="number" value={id ?? ''} onChange={(e)=>{setId(e.target.value === '' ? null :Number(e.target.value))}}/>
        <label>Name:</label>
        <input type="text" value={name ?? ''} onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={handleForm}>Add</button>
      </div>

      <ul>
        {data?.map((value) => (
        
            <li key={value.id}>
              {value.id}. {value.name}
              <button onClick={()=>handleDelete(value.id)}>Delete</button>
            </li>
        ))}
      </ul>
    </>
  );
}
