const {Schema, model} = require ('mongoose')
const mongoosePaginate = require ('mongoose-paginate-v2')
const collection = 'products'

/*
"title": "producto prueba1 modificado",
"description": "Este es un producto prueba actualizado",
"price": 200,
"thumbnails": "sin imagen",
"stock": 200,
"code": "abc121"
*/

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: Number,
    thumbnails: Array,
    stock: Number,
    code: {
        type: String,
        required: true,
        unique: true
    }
})

productSchema.plugin(mongoosePaginate)
const productModel = model(collection, productSchema)

module.exports = {
    productModel
}