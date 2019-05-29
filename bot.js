console.log("Hola node")

var Twit = require('twit');
var config  = require('./config');
var T = new Twit(config);
console.log("El bot ha iniciado")

var tweet = {
    status: 'https://gph.is/XGmwPz'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
    if(err){
        console.log('Algo salió mal :(');
    }else{
        console.log('Twit hecho! :D');
    }
}