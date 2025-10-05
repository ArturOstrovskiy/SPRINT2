const scores = [11, 34, 54, 78, 90, 51, 87, 90]

function getMediumScore(scoresArray) {
	let sum = 0;
	for (let i = 0; i < scoresArray.length; i++) {
		sum += scoresArray[i];
		console.log(sum);
	}
	return Math.round(sum / scoresArray.length);
}

let mediumScore = getMediumScore(scores);
console.log('mediumScore: ' + mediumScore);