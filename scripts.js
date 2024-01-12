const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const CurrencyValueConverted = document.querySelector(".currency-value") // Outras moedas

    console.log(currencySelect.value)
    const dolarToday = 5.2
    const euroToday = 6.2
    const bitcoinToday = 224.28
    const libraToday = 1.0

    if (currencySelect.value == "dolar") { // Se o select estiver selecionado o valor de dolar, entre aqui
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") { // Se o select estiver selecionado o valor de dolar, entre aqui
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "bitcoin") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelect.value == "libra") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}


function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImge = document.querySelector(".currency-img")

    if ( currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImge.src = "./assets/dolar.png"
    }

    if ( currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImge.src = "./assets/euro.png"
    }

    if ( currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImge.src = "./assets/Bitcoin.png"
    }

    if ( currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImge.src = "./assets/Libra.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)