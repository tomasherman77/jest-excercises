// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollars to Yens
    let valueInYen = valueInDollar * (1/1.2) * 127.9;
    //return the dollar value
    return valueInYen;
}



module.exports = { fromEuroToDollar, fromDollarToYen }

console.log(fromDollarToYen(1))

