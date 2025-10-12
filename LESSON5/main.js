/*const car = {
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
//чтение свойства объекта
// console.log(car.brand)
// console.log(car.engine.power)

const firstOwner = car.prevOwners[0]
// console.log(firstOwner)

//создание новое свойства (инициализация свойства значения)
car.lastPrice = 14500
// console.log(car)

//изменение значения свойства
car.millage = 370000
// console.log(car)

//удаление свойства из объекта
delete car.prevOwners

//все ключи объекта
const keys = Object.keys(car)
// console.log(keys)

//все значения объекта
const value = Object.values(car)
// console.log(value)

//обход объекта
for(const key in car){
	// console.log(car[key])
}

const firstThreeEl = keys.slice(0,3)
firstThreeEl.push('fuelType')

//объекты с 'поведением'
const pet = {
	name:'Strider',
	happiness: 60,
	hunger: 30,
	sayHi: function() {
		console.log('meow')
	},
	checkStatus: function() {
		console.log(`Счастье:${pet.happiness} , голод:${pet.hunger} `)
	},
	playWithPet: function() {
		pet.happiness = pet.happiness + 10
		if (pet.happiness > 100) {
			pet.happiness = 100
		}
	},
	feedPet: function(foodQuantity) {
		pet.hunger =pet.hunger + foodQuantity
		if (pet.hunger > 100) {
			pet.hunger = 100
		}
	}

}

pet.sayHi()
pet.checkStatus() //метод, который читает свойства объекта
pet.playWithPet() //изменение свойства
pet.checkStatus() //метод, который читает свойства объекта
pet.feedPet(20)
pet.checkStatus()*/


class Pet {
	//создает экземпляр класса
	constructor(type,name,happiness,hunger,voice) {
		this.type = type
		this.name = name
		this.happiness = happiness
		this.hunger = hunger
		this.voice = voice
	}
	//устанавливаем методы экземпляров класса
	sayHi() {
		console.log(this.voice)
	}
	checkStatus() {
		console.log(`Счастье:${this.happiness} , голод:${this.hunger} `)
	}
	playWithPet() {
		this.happiness = this.happiness + 10
		if (this.happiness > 100) {
			this.happiness = 100
		}
	}
	feedPet(foodQuantity) {
		this.hunger = this.hunger + foodQuantity
		if (this.hunger > 100) {
			this.hunger = 100
		}
	}
}

const Nika = new Pet('cat','Nika',70,0, 'meow')
Nika.checkStatus()
Nika.sayHi()
Nika.feedPet(10)
Nika.checkStatus()

