//const { ProductManager }  = require('./dao/models/ProductManager')
//const productManager = new ProductManager()
const {Router}= require ('express')
const router = Router()
const productManager = require('../src/dao/product.mongo.js')

const socketProducts = async(io) =>{
    const products = await productManager.getProducts()
    io.on('connection', socket =>{
        console.log('cliente conectado')
        socket.emit('productos', products)
    })
}

module.exports = {
    socketProducts
}