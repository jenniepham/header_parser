var express = require('express');
var app = express();

app.get('/', function(request, response){
    
    var ip = request.headers['x-forwarded-for'];
    var language = request.headers["accept-language"].split(',')[0];
    var os = request.headers['user-agent'].split(') ')[0].split(' (')[1];
    
    var result = "IP Address: " + ip + "\nLanguage:" + language + "\nOperating system: " + os;
    

    response.end(result);
    console.log(request.headers);
    
});

app.listen(process.env.PORT, function(){
    
   console.log("Listening on port " + process.env.PORT); 
   
});