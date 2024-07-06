function priceChecker(products) {
    var price;
 var quantity;
    switch (products) {
        case "Apple shake":
            price = 300;
            quantity = 100;
            break;

        case "banana shake":
            price = 150;
         quantity = 100;
            break;

        case "mango shake":
            price = 250;
         quantity = 100;
            break;
        case "strawberry shake":
            price = 450;
            quantity = 70;
            break;
        default:
            console.log(" SORRY! WE DON'T HAVE YOUR FAVORITE SHAKE")

    }
  var output = "Your product price is" + price + "rs" 
    + " Quantity of shake is " + quantity + "ml"
    return output

}
var userChoice = prompt(" What kinda shake you want?")
var functionCall= priceChecker(userChoice)
console.log(functionCall);