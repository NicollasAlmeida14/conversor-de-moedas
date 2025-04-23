const convertButton = document.querySelector('button')
const selectConvertTo = document.getElementById('select-convert-to')

const convertValues = async () => {
    const inputValue = document.querySelector('input').value
    const valueToConvert = document.getElementById('value-to-convert')
    const convertedValue = document.getElementById('converted-value')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,EUR-USD").then(response => response.json())

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = data.GBPBRL.high
    const bitcoinToday = data.BTCBRL.high

        valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputValue)

    if (selectConvertTo.value === 'dolar') {
        convertedValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValue / dolarToday)
    }

    if (selectConvertTo.value === 'euro') {
        convertedValue.innerHTML = new Intl.NumberFormat('de-De', {
            style: 'currency',
            currency: 'Eur'
        }).format(inputValue / euroToday)
    }

    if (selectConvertTo.value === 'libra') {
        convertedValue.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputValue / libraToday)
    }

    if (selectConvertTo.value === 'bitcoin') {
        convertedValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputValue / bitcoinToday)
    }
}

const changeCurrencySelected = () => {
    const convertedCurrencyImage = document.getElementById('converted-currency-image')
    const convertedCurrencyName = document.getElementById('converted-currency-name')

    if (selectConvertTo.value === 'dolar') {
        convertedCurrencyImage.src = './assets/dólar.png'
        convertedCurrencyName.innerHTML = 'Dólar americano'
    }

    if (selectConvertTo.value === 'euro') {
        convertedCurrencyImage.src = './assets/euro.png'
        convertedCurrencyName.innerHTML = 'Euro'
    }

    if (selectConvertTo.value === 'libra') {
        convertedCurrencyImage.src = './assets/libra.png'
        convertedCurrencyName.innerHTML = 'Libra'
    }

    if (selectConvertTo.value === 'bitcoin') {
        convertedCurrencyImage.src = './assets/bitcoin.png'
        convertedCurrencyName.innerHTML = 'Bitcoin'
    }

    convertValues()
}

convertButton.addEventListener('click', convertValues)
selectConvertTo.addEventListener('change', changeCurrencySelected)