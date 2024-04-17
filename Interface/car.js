// Function that accepts a Car object and prints its details
function displayCarDetails(car) {
    console.log("Brand: ".concat(car.brand));
    console.log("Model: ".concat(car.model));
    console.log("Year: ".concat(car.year));
    console.log("Electric: ".concat(car.isElectric ? 'Yes' : 'No'));
}
// Create a car object
var myCar = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    isElectric: false
};
// Display car details
displayCarDetails(myCar);
