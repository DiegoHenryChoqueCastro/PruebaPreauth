const formItem = document.querySelector('#formItem') as HTMLFormElement;

class objeto{
	nom: string;
	sel: number;
	qua: number;

	constructor(nom, sel, qua){
		this.nom = nom;
		this.sel = sel;
		this.qua = qua;
	}
}

formItem.addEventListener('submit', event => {
	event.preventDefault();

	const objeto1 = new objeto("Aged Brie",6,50)
	renderTransactionItem(objeto1)
	const objeto2 = new objeto("Backstage passes to a TAFKAL80ETC concert",7,32)
	renderTransactionItem(objeto2)
	const objeto3 = new objeto("Sulfuras, Hand of Ragnaros",12,24)
	renderTransactionItem(objeto3)
	const objeto4 = new objeto("Conjured",1,1)
	renderTransactionItem(objeto4)
})

const renderTransactionItem = (t: objeto)=>{
	const tableRow = document.createElement('tr');

	const nameData = document.createElement('td');
	nameData.innerHTML = t.nom;

	const sellInData = document.createElement('td');
	sellInData.innerHTML = t.sel.toString();

	const qualityData = document.createElement('td');
	qualityData.innerHTML = t.qua.toString();

tableRow.append(nameData)
tableRow.append(sellInData)
tableRow.append(qualityData)

const tBody = document.querySelector('tbody')!;
tBody.prepend(tableRow);
}



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