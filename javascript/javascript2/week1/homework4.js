/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * Get an array with car objects with random color and speed
 * @param {integer} numberOfCars - The number of cars 
 * @returns {array} Array containing the car objects
 */
function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo','Tesla', 'Camaro', 'Infiniti', 'Toyota', 'Maserati'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
    
    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);
        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
    }

    return cars;
}
console.log(generateCars(10));

//(car => car.speed > 30 && car.speed < 60)
const lowSpeed = generateCars(10).filter(function(x) {
    return x.speed > 30 && x.speed <60;
    
});
console.log(lowSpeed);
/* arrow function 
    let lowSpeed = generateCars(10).filter(x => x.speed >30 && x.speed <60;)
 */
 /* link to html
const show = lowSpeed;
document.getElementById("showCar").innerHTML = show; */

 //1.2 The makes of the cars that are not lightyellow, so the array is going to look like this: ['BMW', 'Fiat'] etc
 //filter , maping, sort ??
 
 const omg = generateCars(10).filter(y => y.color !== 'lightyellow');

//const omg.map(y => y.make);

console.log(omg); // not done yet!

//