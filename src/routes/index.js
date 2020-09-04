import express from  "express";
import userRouter from "./user.router.js"

const router = express.Router();

router.get("/", (req, res, next)=>{
    res.send("home")
})

router("/users")

router.use("/*", (req, res, next)=>{
    res.status(404).send("not-found")
})
router.use((err, req, res, next)=>{
    if(!err.statusCode){err.statusCode = 500}
    return res.status(err.statusCode).json({error: err.toString()})
})
export default router;