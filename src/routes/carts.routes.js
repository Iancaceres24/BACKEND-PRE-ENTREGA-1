import {Router} from "express"
import {CartManagerFile} from "../managers/CartManagerFile.js"

const path = "carts.json"
const router = Router() 
const cartManagerFile = new CartManagerFile(path)

router.get("/", async(req,res)=>{
    const carts = await cartManagerFile.getCarts()
    res.send({
        status:"succes",
        carts: carts
    })
})

router.get("/:cid", async (req, res) => {
    const carts = await cartManagerFile.getCarts()
    const cid = req.params.cid;
    const carri = carts.find(car =>{return car.id == cid})

    if (!carri) {
        return res.json({
            error: "Producto no encontrado"
        });
    } else {
        res.json({
            Carrito: carri
        });
    }
});

router.post("/", async(req,res)=>{
    const cart = req.body
    const products = req.body.products
    const carts = await cartManagerFile.crearCarts(cart,products)
    
        
    res.send({
        status:"succes",
        msg: "Producto creado",
        carritos: cart
    })
})
router.post("/:cid/products /:pid", async(req,res)=>{
    const cid = req.params.cid
    const pid = req.params.pid

    res.send({
        status:"succes",
        msg: `RUTA POST CART - agrego producto al carrito. CID ${cid} - PID ${pid}`
    })
})



export {router as cartRouter}