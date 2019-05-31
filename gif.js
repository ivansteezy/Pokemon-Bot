const https = require('https');
const fs  = require('fs');

function downloadGif(url){
    const file = fs.createWriteStream("prueba.gif");
    const request = https.get(url, function(response){
    response.pipe(file);
    });
}

module.exports = {
    downloadGif
};