const {Schema, model, mongoose } = require ('mongoose')
const collection = 'carts'

var Productos = mongoose.model('products');

const cartSchema = new Schema({
	status: String,
    products: [{
			id: { type: Schema.ObjectId, ref: "Productos" },
			quantity: Number
	}]
})

const cartModel = model(collection, cartSchema)

module.exports = {
    cartModel
}