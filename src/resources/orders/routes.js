const express = require('express')

const orderRouter = express.Router()

// it imports them as they were defined initialy, when imported
// it will work for now to do our checks.
const hamburgers = require('../hamburgers/routes')

let orders = []

//VALIDATION OF THE ORDER
function validateOrder(incomingOrder) {
	// filter gives back the singleOrder if the f return is true, otherwise it does not return a/t
	// filter if doesn't find a/t, will give back an empty[]
	// !! return true or false (no need to the last return then)
	// return !!incomingOrder.filter(singleOrder => {

	let valid = false
	let error = null
	//FIND IF THE HAMBURGER EXISTS
	const filterResult = incomingOrder.filter(singleOrder => {
		const foundHamburger = hamburgers.find(
			hamburger => hamburger.id === singleOrder.hamburger_id
		)
		error = foundHamburger ? null : "Sorry, can't find that hamburger!"

		// VALIDATE QUANTITY
		// return foundHamburger.quantity >= singleOrder.quantity
		const validQuantity = foundHamburger
			? foundHamburger.quantity >= singleOrder.quantity
			: false

		error = validQuantity ? true : "Couldn't fulfill the order"
	})
	valid = filterResult.length === incomingOrder.length
	return {
		valid,
		error,
	}
}

// GET
orderRouter.get('/', (req, res) => {
	res.json({ orders })
})

// POST
orderRouter.post('/', (res, res) => {
	const orderFromClient = req.body

	const newId = Date.now()
	// const newId = orders.length + 1
	// but if you delete one, there will be duplications

	const validateOrderFromClient = validateOrder(orderFromClient)

	if (validateOrderFromClient.valid) {
		const newOrder = {
			order_id: newId,
			items: orderFromClient,
			status: 'pending',
			created_at: Date.now(),
		}

		orders = [...orders, newOrder]
		req.json({ newOrder })
	}
})

module.exports = orderRouter
