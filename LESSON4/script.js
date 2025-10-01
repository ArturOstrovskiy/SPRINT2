let gold = 100;
let buildingName = "House";
let buildingCoast = 64;

console.log(`Amount: ${gold}`);
if (gold >= buildingCoast) {
	gold -= buildingCoast;
	console.log(`${buildingName} completed`);
	console.log(`Amount: ${gold}`);
} else {
	console.log("Not completed");
	console.log(`Amount: ${gold}`);
}

buildingName = "Garage";
buildingCoast = 16;

if (gold >= buildingCoast) {
	gold -= buildingCoast;
	console.log(`${buildingName} completed`);
	console.log(`Amount: ${gold}`);
} else {
	console.log("Not completed");
	console.log(`Amount: ${gold}`);
}