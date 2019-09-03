const ON_CONNECTION_IO = "connection";
const ON_SOCKET_DISCONNECT = "disconnect";
const DATA_BASE_NAME = "FlipFlop";
const MONGO_DB_PATH = "mongodb://localhost:27017";
const signSocketEvents = require("./messageHandler").signSocketEvents;
const PORT = 3600;

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http,{pingInterval:180000});
var MongoClient = require('mongodb').MongoClient;
var dbObject = null;

app.get('/',(req,res)=>{
    res.send('Your server is in the air')
})

MongoClient.connect(MONGO_DB_PATH,function(err,dataBase)
    {
        if(!err)
        {
            dbObject  = dataBase.db(DATA_BASE_NAME,{strict:true});
           
        }else
        {
            console.log(err);
        }
    }    
)

io.on(ON_CONNECTION_IO,function(socket){
    socket.removeAllListeners();
    console.log("Client connected id :" +socket.id + ",ip :"+socket.request.connection.remoteAdderss);

    socket.on(ON_SOCKET_DISCONNECT,()=>
    {
        console.log("Client disconnected id :" +socket.id + ",ip :"+socket.request.connection.remoteAdderss);
    })

    signSocketEvents(dbObject,socket)

    
})

http.listen(PORT,()=>console.log("Listening on localhost :" + PORT))

