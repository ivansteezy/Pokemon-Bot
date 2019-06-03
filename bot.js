console.log("Hola node")
var Twit = require('twit');
var config  = require('./config');
var url = require('./giphy');

var T = new Twit(config);
console.log("El bot ha iniciado")

//url.descargarGif();
setInterval(url.descargarGif, 1000*10);

//setInterval(tweetear, 1000*10);
//Este es un cambio de prueba

function tweetear(){
    var r = Math.floor(Math.random()*100);
    var tweet = {
        status: 'Tu numero es ' + r
    }

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response){
        if(err){
            console.log('Algo salió mal :(');
        }else{
            console.log('Twit hecho! :D');
        }
    }
}