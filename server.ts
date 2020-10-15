import * as express from "express";
import * as mongodb from "mongodb";
const app=express()
app.get('/phones',(req,res)=>{
 mongodb.MongoClient.connect("mongodb+srv://admin:admin@employeemanagementsyste.ccfym.mongodb.net/Ecommerce?retryWrites=true&w=majority",(err,client)=>{
if (err) throw err;
else{
    let db= client.db("Ecommerce");
    db.collection("phones").find().toArray((err,array)=>{
        res.send(array)
    })
}
 })
})
let port=process.env.PORT || 8080;
app.listen(port);
console.log("server started")