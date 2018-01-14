'use strict'
const express=require('express');
// const moduleTime=require('./moduleRequest.js');
var port = Number(process.env.PORT||8080);

const app =express();

// app.use('/',express.static(__dirname+'/public'));

app.get('/api/whoami/',function(req,res,next){
var ipadress=req.connection.remoteAddress;
var language=req.headers["accept-language"].split(',');

// var software=req

// var dateValue=req.params.dateValue;


 res.json({ipadress:ipadress,language:language[0]});
});


app.listen(port,function(){
    console.log('OK');
});