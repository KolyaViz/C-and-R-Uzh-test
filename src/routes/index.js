import express from  "express";

const router = express.Router();

router.get("/", (req, res, next)=>{
    res.send("home")
})
router.use("/*", (req, res, next)=>{
    res.status(404).send("not-found")
})
router.use((err, req, res, next)=>{
    if(!err.statusCode){err.statusCode = 500}
    return res.status(err.statusCode).json({error: err.toString()})
})
export default router;