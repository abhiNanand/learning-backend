import { useState } from "react";
import { saveToken } from "../utils/auth";
import "../../App.css";

export default function Login() {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignin = async () => {
    try {

      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, password }),
      });

      const data = await res.json();

      console.log(data);

      if (res.ok) {
        alert("Login Successful ");
       saveToken(data.token);
      } else {
        alert(data.message || "Login Failed ");
      }
    } catch (err) {
      alert("Something went wrong");
      console.error(err);
    }

    window.location.reload();

  };
  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <label>User Id:</label>{" "}
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <button onClick={handleSignin}>Sign IN</button>
    </div>
  );
}
