const kelvin = 0;//today's forecast in Kelvin
const celsius = kelvin - 273;//today's forecast in Celsius
let fahrenheit = celsius*(9/5) + 32;//today's forecast in Fahrenheit
fahrenheit = Math.floor(fahrenheit);//rounding down the temperature
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius*(33/100);//today's forecat in Newton
newton = Math.floor(newton);//rounding down the temperature
console.log(`The temperature is ${newton} degrees Newton.`);
