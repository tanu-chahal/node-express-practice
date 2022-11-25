const httpMod = require('http')

const server = httpMod.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end('Welcome to Tanu\'s Website')
    }
    else if(req.url === '/about'){
    res.end('About Page')
    }
    else {
    res.end(`<h1>Error 404!</h1><br/><h4>Page not found :(</h4> 
    <br/> <a href='/'>Back to home</a>`)}
})

server.listen(5000);