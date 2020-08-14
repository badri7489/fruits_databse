// Requiring the mongoose package.
const mongoose = require("mongoose");

// Connecting tht database to localhost and port 27017.
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Creating a schema or a blueprint for our table.
const fruitSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Naam Daal BHOSADIK"],
	},
	rating: {
		type: Number,
		min: 1,
		max: 10,
	},
	review: String,
});

// Using the schema creating a model
const Fruit = mongoose.model("Fruit", fruitSchema); // The name Fruit is changed to all lower case and pluralized.

// Create a new Fruit document.
const fruit = new Fruit({
	rating: 10,
	review: "Sanghita Loves It",
});

const kiwi = new Fruit({
	name: "Kiwi",
	rating: 10,
	review: "Good",
});

// const orange = new Fruit({
// 	name: "Orange",
// 	rating: 2,
// 	review: "I don't like it.",
// });

// const banana = new Fruit({
// 	name: "Banana",
// 	rating: 10,
// 	review: "Bahot bada hai!!",
// });

// Fruit.insertMany([kiwi, orange, banana], function (err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("Successfull saved all the fruits to fruitDB");
// 	}
// });

// Fruit.find(function (err, fruits) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		// console.log(fruits);
// 		mongoose.connection.close();
// 		console.log("Success");
// 		fruits.forEach(function (fruit) {
// 			console.log("Name: " + fruit.name);
// 		});
// 	}
// });

// Fruit.updateOne({ _id: "5f3696459812a2233c82f01e" }, { name: "Orange" }, function (err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("Successfully Logged!!! bhosadik");
// 	}
// });

// Fruit.deleteOne({ _id: "5f36968809c02d26d4a67978" }, function (err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("Gaand maar diye iski maa ka bhenchod!!");
// 	}
// });

// Saving the document.
// fruit.save();

const peopleSchema = new mongoose.Schema({
	name: String,
	age: Number,
	favouriteFruit: fruitSchema,
});

const People = mongoose.model("People", peopleSchema);

const pineapple = new Fruit({
	name: "Pineapple",
	rating: 5,
	review: "I dont eat it",
});

People.updateOne({ name: "Sandy" }, { favouriteFruit: kiwi }, function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log("Daal Diye!!");
	}
});

// pineapple.save();

// const people = new People({
// 	name: "Anjalu",
// 	age: 69,
// 	favouriteFruit: pineapple,
// });

// people.save();
