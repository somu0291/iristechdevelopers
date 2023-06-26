function convertTemperature() {
  var temperature = document.getElementById("temperature").value;
  var unit = document.getElementById("unit").value;
  var resultElement = document.getElementById("result");
  var convertedTemperature;

  if (unit === "celsius") {
    convertedTemperature = {
      fahrenheit: (temperature * 9/5) + 32,
      kelvin: Number(temperature) + 273.15
    };
  } else if (unit === "fahrenheit") {
    convertedTemperature = {
      celsius: (temperature - 32) * 5/9,
      kelvin: (temperature - 32) * 5/9 + 273.15
    };
  } else if (unit === "kelvin") {
    convertedTemperature = {
      celsius: temperature - 273.15,
      fahrenheit: (temperature - 273.15) * 9/5 + 32
    };
  }

  resultElement.innerHTML = "Converted Temperatures:<br>";
  for (var key in convertedTemperature) {
    resultElement.innerHTML += key.charAt(0).toUpperCase() + key.slice(1) + ": " + convertedTemperature[key] + "°<br>";
  }
}
