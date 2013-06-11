//alert("JavaScript works!");

// Brandon Ruger
// SDI 1306
// Project 2

// Variables
var myDog = "Ryder";
var age = 2;
var favoriteToys = ["antler", "kong", "giraffe", "nylabone", "ball"];
var store = "All About Puppies";

// Procedure Function

var adoptedDog = function(newDog){
    var enoughMoney = true;
    console.log("In August 2011 I went to " + store + " where I first met " + myDog + ".");
    console.log("I fell in love with him immediately, even though I wasn't looking for " + newDog + ".");
    console.log("I couldn't leave without him, so I decided I was going to take him home.");
    console.log("First though, I had to see if I had enough money.");
    // Argument Conditional
    if (enoughMoney) {
        console.log("It's true that I had enough money, so I took him home.");
    } else console.log("I didn't have enough money, but I used a credit card.");
};


// Boolean Function

var typeOfFood = function(rawFoodDiet, kibbleDiet){
    var outcome = "The raw food diet worked really well for him.";
    var rawFoodBoolean = true;
    var kibbleFoodBoolean = false;
    console.log("After I brought him home, I needed to figure out what type of food I was going to feed him.");
    console.log("I did tons of research because I wanted to do whatever was going to be best for him.");
    if (rawFoodBoolean === true) {
        console.log("After doing research I decided to go with " + rawFoodDiet + " because of the benefits raw food has for dogs.")
    } else console.log("I tried him on Wellness's kibble food to see how he would do on that.")
    return outcome;
}

// Number Function

// String Function

// Array Function



// Main Code
console.log("This is a story about my dog named " + myDog + ".");
adoptedDog("a new dog");
var myOutcome = typeOfFood("Stella & Chewy's raw food diet", "Wellness kibble diet");
console.log(myOutcome);


