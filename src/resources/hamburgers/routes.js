let hamburgers = [
	{
		id: 8,
		quantity: 2,
		name: 'Vegetarian Burger',
		restaurant: 'Indian Burgers',
		web: 'https://www.cookwithmanali.com/vegetarian-burger-indian-style/',
		description:
			'With summer around the corner, I had to share a vegetarian burger recipe with you guys. Actually I plan to share more in the next month but I thought I will start with this Indian style Vegetarian Burger aka Masala Burger!',
		ingredients: [
			'american cheese',
			'burger sauce',
			'french mustard',
			'pickes',
			'onion',
			'Veggies',
		],
	},
	{
		id: 9,
		quantity: 2,
		name: 'Fat Santa',
		restaurant: 'Sky City Hamilton',
		web: 'https://skycityhamilton.co.nz/eat-drink/eat-burger/',
		description: 'A Christmas themed burger',
		ingredients: [
			'chicken thigh',
			'champagne ham',
			'sage and onion stuffing',
			'gravy mash',
			'lettuce',
			'tomato',
			'cranberry sauce',
		],
	},
	{
		id: 10,
		quantity: 2,
		name: 'Blondie',
		restaurant: 'Yankys',
		web: 'http://yankyslambton.co.za/menu/',
		description: 'Delicious steak burger',
		ingredients: [
			'steak',
			'BBQ sauce',
			'bacon',
			'egg',
			'cheese',
			'lettuce',
			'tomato',
			'onion',
			'gerkins',
		],
	},
	{
		id: 11,
		quantity: 2,
		name: 'Monster Burger',
		restaurant: 'Yankys',
		web: 'http://yankyslambton.co.za/menu/',
		description: 'Massive meaty burger - the size of a dinner plate',
		ingredients: [
			'250g patty',
			'bacon',
			'cheese',
			'2 eggs',
			'steak',
			'BBQ sauce',
			'lettuce',
			'tomato',
			'onion',
			'gerkins',
		],
	},
]

const express = require('express')
const hamburgerRouter = express.Router()

hamburgerRouter.get('/', (req, res) => {
	res.json({ orders })
})

module.exports = hamburgerRouter
