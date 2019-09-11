/*let dog = {
	name: "Steve",
	color: "brown",
	breed: "Pug",
	size: "Small",
	bark: function(typeOfBark) {
		console.log("woof!");
	},
};*/

//dog.bark();

function x(y) {
	y.num  = y.num + 5;
	console.log(y);
}

let y = {
	name: "Tim",
	num: 10,
};

x(y);
console.log(y);