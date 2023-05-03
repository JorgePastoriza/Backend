const {connect} = require ('mongoose')

let url = 'mongodb+srv://poito69:6vym87VKIRKCYrtK@cluster0.apxquxb.mongodb.net/ecommerce?retryWrites=true&w=majority'

module.exports = {
    connectDB: ()=>{
        connect(url)
        console.log('DB conectada online')
    }
}