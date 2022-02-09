"use strict";
exports.__esModule = true;
// Importamos el archivo que necesitamos
var gilded_rose_1 = require("./gilded-rose");
var gilded_rose_2 = require("./gilded-rose");
// Creamos nuestra clase o módulo importado
var item1 = new gilded_rose_1.Item("Aged Brie", 6, 50);
var item2 = new gilded_rose_1.Item("Backstage passes to a TAFKAL80ETC concert", 6, 49);
var item3 = new gilded_rose_1.Item("Sulfuras, Hand of Ragnaros", 12, 24);
var item4 = new gilded_rose_1.Item("Conjured", 1, 1);
// Mostramos por consola el contenido de la variable 'items'
console.log(item1);
console.log(item2);
console.log(item3);
console.log(item4);
var gilded1 = [item1, item2, item3, item4];
var gildedrose1 = new gilded_rose_2.GildedRose(gilded1);
console.log(gildedrose1);
var gildedrose2 = gildedrose1.updateQuality();
console.log(gildedrose2);
