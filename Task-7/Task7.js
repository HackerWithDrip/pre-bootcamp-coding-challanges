function fahrenheitToCelcius(F) {
    const celcius = (F - 32) * (5 / 9);
    return celcius + " Degrees Celcius";
}

function celciusToFahrenheit(C) {
    const fahrenheit = (C * 9 / 5) + 32;
    return fahrenheit + " Degrees Fahrenheit";
}

console.log(fahrenheitToCelcius(68));
console.log(celciusToFahrenheit(10));