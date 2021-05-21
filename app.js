class Task{
    constructor(task){
        this.task = task;
    }
}

class Spiritual extends Task{
    shortTerm(){
        console.log(this.task + " is an short term spiritual task");
    }
    mediumTerm(){
        console.log(this.task + " is a medium term spiritual task");
    }
    longTerm(){
        console.log(this.task + " is a long term spiritual task");
    }
}

class Fitness extends Task{
    shortTerm(){
        console.log(this.task + " is an short term fitness task");
    }
    mediumTerm(){
        console.log(this.task + " is a medium term fitness task");
    }
    longTerm(){
        console.log(this.task + " is a long term fitness task");
    }
}

class Education extends Task{
    shortTerm(){
        console.log(this.task + " is an short term education task");
    }
    mediumTerm(){
        console.log(this.task + " is a medium term education task");
    }
    longTerm(){
        console.log(this.task + " is a long term education task");
    }
}

class Family extends Task{
    shortTerm(){
        console.log(this.task + " is an short term family task");
    }
    mediumTerm(){
        console.log(this.task + " is a medium term family task");
    }
    longTerm(){
        console.log(this.task + " is a long term family task");
    }
}

class Career extends Task{
    shortTerm(){
        console.log(this.task + " is an short term career task");
    }
    mediumTerm(){
        console.log(this.task + " is a medium term career task");
    }
    longTerm(){
        console.log(this.task + " is a long term career task");
    }
}

class Social extends Task{
    shortTerm(){
        console.log(this.task + " is an short term social task");
    }
    mediumTerm(){
        console.log(this.task + " is a medium term social task");
    }
    longTerm(){
        console.log(this.task + " is a long term social task");
    }
}

class Financial extends Task{
    shortTerm(){
        console.log(this.task + " is an short term financial task");
    }
    mediumTerm(){
        console.log(this.task + " is a medium term financial task");
    }
    longTerm(){
        console.log(this.task + " is a long term financial task");
    }
}

//Spiritual Goals
var shortSpirit1 = new Spiritual("Pet a dog");
var shortSpirit2 = new Spiritual("Go to church");
var shortSpirit3 = new Spiritual("Write a daily journal");
var shortSpirit4 = new Spiritual("Meditate by the ocean");

var medSpirit1 = new Spiritual("Attend a seminar");
var medSpirit2 = new Spiritual("Read a self help book");
var medSpirit3 = new Spiritual("Volunteer your time somewhere");
var medSpirit4 = new Spiritual("Donate to a good cause");

var longSpirit1 = new Spiritual("Go to church");
var longSpirit2 = new Spiritual("Forgive someone from an old grudge");
var longSpirit3 = new Spiritual("Help someone else thru difficulty");
var longSpirit4 = new Spiritual("Write a new life goal");
var longSpirit5 = new Spiritual("Forgive yourself");

//Spiritual Array
var shortSpiritArray = [shortSpirit1, shortSpirit2, shortSpirit3, shortSpirit4];
var medSpiritArray = [medSpirit1, medSpirit2, medSpirit3, medSpirit4];
var longSpiritArray = [longSpirit1, longSpirit2, longSpirit3, longSpirit4];

//Fitness Goals

//Fitness Array


//Educational Goals
let educationResponseOne = new Education("Read An Article About A Topic You Are Normally Disintereted In");
let educationResponseTwo = new Education("Learn A Formal Dance");
let educationResponseThree = new Education("Master A Fictional Language");

//Educational Array

//Family Goals

//Family Array

//Career Goals

//Career Array


//Social Goals
let shortSocial1 = new Social("Call 3 Family Members");
let medSocial1 = new Social("Go Anywhere Except Your House (NOT INCLUDING WORK) For At Least 3 Hours For 3 Days A Week");
let longSocial1 = new Social("Participate In Social Clubs or Gatherings That Have Regular Meetings");

//Social Array
var shortSocialArray = [shortSocial1];
var medSocialArray = [medSocial1];
var longSocialArray = [longSocial1];

//Financial Goals

//Financial Array


const shortSpiritRandom = Math.floor(Math.random() * shortSpiritArray.length);
const medSpiritRandom = Math.floor(Math.random() * medSpiritArray.length);
const longSpiritRandom = Math.floor(Math.random() * longSpiritArray.length);

console.log("Your easy spirit goal is " + shortSpiritArray[shortSpiritRandom].task);
console.log("Your medium spirit goal is " + medSpiritArray[medSpiritRandom].task);
console.log("Your hard spirit goal is " + longSpiritArray[longSpiritRandom].task);