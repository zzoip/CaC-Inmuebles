const CURRENCY_CONVERTION_BTN = document.getElementById("flexSwitchCheckChecked")
let prices_list = document.getElementsByClassName('property_price_amount')
let currency_displays = document.getElementsByClassName("currency")

CURRENCY_CONVERTION_BTN.addEventListener('click', function(event) {
    if (CURRENCY_CONVERTION_BTN.classList.contains("checked")) {
        CURRENCY_CONVERTION_BTN.classList.remove("checked")
        fetch("https://api.bcra.gob.ar/estadisticas/v2.0/PrincipalesVariables")
        .then(response => response.json())
        .then(data => {
            let dollar_price = data['results'][1]['valor'];
            Array.from(prices_list).forEach(element => {
                element.innerHTML = (parseFloat(element.innerHTML) * dollar_price).toFixed(2);
            });
            Array.from(currency_displays).forEach(element => {
                element.innerHTML = "ARS"
            });
        })
        .catch(error => console.error('Error:', error));
    } else {
        CURRENCY_CONVERTION_BTN.classList.add("checked")
        fetch("https://api.bcra.gob.ar/estadisticas/v2.0/PrincipalesVariables")
        .then(response => response.json())
        .then(data => {
            let dollar_price = data['results'][1]['valor'];
            Array.from(prices_list).forEach(element => {
                element.innerHTML = (parseFloat(element.innerHTML) / dollar_price).toFixed(2);
            });
            Array.from(currency_displays).forEach(element => {
                element.innerHTML = "USD"
            });
        })
        .catch(error => console.error('Error:', error));
    }
});