const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.listen(8000);

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
})
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('./public'));
// const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/about', (req, res)=>{
    res.send('Hello from about section');
})
app.post('/validateForm', (req, res)=>{
    //do something here!!
    console.log(req.body);
    if(req.body.username == 'admin' && req.body.userpassword == 'admin@123')
    res.redirect('/sucess');
    else
    res.redirect('/failed');
})
app.get('/sucess', (req,res)=>{
    res.send('Validation Sucessfull');
})
app.get('/failed', (req, res)=>{
    res.send('Validation Failed!');
})
