var Express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors"); // Corrected require statement for cors middleware
const multer = require("multer");

var app = Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://admin:clemssage22@cluster0.c4nc4jo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";















var DATABASE_NAME = "todoappdb";
var database;
app.listen(5038, () => { // Corrected syntax for app.listen()
    MongoClient.connect(CONNECTION_STRING, (error, client) => {
        if (error) {
            console.error("Error connecting to MongoDB:", error);
        } else {
            database = client.db(DATABASE_NAME);
            console.log("Connection successful");
        }
    });
});

app.get('/api/todoapp/GetNotes',(request, response)=>{
    database.collection("todoappcollection").find({}).toArray((error, result)=> {
        response.send(result);
    });
})
