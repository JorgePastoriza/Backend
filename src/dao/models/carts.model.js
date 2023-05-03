const {Schema, model} = require ('mongoose')
const collection = 'carts'

/*
"id": 1,
		"products": [
			{
				"id": 1,
				"quantity": 2
			},
			{
				"id": 3,
				"quantity": 1
			}
		]
*/

const cartSchema = new Schema({
	status: String,
    products: [{
			id: Schema.ObjectId,
			quantity: Number
	}]
})

const cartModel = model(collection, cartSchema)

module.exports = {
    cartModel
}