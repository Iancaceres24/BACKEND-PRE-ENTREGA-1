import express, { urlencoded } from "express"
import { cartRouter } from "./routes/carts.routes.js"
import { productsRouter } from "./routes/products.routes.js"

const PORT = 8080

const app = express()

app.use(express.json())
app.use(urlencoded({extended:true}))

app.listen(PORT,()=>{
    console.log(`El servidor funciona en el puerto ${PORT}`)
})

app.use("/api/products",productsRouter)
app.use("/api/carts",cartRouter)

