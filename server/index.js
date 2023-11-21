import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: process.env.password,
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

app.listen(8800, () =>{
    console.log("Connected to the backend");
})