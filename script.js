const convertButton = document.querySelector(".convert-button")
const selectCurrency = document.querySelector(".currency-choose")


function convertValue() {
    const inputValue = document.querySelector(".input-currency").value
    const currencyToConvert = document.querySelector(".currency-to-convert")
    const currencyConverted = document.querySelector(".currency-value")

    const dolarToday = 6.17
    const euroToday = 6.42
    const libraToday = 7.74
    const bitcoinToday = 95780.9

    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

    if (selectCurrency.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }

    if (selectCurrency.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }

    if (selectCurrency.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraToday)
    }

    if (selectCurrency.value == "bitcoin") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency: "BTC"
        }).format(inputValue / bitcoinToday)
    }
}

function currencyValue() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (selectCurrency.value == "dolar") {
        currencyImage.src = "./assets/dólar.png"
        currencyName.innerHTML = "Dólar americano"
    }

    if (selectCurrency.value == "euro") {
        currencyImage.src = "./assets/euro.png"
        currencyName.innerHTML = "Euro"
    }

    if (selectCurrency.value == "libra") {
        currencyImage.src = "./assets/libra.png"
        currencyName.innerHTML = "Libra esterlina"
    }

    if (selectCurrency.value == "bitcoin") {
        currencyImage.src = "./assets/bitcoin.png"
        currencyName.innerHTML = "Bitcoin"
    }
    convertValue() 
}

convertButton.addEventListener("click", convertValue)
selectCurrency.addEventListener("change", currencyValue)