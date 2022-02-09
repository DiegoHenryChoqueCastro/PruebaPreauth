export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    //aumenta quality
    suma(qua: number, valor:number){
        qua = qua + valor;
        if(qua > 50){ qua = 50; }
        return qua
    }

    //degrada quality
    restar(qua: number, valor:number){
        qua = qua - valor;
        if(qua < 0){ qua = 0; }
        return qua
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if(this.items[i].name != 'Sulfuras, Hand of Ragnaros'){
                if (this.items[i].name == 'Aged Brie'){
                    this.items[i].quality = this.suma(this.items[i].quality, 1)
                }else{
                    if(this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'){
                        if (this.items[i].sellIn < 0) {
                            this.items[i].quality = 0
                        }else{
                            if (this.items[i].sellIn < 6){
                                this.items[i].quality = this.suma(this.items[i].quality, 3)
                            }else{
                                if (this.items[i].sellIn < 11){
                                    this.items[i].quality = this.suma(this.items[i].quality, 2)
                                }else{
                                    this.items[i].quality = this.suma(this.items[i].quality, 1)
                                }
                            }
                        }
                    }else{
                        if (this.items[i].sellIn < 0 || this.items[i].name == "Conjured"){
                            this.items[i].quality = this.restar(this.items[i].quality, 2);
                        }else{
                            this.items[i].quality = this.restar(this.items[i].quality, 1);
                        }
                    }
                }
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
        }
        return this.items;
    }
    
}