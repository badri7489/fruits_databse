// Requiring the mongoose package.
const mongoose = require("mongoose");

// Connecting tht database to localhost and port 27017.
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Creating a schema or a blueprint for our table.
const fruitSchema = new mongoose.Schema({
	name: String,
	rating: Number,
	review: String,
});

// Using the schema creating a model
const Fruit = mongoose.model("Fruit", fruitSchema); // The name Fruit is changed to all lower case and pluralized.

// Create a new Fruit document.
const fruit = new Fruit({
	name: "Apple",
	rating: 7,
	review: "Keeps doctors away",
});

const kiwi = new Fruit({
	name: "Kiwi",
	rating: 10,
	review: "Good",
});

const orange = new Fruit({
	name: "Orange",
	rating: 2,
	review: "I don't like it.",
});

const banana = new Fruit({
	name: "Banana",
	rating: 10,
	review: "Bahot bada hai!!",
});

// Fruit.insertMany([kiwi, orange, banana], function (err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("Successfull saved all the fruits to fruitDB");
// 	}
// });

Fruit.find(function (err, fruits) {
	if (err) {
		console.log(err);
	} else {
		// console.log(fruits);
		mongoose.connection.close();
		console.log("Success");
		fruits.forEach(function (fruit) {
			console.log("Name: " + fruit.name);
		});
	}
});

// Saving the document.
// fruit.save();

const peopleSchema = new mongoose.Schema({
	name: String,
	age: Number,
});

const People = mongoose.model("People", peopleSchema);

const people = new People({
	name: "Sandy",
	age: 69,
});

// people.save();
