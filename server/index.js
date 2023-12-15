import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: config.env.password, 
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

app.get("/character", (req, res) => {
    const q = "SELECT * FROM characterlevel";
    db.query(q, (err, data) =>{
        if(err){
            return res.json(err);
        }
        return res.json(data);
    })
})

app.put("/character/:id", (req, res)=>{
    const q = "UPDATE characterlevel SET `Experience` = 17000 WHERE id = 1";
    console.log(req.params.id);
    const value = req.body.title;
    console.log(value)
    db.query(q, (err, data)=>{
        if(err) {
            return res.json(err);
        }
        return res.json(data);
    })
})  

app.get("/equip", (req, res) => {
    const q = "SELECT * FROM equipment";
    db.query(q, (err, data) =>{
        if(err){
            return res.json(err);
        }
        return res.json(data);
    })
})


app.post("/", (req, res) => {
    const q = "INSERT INTO notes (`title`, `content`) VALUES(?)"
    console.log(req.body);
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