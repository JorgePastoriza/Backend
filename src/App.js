const express = require('express')
const handlebars = require ('express-handlebars')
const objetconfig = require('./config/objetconfig.js')
// Importamos los routes de la api
const productsRouter = require ('./routes/products.router')
const cartRouter = require ('./routes/cartManager.router')
const viewStatic = require ('./routes/views.router')
const loginRouter = require ('./routes/session.router.js')
//importamos el server 
//const { Server } = require('socket.io') 
//const cookieParser = require('cookie-parser')
const session = require('express-session')
const FileStore = require('session-file-store')
const {create} = require('connect-mongo')
//____________________________________________________________________
const app = express()
const PORT = 8080
/*const fileStore = FileStore(session)
app.use(session({
    store: new fileStore({
        ttl: 100000*60,
        path: './sessions',
        retries: 0
    }),
    secret: 'secretCoder',
    resave: true,
    saveUninitialized: true
}))*/
app.use(session({
    store: create({
        mongoUrl: 'mongodb+srv://poito69:6vym87VKIRKCYrtK@cluster0.apxquxb.mongodb.net/ecommerce?retryWrites=true&w=majority',
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        ttl: 10000*60
    }),
    secret: 'secretCoder',
    resave: false,
    saveUninitialized: false
}))
// Handlebars_________________________________________________________
app.engine('handlebars',handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')
app.use('/', viewStatic)
//____________________________________________________________________
objetconfig.connectDB()
//app.use(express.json())
app.use(express.urlencoded({extended: true}))

//con _dirname tenemos la ruta absoluta
//app.use('/static', express.static(__dirname +'/public'))

//Listen to the music
const httpServer = app.listen(PORT, ()=>{
    console.log(`Escuchando el puerto: ${PORT}`)
})

// http://localhost:8080/api/products
app.use('/api/products', productsRouter)

// http://localhost:8080/api/carts
app.use('/api/carts', cartRouter)

//LOGIN
app.use('/api/sessions', loginRouter )