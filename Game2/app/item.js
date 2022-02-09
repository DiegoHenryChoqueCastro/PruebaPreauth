var formItem = document.querySelector('#formItem');
var objeto = /** @class */ (function () {
    function objeto(nom, sel, qua) {
        this.nom = nom;
        this.sel = sel;
        this.qua = qua;
    }
    return objeto;
}());
formItem.addEventListener('submit', function (event) {
    event.preventDefault();
    var objeto1 = new objeto("Aged Brie", 6, 50);
    renderTransactionItem(objeto1);
    var objeto2 = new objeto("Backstage passes to a TAFKAL80ETC concert", 7, 32);
    renderTransactionItem(objeto2);
    var objeto3 = new objeto("Sulfuras, Hand of Ragnaros", 12, 24);
    renderTransactionItem(objeto3);
    var objeto4 = new objeto("Conjured", 1, 1);
    renderTransactionItem(objeto4);
});
var renderTransactionItem = function (t) {
    var tableRow = document.createElement('tr');
    var nameData = document.createElement('td');
    nameData.innerHTML = t.nom;
    var sellInData = document.createElement('td');
    sellInData.innerHTML = t.sel.toString();
    var qualityData = document.createElement('td');
    qualityData.innerHTML = t.qua.toString();
    tableRow.append(nameData);
    tableRow.append(sellInData);
    tableRow.append(qualityData);
    var tBody = document.querySelector('tbody');
    tBody.prepend(tableRow);
};
/*let item1 = new Item('radio',10, 20);
let item2 = new Item('televisor',30, 40);
let gilded1: Array<Item> = [item1, item2];
let gilded2: Array<Item> = [item1, item2];
let gildedrose1 = new GildedRose(gilded1);
let gildedrose2 = new GildedRose(gilded2);
let sacitem: Item = gilded2[1];
let sacgilded: Array<Item> = gildedrose1.items;
let sacarItem:Item = sacgilded[0];
console.log(sacarItem.name);*/ 
