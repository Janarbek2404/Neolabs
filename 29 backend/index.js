const path = require('path') // Импортирование библиотеке Path
const http = require('http') // Импортирование библиотеке http

const server = http.createServer((request, response)=>{
    if(request.method === 'GET'){
       
        switch(request.url){
            case '/':
                response.writeHead(200, {
                    'Content-Type':'text/html; charset=utf8'
                })
                response.end('главная страница')
                break

            case '/orders': 
                response.writeHead(200, {
                'Content-Type':'text/html; charset=utf8'
                })
                response.end('вы на странице товаров')
                break

            case '/cart': 
                response.writeHead(200, {
                'Content-Type':'text/html; charset=utf8'
                })
                response.end('вы на странице корзина')
                break

            case '/aip/cart': 
                response.writeHead(200, {
                'Content-Type':'application/json'
                })
                const users = [
                    {name: 'Kushbak'},
                    {name: 'Kushbak2'}
                ]
                response.end(JSON.stringify(users))
                break

            default: 
                response.writeHead(200, {
                'Content-Type':'text/html; charset=utf8'
                })
                response.end('404 страница не найдена')
                break
        }
    }else if(request.method === 'POST'){
        const body = []
        response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf8',
            'Access-Control-Allow-Origin': '*',
        })
        request.on('data', (data) => {
            body.push(Buffer.from(data))
        })
        request.on('end', ()=>{
            const message = body[0].toString()

            response.end(`
                <h1> Ваше сообщение: ${message}</h1>
            `)
        })
    }


})

server.listen(3000, ()=>{
    console.log('Server started');
})
