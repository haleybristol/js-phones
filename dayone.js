// var hashes = ''
// for (i=0; i < 7; i++) {
// 	hashes += '#';
// 	console.log(hashes);
// };

for (i= 0; i < 100; i++) {
	if (i % 3 === 0 && i % 5 === 0){
		console.log('fizzbuzz');
	}
	else if (i % 5 === 0 ) {
		console.log('buzz');
	}
	else if (i % 3 === 0 ) {
		console.log ( 'fizz');
	}
	else {
		console.log(i);
	}
}

// var sizeX = 8;
// var sizeY = 8;

// var board = "";

// for (var y = 0; y < Y; y++) 