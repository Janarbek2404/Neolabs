// const express = require('express') // к глобальный
const users = require('./users') // к локальный
// const app = express() // экземпляр для сервера

// users.addUser({name: 'Janarbek', userename: 'Kerezbekov'}) //добавляет
users.updataUser('andrew7',{name:'Anderw 7', username: 'James'})//обновляет
users.deleteUser('andrew')//удаляет



console.log(users.getUsers());

// app.listen(3000, ()=>{
//     console.log('Server is running on 3000 port');
// })
