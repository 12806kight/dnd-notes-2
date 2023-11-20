import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "!",
    database: "test",
})

app.get("/", (req, res) => {
    res.json("hello");
  });


app.listen(8800, () =>{
    console.log("Connected to the backend");
})