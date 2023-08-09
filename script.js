function ConvertToCelsius()
{
	const celsiusInput = document.getElementById("celsius");
	const resultFahrenheit = document.getElementById("resultFahrenheit");
	const celsiusValue = parseFloat(celsiusInput.value);
	const fahrenheitValue = (celsiusValue * 9/5) + 32;
	resultFahrenheit.textContent = `Equivalent Fahrenheit: ${fahrenheitValue.toFixed(2)} °F`;
}

function ConvertToFahrenheit()
{
	const fahrenheitInput = document.getElementById("fahrenheit");
	const resultCelsius = document.getElementById("resultCelsius");
	const fahrenheitValue = parseFloat(fahrenheitInput.value);
	const celsiusValue = (fahrenheitValue - 32) * 5/9;
	resultCelsius.textContent = `Equivalent Celsius: ${celsiusValue.toFixed(2)} °C`;
}

function resetValues() 
{
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("resultFahrenheit").textContent = "";
    document.getElementById("resultCelsius").textContent = "";
}