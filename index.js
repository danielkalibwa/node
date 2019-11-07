//console.log('Hello world')
const express = require('express');
const app = express();
const path = require ('path')
app.set('view engine','pug')
app.set('views', path.join(__dirname, "views"))//setting the view engine. 

//app.get('/users/:name', (req, res)=>{
   // res.send('Hello'+" "+ req.params.name)
//})
// require is just key word used in node in order to require something
app.listen(3000,function(){
    console.log('listening on 3000')
}) 
//app.get(path,callback)
app.get('/', (req, res)=>{
    res.send('Hello world')
})

app.get('/about', (req, res)=>{
    res.send('This is About us page ')
})

app.post('/sending', (req, res)=>{
    res.send('Got a POST request at /user ')
})

app.put('/edit', (req, res)=>{
    res.send('Got a PUT request at /user ')
})

app.delete('/delete', (req, res)=>{
    res.send('Got a DELETE request at /user ')
})

app.get('/home', (req, res)=>{
    res.send('This is error us page ')
})

app.get('/users/:name', (req, res)=>{
    res.send('Hello'+" "+ req.params.name)
})

app.get('/users', (req, res)=>{
    res.send('This is class'+" "+ req.query.class+""+"cohort"+req.query.cohort)
})

app.get('/set',(req,res)=>{
    res.render('register')//app.get(path,call back())- using the get method
})



