//console.log("Hello World!");

const possiblePositions = (start) => {
	let possibilities = [];

	let x = start[0];
	let y = start[1];

	for(let tryMove = 0; tryMove < 8; tryMove++){
	    // possible moves:			

        // cannot go lower than 0, cannot go higher than 8
        // add the moves that fit the above conditions to the possibilities array

		// x + 2, y + 1
		let xDelta = 2;
		let yDelta = 1;

		// x + 2, y - 1
		if(tryMove === 1){
			xDelta = 2;
			yDelta = -1;
		}

		// x - 2, y + 1
		if(tryMove === 2){
			xDelta = -2;
			yDelta = 1;
		}

		// x - 2, y - 1
		if(tryMove === 3){
			xDelta = -2;
			yDelta = -1;
		}

		// y + 2, x + 1
		if(tryMove === 4){
			xDelta = 1;
			yDelta = 2;
		}

		// y + 2, x - 1
		if(tryMove === 5){
			xDelta = -1;
			yDelta = 2;
		}

		// y - 2, x + 1
		if(tryMove === 6){
			xDelta = 1;
			yDelta = -2;
		}

		// y - 2, x - 1
		if(tryMove === 7){
			xDelta = -1;
			yDelta = -2;
		}

		possibilities.push(
			[start[0] + xDelta >= 0 && start[0] + xDelta <= 8 ? start[0] + xDelta : "x failed",
			 start[1] + yDelta >= 0 && start[1] + yDelta <= 8 ? start[1] + yDelta : "y failed"]);
	}
    return possibilities;
}

console.log(possiblePositions([8, 2]));