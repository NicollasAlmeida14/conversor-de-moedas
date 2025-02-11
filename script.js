const convertButton = document.querySelector('.convert-button')
const selectCurrency = document.querySelector('.currency-choose')

function convertCurrency() {
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value')

    const dolarToday = 5.76
    const euroToday = 5.96
    const libraToday = 7.16
    const bitcoinToday = 95.836

    if (selectCurrency.value === 'dolar') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }

    if (selectCurrency.value === 'euro') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }

    if (selectCurrency.value === 'libra') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday)
    }

    if (selectCurrency.value === 'bitcoin') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue / bitcoinToday)
    }
}

function chooseCurrency() {
    const currencyImage = document.querySelector('.currency-img')
    const currencyName = document.querySelector('#currency-name')

    if (selectCurrency.value === 'dolar') {
        currencyImage.src = './assets/dólar.png'
        currencyName.innerHTML = 'Dólar americano'
    }

    if (selectCurrency.value === 'euro') {
        currencyImage.src = './assets/euro.png'
        currencyName.innerHTML = 'Euro'
    }

    if (selectCurrency.value === 'libra') {
        currencyImage.src = './assets/libra.png'
        currencyName.innerHTML = 'Libra'
    }

    if (selectCurrency.value === 'bitcoin') {
        currencyImage.src = './assets/bitcoin.png'
        currencyName.innerHTML = 'Bitcoin'
    }

    convertCurrency()
}

convertButton.addEventListener('click', convertCurrency)
selectCurrency.addEventListener('change', chooseCurrency)