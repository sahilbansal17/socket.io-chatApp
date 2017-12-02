//console.log("Sahil Bansal");

/*var a = 0.1;
var b = 0.2;
var c = a+b;
console.log(c);
d = [331,455,61,112,14,11141,5131,3246];
e = d.sort(function(a,b){
    return a-b;
});
console.log(e);*/

/*
var file = require("fs"); // can use function of other js file, 'require' fn works only in nodejs, require filesystem(fs)
file.readFile('name.txt',function(err,data){
    if(err) throw err;
    console.log(data.toString()); // data is in binary format
})
*/

const express = require('express');
const app = express(); // one server, need apps to run express
const path = require('path'); //get the path 

app.get('/',function(req,res){ //async calls
    console.log(req.query); // anything after /? , eg. /?name="sahil"
    let name = req.query.name;
    res.send("<H1>"+name+"</H1>");
})

app.get('/sahil',function(req,res){ //async calls
    res.send("<H1>Sahil Bansal</H1>");
})

//app.use() - middleware concept
app.use('/',express.static(path.join(__dirname,'/public_static'))); //dirname returns the path till now
//all files in this path,i.e. public_static folder can be requested by client

app.listen(9090,function(){
    console.log("server has started");
})
