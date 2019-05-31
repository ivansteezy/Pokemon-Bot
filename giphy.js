const fetch = require("node-fetch");
const gif = require('./gif');
var api = 'https://api.giphy.com/v1/gifs/search?';
var apiKey = '&api_key=16qOLmJnRy3qSaFFq78ulILolFO2H5vg';
var query = '&q=pokemon';



function descargarGif(){
    fetch(api + apiKey + query)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    //console.log(myJson.data[10].id);
    var random = Math.floor(Math.random()*24);
    console.log("Gif actualizado" + random);
    gif.downloadGif('https://media.giphy.com/media/' + myJson.data[random].id + '/giphy.gif');
  });
}

module.exports = {
    descargarGif
};


