const express = require("express");
// const nodeFetch = require("node-fecth");

const app = express();
const port = 3000;

//temple engine
app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.json());


Rutas:

//[GET] http://localhost:3000 Home de la app. Se renderiza home.pug

app.get("/", async (req,res) => {
    res.render("home.pug")
});

//[GET] http://localhost:3000/film/:title Muestra los datos de una peli por título. Internamente se hace un fetch a la API de pelis para obtener dichos datos. Debe renderizar film.pug
app.get("/film/:title", async (req,res) => { res.render("film") });

//[POST] http://localhost:3000/film/ Se envía el POST a esta ruta cuando envías el formulario de búsqueda de peli de home.pug. Puede ser de ayuda usar res.redirect()

app.post("/film", async (req,res) => {});


app.listen(port, ()=> {
    console.log(`El servidor esta corriendo en el puerto ${port}`)
})