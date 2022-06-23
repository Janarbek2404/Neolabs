const math = require('./math.js')
const squareOfPI = require('./squareOfPI')
// console.log("Index ");
// console.log(math);

// console.log(math.PI);
// console.log(math.square(5));


console.log(squareOfPI);




const path = require('path')
const fs = require('fs') //file system

PATH
console.log(path.resolve());
fs.mkdir('images', {}, () =>{
    // если есть ошибка
    if(err) throw err // выбросит ошибку и остоновит работу файла 
    console.log('Папка успешно создана');
})



FS
const obj=[
    {name: "Andrew 1"},
    {name: "Andrew 2"},
    {name: "Andrew 3"},
    {name: "Andrew 4"},
    {name: "Andrew 6"},
    {name: "Andrew 5"},
]
fs.writeFile(
    'images/text.txt',
    JSON.stringify(obj, null, 3   /* отступ */)    /*'Данные кототрые должны там сохраниться'*/,
    (err)=>{
        if(err) throw err
        console.log('text.txt успешно перезаписан');
    }
)



fs.readFile('images/text.txt', (err,data)=>{
    const arr= JSON.parse(data.toString())
    if(err) throw err

    arr.push({name: "Janarbek"})
    
    fs.writeFile(
        'images/text.txt',
        JSON.stringify(arr, null, 3   /* отступ */)    /*'Данные кототрые должны там сохраниться'*/,
        (err)=>{
            if(err) throw err
            console.log('text.txt успешно перезаписан');
        }
    )



    console.log(arr);
})





