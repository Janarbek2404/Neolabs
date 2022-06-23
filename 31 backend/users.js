// CRUD - Creat Read Update Delete

const fs = require('fs')

exports.addUser = (user) =>{
    const data = fs.readFileSync('./text.txt')
    if(!data) throw data

    const users = JSON.parse(data.toString())
    users.push(user)

    fs.writeFileSync('./text.txt', JSON.stringify(users))

}


exports.getUsers = ()=>{
    const data = fs.readFileSync('./text.txt')

    if(!data) throw data
    const users = JSON.parse(data.toString())

    return users
}

exports.updataUser = (username, userData) =>{
    const data = fs.readFileSync('./text.txt')
    if(!data) throw data
    const users = JSON.parse(data.toString())

    const updataUsers = users.map(item =>{
        if(item.username === username) return {...item,...userData /*поменяет з.н*/}
        return item

        
    })
    fs.writeFileSync('./text.txt', JSON.stringify(updataUsers))

}

exports.deleteUser = (username)=>{
    const data = fs.readFileSync('./text.txt')
    if(!data) throw data
    const users = JSON.parse(data.toString())

    const updataUsers = users.filter(item =>{
        return item.username !== username
    })
    fs.writeFileSync('./text.txt', JSON.stringify(updataUsers))

}