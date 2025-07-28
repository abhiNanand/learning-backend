import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

//json data jo client se aata hai  ko object me change kr deta hai.
app.use(express.json());

//send image
app.use(express.static("public"));

const jsonData = [
  { id: 1, name: "Abhishek" },
  { id: 2, name: "Ashu" },
];

//get json data
app.get("/", (req, res) => {
  res.json(jsonData);
});

//post
app.post("/", (req, res) => {
  const { id, name } = req.body;
  if (!id || !name) {
    res.status(400).json({ error: "id and name are required" });
  }
  console.log("post method called.")
  jsonData.push({ id, name });
  res.status(201).json({ message: "Date added" });
});

//delete
app.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = jsonData.findIndex((value) => value.id == id);
  if (index != -1) {
    jsonData.splice(index, 1);
  } else {
    res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({ message: "Deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
//download image
