// require express
const express = rquirer ("express");
const { response } = require("express");
const http = require ("http"); 

http.createServer ((request,response)=>{
    response.end("hello from server");
}).listen(5000);
console.log("the server is running at http://127.0.0.1:5000/")

//require file system fs 

const fs = require ("fs")

// create file with fs 

fs.writeFile("welcome.txt","hello node ",function(error){
    if (error)throw (error)
    console.log("file created  successfully")

})

// passwords generator

const generator = require('generate-password');

const password = generator.generate({
	length: 10,
	numbers: true
});
console.log(password);
