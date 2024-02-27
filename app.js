
const express = require('express');
const app = express();
let session = require("express-session")
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


let Pages = ["businesses", "big-data", "technlogy", "innovation-tecnhlogy", "smarthphone", "computer-construction", "game-development","artificial-intelligence", "social-media", "ti-evoluation", "impact-of-gmail"]
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
    session.view = "1"
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
app.get("/impact-of-gmail", (req, res)=>{
    res.sendFile(__dirname + "/views/gmail.html")
    req.session.view = "5"
})
app.get("/robots.txt", (req, res)=>{
    res.sendFile(__dirname + "/robots.txt")
})

app.get("/sitemap.xml", (req, res)=>{
    res.sendFile(__dirname + "/sitemap.xml")
})

io.on('connection', (socket) => {
    socket.on("IsConnect", (msg)=>
    {
        let c1time = 0
        for(var i = 0; i< Pages.length-1; i++){
            if(msg == i){
               
                let c1 = setInterval(()=>
                {
                    io.to(socket.id).emit("next", c0time)
                    c1time++
                    if(c1time>5){
                        clearInterval(c1)
                        io.to(socket.id).emit("nexturl", Pages[i+1])
                }
                }, 1000)
                break;
            }
        }
    })
    let c0time = 0
    let c0 = setInterval(()=>{
      
        io.to(socket.id).emit("chat", c0time)
        c0time++
        if(c0time>50){
            clearInterval(c0)
            io.to(socket.id).emit("chat", "14523647")
        }
    }, 1000)
})

server.listen(8080, ()=>{
    console.log("it's running")
})
