import ProductManager from './ProductManager.js'
const express = require('express')
const app = express()
const producto = new ProductManager('./Productos.json')
const prod = [await producto.getProducts()]

app.use(express.urlencoded({extended: true}))

app.get('/products', (request, response)=>{
    response.send({prod})
})

app.get('/products/:pid', (request, response)=>{
    const produ = prod.find(pd => pd.id === request.params.pid)
    if(!produ) return response.send({error: 'No se encuentra el producto'})
    response.send({produ})
})

app.listen(8080, ()=>{
    console.log('Escuchando el puerto 8080')
})