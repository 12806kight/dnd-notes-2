 import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: process.env.Password,
    database: "test",
})

// app.get("/", (req, res) => {
//     res.json("hello");
//   });

app.get("/", (req, res) => {
    const q = "SELECT * FROM notes";
    db.query(q, (err, data) =>{
        if(err){
            return res.json(err);
        }
        return res.json(data);
    })
})

app.post("/", (req, res) => {
    const q = "INSERT INTO notes (`title`, `content`) VALUES(?)"

    const values = [
        req.body.title,
        req.body.content,
    ]

    db.query(q, [values], (err, data) => {
        if(err){
            return res.json(err);
        }
        return res.json(data);
    })
})

app.delete("/:id", (req, res)=>{
    const noteId = req.params.id;
    const q = "DELETE from notes WHERE id = ?";

    db.query(q, noteId, (err, data)=>{
        if(err) {
            return res.json(err);
        }
        return res.json("Note has been deleted.");
    })
})  

app.listen(8800, () =>{
    console.log("Connected to the backend");
})