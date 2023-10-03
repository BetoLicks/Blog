const express = require("express");
const router = express.Router();

router.get("/artigos", (req,res)=>{
   res.send("ARTIGOS");
})

router.get("/novoartigo",(req,res)=>{
   res.send("NOVA CATEGORIA");
});

module.exports = router;
