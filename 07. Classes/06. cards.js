
const result =(function (){
    let suits = { SPADES: "♠",
                  HEARTS: "♥",
                  DIAMONDS: "♦",
                  CLUBS: "♣"
    }

    let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    return {
        Suits: suits,
        Card: faces
    }
})();
const Cards = result.Card;
const Suits = result.Suits;

class Card {
    #card;
    #suits;
    constructor(card, suits){
        this.card = card;
        this.suits = suits;
    }

    set suits(value){
        if(Object.values(Suits).some(k => k === value) === false){
            throw RangeError("Suit is not correct");
        }
        this.#suits = value;
    }

    set card(value){
        if(Cards.includes(value) === false){
            throw RangeError("Card is not correct");
        }

        this.#card = value;
    }

    get card(){
        return this.#card;
    }

    get suits(){
        return this.#suits;
    }

    toString(){
        return this.card + this.suits;
    }
}

let c = new Card("A", Suits.CLUBS);
console.log(c.toString());
c.card = "10";
console.log(c.toString());
