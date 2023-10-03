const express = require("express");
const router = express.Router();

router.get("/categorias", (req,res)=>{
   res.send("CATEGORIAS");
})

router.get("/novacategoria",(req,res)=>{
   res.send("NOVA CATEGORIA");
});

module.exports = router;
