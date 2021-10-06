import express from "express"
import cors from "cors"
import {createServer} from "http"
import {Server, Socket} from "socket.io"



const server = express()
const PORT = 7000

server.use(cors())
server.use(express.json())

server.listen 
 
const httpServer = createServer(server)
// Creating socket server

const io = new Server(httpServer, {allowIEO3:true})

io.on("connecton", socket => {
    console.log(socket.id);
})



httpServer.listen(PORT, () =>{
    console.log(`Sever is running on port = ${PORT}`);
})