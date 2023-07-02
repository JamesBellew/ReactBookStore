import  express from "express";
import mysql from "mysql";
import cors from "cors";
const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"test"
})

app.use(express.json())
app.use(cors())
app.get("/", (req,res)=>{
 
    res.json("hi, you are connected to the backend");
})

app.delete("/authors/:id", (req, res) => {
    const bookId = req.params.id;
    const q = " DELETE FROM authors WHERE id = ? ";
  
    db.query(q, [bookId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

app.get("/authors", (req,res)=>{
    const q = "SELECT * FROM authors";
    db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
    })})
    

app.get("/books", (req,res)=>{
const q = "SELECT * FROM books";
db.query(q,(err,data)=>{
if(err) return res.json(err)
return res.json(data)
})})


// app.post("/authors",(req,res)=>{
//     console.log('wrong loop hyaiiii')
//     const q = "INSERT INTO authors (`AuthorName`,`AuthorDesc`,`AuthorAge`,`NumberBooks`) VALUES (?)"
//     const values = [
//         req.body.AuthorName,
//         req.body.AuthorDesc,
//         req.body.AuthorAge,
//         req.body.NumberBooks
//     ]
//     db.query(q,[values],(err,data)=>{
//         if(err) return res.json(err);
//         return res.json("Author has been created");
        
//     })
// })



app.post("/books",(req,res)=>{
    const q = "INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("book has been created");
    })
})

app.listen(8800,()=>{
    console.log("connected to bfackend !!");
}) 