const express = require('express');
const app = express();
const bodyparser = require("body-parser");
const connection = require("./database/database");
const categoriascontrller = require("./categorias/categoriasController");
const artigoscontroller = require("./artigos/artigosController");

//->  VIEW ENGINE...
app.set('view engine','ejs');

// ARQUIVOS ESTÁTICOS...
app.use(express.static("public"));

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

// CONEXÃO COM O BANCO BLOG...
connection
   .authenticate()
   .then(() =>{
      console.log("CONEXÃO REALIZADA COM SUCESSO");
   }).catch((error) => {
      console.log(error)
   })

app.use("/",categoriascontrller);
app.use("/",artigoscontroller);
app.get("/", (req, res) => {
   res.render("index");
})

app.listen(8081, () => {
   console.log("SERVIDOR RODANDO");
})