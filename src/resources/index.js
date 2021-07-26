//SET UP
const express = require('express')
const morgar = require('morgan')

//ROUTERS
const ordersRouter = require('./resources/orders/routes')

//SERVER
const app = express()

//MIDDLEWARE
app.use(morgan('dev'))
app.use(express.json())

//ROUTES
app.use('./orders', ordersRouter)

//STARTING SERVER
app.listen(4000, () => {
	console.log('I am running!')
})
