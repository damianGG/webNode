const { lstat } = require("fs");
const http = require("http");

const express = require("express"); //nie korzystam już z http!!
const port = process.env.PORT || 3000;
const app = express();
const path = require('path')
//gdy uzytkownik wchodzi na stronę główną
const sample = () =>'Jaki podtytul??';

app.set("view engine","hbs")
app.get('/', function (req, res) {
    res.render("index",{
        pageTitle: "21.02.2021",
        subSubTitle: sample()   
    });
});

app.use('/assets', express.static(path.join(__dirname, "./assets")));

app.use('/js', express.static(path.join(__dirname, "./js")));

//gdy uzytkownik wchodzi na stronę o nas
app.get('/about', function (req, res){
res.send("strona o mnie")
})
app.listen(port, (err) => {
if (err) {
return console.log("coś poszło nie tak...:", err)
}
console.log("serwer działa", port)
})