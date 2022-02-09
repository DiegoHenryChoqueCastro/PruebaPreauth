// Importamos el archivo que necesitamos
import { Item } from "./gilded-rose"
import { GildedRose } from "./gilded-rose"

// Creamos nuestra clase o módulo importado
let item1 = new Item("Aged Brie",6,50)
let item2 = new Item("Backstage passes to a TAFKAL80ETC concert",6,49)
let item3 = new Item("Sulfuras, Hand of Ragnaros",12,24)
let item4 = new Item("Conjured",1,1)
// Mostramos por consola el contenido de la variable 'items'
console.log(item1)
console.log(item2)
console.log(item3)
console.log(item4)

let gilded1: Array<Item> = [item1, item2, item3, item4];
let gildedrose1 = new GildedRose(gilded1);
console.log(gildedrose1)
let gildedrose2 = gildedrose1.updateQuality();
console.log(gildedrose2)