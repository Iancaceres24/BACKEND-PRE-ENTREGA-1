import express, { urlencoded } from "express"
import { cartRouter } from "./routes/carts.routes.js"
import { productsRouter } from "./routes/products.routes.js"
import viewRouter from "./routes/views.routes.js"
import  {engine} from "express-handlebars"
import {Server} from "socket.io"
import __dirname from "./utils.js"

const PORT = 8080

const app = express()

app.use(express.json())
app.use(urlencoded({extended:true}))


const httpServer = app.listen(PORT,()=>{
    console.log(`El servidor funciona en el puerto ${PORT}`)
})

const socketServer = new Server(httpServer)
app.use((req, res, next) => {
    req.socketServer = socketServer;
    next();})

app.engine("handlebars", engine())
app.set("view engine","handlebars")
app.set("views", __dirname + "/views" )

app.use(express.static(__dirname + "/public"))


app.use("/",viewRouter)
app.use("/api/products",productsRouter)
app.use("/api/carts",cartRouter)

socketServer.on("connection", socket =>{
    console.log("Nuevo cliente conectado")


    
})