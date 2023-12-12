import { Router } from "express";
import {ProductManagerFile} from "../managers/ProductManagersFile.js"


const path = "products.json"
const productManagerFile = new ProductManagerFile(path)


const router = Router()

router.get("/",async(req,res)=>{
    const productos = await productManagerFile.getProducts()
    res.render("home",{productos})
})

router.get("/realtimeproducts", async (req, res) => {
    const productos = await productManagerFile.getProducts();
    res.render("realTimeProducts", { productos });
    req.socketServer.emit("updateProducts", { productos });
});




export default router 