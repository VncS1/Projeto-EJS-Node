const express = require('express');

//Instanciando o express
const app = express();

//Setando a linguagem que a gente vai usar (a ferramenta que vou usar para renderizar o html)
app.set("view engine", "ejs");


//Criando uma rota(Rota raiz "\") e precisa estar dentro da pasta views para funcionar
app.get("/", function(req, res){
    const items = [
        {
            title: "D",
            message: "esenvolver algo."
        },
        {
            title: "E",
            message: "nsinar EJS"
        },
        {
            title: "M",
            message: "ostrar JS"
        },
        {
            title: "A",
            message: "o tentar algo tu faz algo"
        },
        {
            title: "I",
            message: "niciando a aplicação"
        },
        {
            title: "S",
            message: "enta que la vem pedrada"
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando Javascript";

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle
    });
});

app.get("/sobre", function(req, res){
    res.render("pages/about");
});


//Carregando tudo e ouvindo a porta 8080 (localhost:8080)
app.listen(8080);

console.log("Rodando");