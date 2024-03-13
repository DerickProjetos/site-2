const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);


let Pages = ["businesses", "big-data", "technlogy", "innovation-tecnhlogy", "smarthphone", "computer-construction", "game-development","artificial-intelligence", "social-media", "ti-evoluation", "impact-of-gmail"]

app.set('trust proxy', 1)

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res)=>{

    res.sendFile(__dirname + "/views/index.html")
})
app.get("/about", (req, res)=>{
    res.sendFile(__dirname + "/views/about.html")
})
app.get("/contact", (req, res)=>{
    res.sendFile(__dirname + "/views/contact.html")
})
app.get("/businesses", (req, res)=>{

    res.sendFile(__dirname + "/views/businesses.html")
})
app.get("/big-data", (req, res)=>{

    res.sendFile(__dirname + "/views/big-data.html")
})
app.get("/innovation-technlogy", (req, res)=>{

    res.sendFile(__dirname + "/views/innovation-technlogy.html")
})
app.get("/evoluation-tecnhlogy", (req, res)=>{

    res.sendFile(__dirname + "/views/evoluation-tecnhlogy.html")
})
app.get("/ti", (req, res)=>{

    res.sendFile(__dirname + "/views/ti.html")
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