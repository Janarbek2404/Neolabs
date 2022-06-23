const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', (req,res) =>{
    res.send('Вы на главной странице')
})

app.get('/orders', (req,res) =>{
    res.send('Вы на странице ORDERS')
})

app.get('/cart', (req,res) =>{
    res.send('Вы на странице CART')
})

app.get('/api/cart', (req,res) =>{
    res.json({message: 'Какая то данные для запроса'})
})

app.post('/', (req,res) =>{
    res.status(400).send('Произошла ошибка')

    // const body = req.body
    // console.log(req.body);
    // res.send(`Ваше сообщение: ${body}`)
})













app.listen(3000,()=>{
    console.log('Server is running');
})