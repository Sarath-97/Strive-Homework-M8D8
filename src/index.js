import express from 'express'
import { createServer } from 'http'
import cors from 'cors'
import { Server } from 'socket.io'

const app = express()
app.use(cors())
app.use(express.json())

const httpServer = createServer(app)

const io = new Server(httpServer, { allowEIO3: true })

io.on('connection', (socket) => {
  console.log(`Socket ID: ${socket.id}`)
})
httpServer.listen(7000, () => {
  console.log('Server is listening on Port 7000')
})