const express = require('express')

const orderRouter = express.Router()

// it imports them as they were defined initialy, when imported
// it will work for now to do our checks.
const hamburgers = require('../hamburgers/routes')

let orders = []

//validations
function validateOrder(incomingOrder) {
	// filter gives back the singleOrder if the f return is true, otherwise it does not return a/t
	// filter if doesn't find a/t, will give back an empty[]
	// !! return true or false (no need to the last return then)
	// return !!incomingOrder.filter(singleOrder => {
	const filterResult = incomingOrder.filter(singleOrder => {
		const foundHamburger = hamburgers.find(
			hamburger => hamburger.id === singleOrder.hamburger_id
		)
		return foundHamburger.quantity >= singleOrder.quantity
		// return foundHamburger
		// ? foundHamburger.quantity >= singleOrder.quantity
		// : false
	})
	return filterResult.length === incomingOrder.length
}

orderRouter.get('/', (req, res) => {
	res.json({ orders })
})

orderRouter.post('/', (res, res) => {
	const orderFromClient = req.body

	const newId = Date.now()
	// const newId = orders.length + 1
	// but if you delete one, there will be duplications

	const newOrder = {
		order_id: newId,
		items: orderFromClient,
		status: 'pending',
		created_at: Date.now(),
	}

	orders = [...orders, newOrder]
	req.json(newOrder.items)
})

module.exports = orderRouter
