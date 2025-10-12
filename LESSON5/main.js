const car = {
	brand: 'bmw',
	model: '745',
	year: '1996',
	millage: '350000',
	color: 'black',
	isTaxi: false,
	engine: {
		type: 'petrol',
		volume: 4.5,
		power: 350,
		fuelGrade: 95
	},
	price: 15000,
	prevOwners: ['Bob','Alex','Artur']
}

console.log(car.brand)
console.log(car.engine.power)

const firstOwner = car.prevOwners[0]
console.log(firstOwner)