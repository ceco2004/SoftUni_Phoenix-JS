function calculatePrice(fruit, grams, pricePerKilo){
    let totalPrice = grams / 1000 * pricePerKilo;
    return `I need $${totalPrice.toFixed(2)} to buy ${(grams/ 1000).toFixed(2)} kilograms ${fruit}.`;
}


console.log(calculatePrice('orange', 2500, 1.80));
console.log(calculatePrice('apple', 1563, 2.35));
