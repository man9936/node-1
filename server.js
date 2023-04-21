const express = require('express');

const app=express();
const port =4000;



app.get('/',(req,res)=>{
    res.send('Print Manish kesharwani!');
})

app.listen(port,(req,res,next)=>{
    console.log('listening on '+ port);
})

const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

let x= array.map((item)=>{
   if(item ==' '){return "empty string"}
   else return;
})
console.log(x);