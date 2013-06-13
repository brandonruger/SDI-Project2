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
        } else {
            console.log("I didn't have enough money, but I used a credit card.");
        };
};


// Boolean Function

var getTypeOfFood = function(rawFoodDiet, kibbleDiet){
    var outcome = "It is " + true + " that the raw food diet worked well for him.";
    var altOutcome = "It is " + false + " that the raw food diet worked, so I had to switch him to kibble.";
    var rawFoodBoolean = true;
    var kibbleFoodBoolean = false;
    console.log("After I brought him home, I needed to figure out what type of food I was going to feed him.");
    console.log("I did tons of research because I wanted to do whatever was going to be best for him.");
        if (rawFoodBoolean === true) {
            console.log("After doing research I decided to go with " + rawFoodDiet + " because of the benefits raw food has for dogs.")
            return outcome;
        } else {
            console.log("I tried him on Wellness's kibble food to see how he would do on that.")
            return altOutcome;
        };
};

// Number Function

var howManyBags = function(amountToSpend){
    console.log("Each bag of raw food cost " + 30 + " dollars.");
    var totalNumberOfBags = 0;
    while (amountToSpend >= 30) {
        if (totalNumberOfBags === 0) {
            console.log("Let's see how many bags I can afford.");
        } else if (totalNumberOfBags > 0) {
            console.log("I bought " + totalNumberOfBags + " bags. Let's see if I have enough for another bag.");
        };
       
        
        totalNumberOfBags++;
        amountToSpend -=30;
    };
    return totalNumberOfBags;
};


// String Function

var getItemsBoughtAtPetStore = function(item1, item2, item3){
    var itemsBought = (item1 + ", " + item2 + ",and " + item3);
    
    return itemsBought;
};

// Array Function


/*var dogWalks = function (dogWalkArray = [20, 10, 30, 20, 10]) {
for (var i = 5; i <= dogWalksArray.length; i--) {
    if (i <= dogWalksArray.length) {
        console.log("Ryder will get " + i + " more walks for today.");
    } else {
        console.log("No more walks for Ryder until tomorrow.");
    };

    var totalTimeSpentWalking = ([0] + [1] + [2] + [3] + [4]);
    return totalTimeSpentWalking;
};

var dogWalkArray = [20, 10, 30, 20, 10];
    for (var i = 5; i <= dogWalksArray.length; i--) {
        if (i <= dogWalksArray.length) {
        console.log("Ryder will get " + i + " more walks for today.");
        } else {
        console.log("No more walks for Ryder until tomorrow.");
    };

    var totalTimeSpentWalking = ([0] + [1] + [2] + [3] + [4]);
dogWalkArray.push(10);
console.log("Some nights when Ryder has lots of playtime, he needs to go for an extra walk, which means he gets " + dogWalkArray.length + " walks those days.");
console.log("On those days, he gets walks for " + dogWalkArray + " minutes.")*/



// Main Code
console.log("This is a story about my dog named " + myDog + ".");
adoptedDog("a new dog");
var myOutcome = getTypeOfFood("Stella & Chewy's raw food diet", "Wellness kibble diet");
console.log(myOutcome);
console.log("Next, I needed to figure out how many bags of food I was going to buy.");
var numberOfBagsBought = howManyBags(240);
console.log("The total number of bags that I was able to purchase was " + numberOfBagsBought + ".");
console.log("Now that I bought him plenty of food, I think I'll go to the pet store and buy him some toys and other needed items.");
var itemsBoughtAtPetStore = getItemsBoughtAtPetStore("kong", "nylabone", "deer antler");
console.log("At the pet store I found a lot of things to buy.");
console.log("I ended up purchasing a " + itemsBoughtAtPetStore + ".");
console.log("Ryder will be so excited once he sees what I bought him!");
console.log("He always gets so excited when he gets new toys, although certain toys tend not to last very long.");
//var timeWalkingRyder = dogWalkArray;
//console.log("Dogs love going for walks, and Ryder is certainly no exception.");
//console.log("A typical day for Ryder includes " + timeWalkingRyder + " minutes of walking time.");