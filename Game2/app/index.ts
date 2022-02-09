
const nombre = document.querySelector('#nameInput') as HTMLInputElement;
const sellIn = document.querySelector('#sellInInput') as HTMLInputElement;
const quality = document.querySelector('#qualityInput') as HTMLInputElement;

const form = document.querySelector('#form') as HTMLFormElement;

interface TransactionInterface{
	nombre: string,
	sellIn: number,
	quality: number,
}

form.addEventListener('submit', event => {
	event.preventDefault();

	const transaction: TransactionInterface = {
		nombre: nombre.value,
		sellIn: sellIn.valueAsNumber,
		quality: quality.valueAsNumber
	}
	
	renderTransaction(transaction)
})

const renderTransaction = (t: TransactionInterface)=>{
	const tableRow = document.createElement('tr');

	const nameData = document.createElement('td');
	nameData.innerHTML = t.nombre;

	const sellInData = document.createElement('td');
	sellInData.innerHTML = t.sellIn.toString();

	const qualityData = document.createElement('td');
	qualityData.innerHTML = t.quality.toString();

tableRow.append(nameData)
tableRow.append(sellInData)
tableRow.append(qualityData)

const tBody = document.querySelector('tbody')!;
tBody.prepend(tableRow);
}
