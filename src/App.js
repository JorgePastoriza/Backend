const express = require('express')
const handlebars = require ('express-handlebars')
// Importamos los routes de la api
const productsRouter = require ('./routes/products.router')
const cartRouter = require ('./routes/cartManager.router')
const viewStatic = require ('./routes/views.router')
//importamos el server 
const { Server } = require('socket.io') 
const {socketProducts} = require ('./socketproducts')
//____________________________________________________________________
const app = express()
const PORT = 8080
// Handlebars_________________________________________________________

app.engine('handlebars',handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')
app.use('/', viewStatic)
app.use('/realtimeproducts', viewStatic)
//____________________________________________________________________

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//con _dirname tenemos la ruta absoluta
app.use('/static', express.static(__dirname +'/public'))

//Listen to the music
const httpServer = app.listen(PORT, ()=>{
    console.log(`Escuchando el puerto: ${PORT}`)
})
const io = new Server(httpServer)

// http://localhost:8080/api/products
app.use('/api/products', productsRouter)

// http://localhost:8080/api/carts
app.use('/api/carts', cartRouter)

socketProducts(io)