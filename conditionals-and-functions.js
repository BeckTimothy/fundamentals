/*console.log(1 === 1)

let storeA = 31.10;
let storeB = 4.40;

function compareStorePrices (storeA, storeB) {
	let storeAIsLower = storeA < storeB;
	if(storeAIsLower) {
		console.log("Store A has a lower price.")
	} else if(storeB < storeA) {
		console.log("Store B has a lower price.")
	} else {
		console.log("Their prices are equal")
	}
}

function squareNum (number) {
	return number * number;
}

let squaredNumber = squareNum(4);
console.log(squaredNumber);

let x = 10;

function addNumbers (n, m, x) {
	console.log(x)
	return n + m;
}
addNumbers (1,2,3);
console.log(x);

let ourArray = [1, 2, 3, 4, ['a', 'b', 'c']];

let newArr = ourArray[4][2];
console.log(newArr[0]);
*/
let arrLen = ourArray.length;
for (let i = 0; i < arrLen; i++) {
	console.log(`i is equal to ${ourArray[i]}`);
	for(let j =0; j<10; j++) {
		console.log(`j is equal to ${j}`);
	}
}
let x = 0;
while (x < true) {
	console.log('Ran');
	x = x + 1;
}