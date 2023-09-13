const userInput = document.getElementById("userValue");

function convertCurrency() {
  const amount = parseFloat(userInput.value);
  const toCurrency = document.getElementById("toCurrency").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then((response) => response.json())
    .then((data) => {
      const exchangeRate = data.rates[toCurrency];
      const convertedAmount = (amount * exchangeRate).toFixed(2);
      document.getElementById(
        "result"
      ).textContent = `${amount} ${fromCurrency}  = ${convertedAmount} ${toCurrency}`;
    });
}
