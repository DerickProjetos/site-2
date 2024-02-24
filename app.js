const express = require('express');
const app = express();
let session = require("express-session")
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.set('trust proxy', 1)

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res)=>{

    res.sendFile(__dirname + "/views/index.html")
})
app.get("/about", (req, res)=>{
    res.sendFile(__dirname + "/views/about.html")
})

app.get("/businesses", (req, res)=>{
    res.sendFile(__dirname + "/views/businesses.html")
})
app.get("/big-data", (req, res)=>{
    res.sendFile(__dirname + "/views/big-data.html")
})
app.get("/technlogy", (req, res)=>{
    res.sendFile(__dirname + "/views/technlogy.html")
})
app.get("/innovation-tecnhlogy", (req, res)=>{
    res.sendFile(__dirname + "/views/innovation-tecnhlogy.html")
})
app.get("/smarthphone", (req, res)=>{
    res.sendFile(__dirname + "/views/smarthphone.html")
})

app.get("/computer-construction", (req, res)=>{
    res.sendFile(__dirname + "/views/computer_construction.html")
})
app.get("/game-development", (req, res)=>{
    res.sendFile(__dirname + "/views/game.html")
})
app.get("/artificial-intelligence", (req, res)=>{
    res.sendFile(__dirname + "/views/artificial-intelligence.html")
})
app.get("/social-media", (req, res)=>{
    res.sendFile(__dirname + "/views/social-media.html")
})
app.get("/ti-evoluation", (req, res)=>{
    res.sendFile(__dirname + "/views/ti.html")
})
app.get("/robots.txt", (req, res)=>{
    res.sendFile(__dirname + "/robots.txt")
})

app.get("/sitemap.xml", (req, res)=>{
    res.sendFile(__dirname + "/sitemap.xml")
})

io.on('connection', (socket) => {
    let b = 0
    let c = setInterval(()=>{
      
        io.to(socket.id).emit("chat", b)
        b++
        if(b>10){
            clearInterval(c)
            io.to(socket.id).emit("chat", "ah544-12")
        }
    }, 1000)
  
})

server.listen(8080, ()=>{
    console.log("it's running")
})
