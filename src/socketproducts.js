const { ProductManager }  = require('./ProductManager')
const productManager = new ProductManager()

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