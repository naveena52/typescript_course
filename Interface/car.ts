interface Car {
    brand: string;
    model: string;
    year: number;
    isElectric: boolean;
  }
  
  // Function that accepts a Car object and prints its details
  function displayCarDetails(car: Car): void {
    console.log(`Brand: ${car.brand}`);
    console.log(`Model: ${car.model}`);
    console.log(`Year: ${car.year}`);
    console.log(`Electric: ${car.isElectric ? 'Yes' : 'No'}`);
  }
  // Create a car object
const myCar: Car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    isElectric: false
  };
  
  // Display car details
  displayCarDetails(myCar);