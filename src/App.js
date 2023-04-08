const express = require('express')

// Importamos los routes de la api
const productsRouter = require ('./routes/products.router')
const cartRouter = require ('./routes/cartManager.router')
const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//con _dirname tenemos la ruta absoluta
app.use(express.static(__dirname +'/public'))

// Para direccionar al root
/* app.use('/', (req, res) => {
    res.send('root')
}) */

// http://localhost:8080/api/products
app.use('/api/products', productsRouter)

// http://localhost:8080/api/carts
app.use('/api/carts', cartRouter)


//Listen to the music
app.listen(PORT, ()=>{
    console.log(`Escuchando el puerto: ${PORT}`)
})