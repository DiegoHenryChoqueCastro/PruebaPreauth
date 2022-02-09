var nombre = document.querySelector('#nameInput');
var sellIn = document.querySelector('#sellInInput');
var quality = document.querySelector('#qualityInput');
var form = document.querySelector('#form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var transaction = {
        nombre: nombre.value,
        sellIn: sellIn.valueAsNumber,
        quality: quality.valueAsNumber
    };
    renderTransaction(transaction);
});
var renderTransaction = function (t) {
    var tableRow = document.createElement('tr');
    var nameData = document.createElement('td');
    nameData.innerHTML = t.nombre;
    var sellInData = document.createElement('td');
    sellInData.innerHTML = t.sellIn.toString();
    var qualityData = document.createElement('td');
    qualityData.innerHTML = t.quality.toString();
    tableRow.append(nameData);
    tableRow.append(sellInData);
    tableRow.append(qualityData);
    var tBody = document.querySelector('tbody');
    tBody.prepend(tableRow);
};
