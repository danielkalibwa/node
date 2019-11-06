//console.log('Hello world')
const express = require('express');
const app = express();
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