"use strict";
exports.__esModule = true;
exports.GildedRose = exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    return Item;
}());
exports.Item = Item;
var GildedRose = /** @class */ (function () {
    function GildedRose(items) {
        if (items === void 0) { items = []; }
        this.items = items;
    }
    //aumenta quality
    GildedRose.prototype.suma = function (qua, valor) {
        qua = qua + valor;
        if (qua > 50) {
            qua = 50;
        }
        return qua;
    };
    //degrada quality
    GildedRose.prototype.restar = function (qua, valor) {
        qua = qua - valor;
        if (qua < 0) {
            qua = 0;
        }
        return qua;
    };
    GildedRose.prototype.updateQuality = function () {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                if (this.items[i].name == 'Aged Brie') {
                    this.items[i].quality = this.suma(this.items[i].quality, 1);
                }
                else {
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].sellIn < 0) {
                            this.items[i].quality = 0;
                        }
                        else {
                            if (this.items[i].sellIn < 6) {
                                this.items[i].quality = this.suma(this.items[i].quality, 3);
                            }
                            else {
                                if (this.items[i].sellIn < 11) {
                                    this.items[i].quality = this.suma(this.items[i].quality, 2);
                                }
                                else {
                                    this.items[i].quality = this.suma(this.items[i].quality, 1);
                                }
                            }
                        }
                    }
                    else {
                        if (this.items[i].sellIn < 0 || this.items[i].name == "Conjured") {
                            this.items[i].quality = this.restar(this.items[i].quality, 2);
                        }
                        else {
                            this.items[i].quality = this.restar(this.items[i].quality, 1);
                        }
                    }
                }
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
        }
        return this.items;
    };
    return GildedRose;
}());
exports.GildedRose = GildedRose;
