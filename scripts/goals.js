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

//example of how to call an object class = highCareer1.shortTerm();

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
var shortFitness1 = new Fitness("Get 6-pack abs for the summer")
var shortFitness2 = new Fitness("Get a gym membership")
var shortFitness3 = new Fitness("Go to the gym")
var shortFitness4 = new Fitness("Get plastic surgery ")

var medFitness1 = new Fitness("Compete in a Body-building competition")
var medFitness2 = new Fitness("Get a personal trainer")
var medFitness3 = new Fitness("Work on your poses")
var medFitness4 = new Fitness("Get an orange Trump-like tan")

var longFitness1 = new Fitness("Run a marathon")
var longFitness2 = new Fitness("Run for 3 miles everyday ")
var longFitness3 = new Fitness("Run for 17 miles for one day every weekend")
var longFitness4 = new Fitness("Go to a bar the night before the marathon to celebrate")
var longFitness5 = new Fitness("Stay home and use the race day to recover from your hangover")
//Fitness Array
var shortFitnessArray = [shortFitness1, shortFitness2, shortFitness3, shortFitness4];
var medFitnessArray = [medFitness1, medFitness2, medFitness3, medFitness4];
var longFitnessArray = [longFitness1, longFitness2, longFitness3, longFitness4];



//Educational Goals
var shortEducation1 = new Education("Read An Article About A Topic You Are Normally Disintereted In");
var medEducation1 = new Education("Learn A Formal Dance");
var longEducation1 = new Education("Master A Fictional Language");

//Educational Array
var shortEducationalArray = [shortEducation1];
var medEducationArray = [medEducation1];
var longEducationArray = [longEducation1];

//Family Goals
var shortFamily1 = new Family("Talk to a family member.")
var shortFamily2 = new Family("Play a boardgame with your significant other or with family.")
var shortFamily3 = new Family("Invite one or more family members to coffee or a meal.")
var shortFamily4 = new Family("Put the phone away")

var medFamily1 = new Family("Eat dinner together at least 4 times this week.")
var medFamily2 = new Family("Go outside and sweat as a family, hike a trail or walk around the block at least 2 times this week")
var medFamily3 = new Family("Put some soothing music on while your home...no norwegian death metal this week.")
var medFamily4 = new Family("Share a chore with 1 or 2 members of your family, get some perspective this week")

var longFamily1 = new Family("Plan a family outing; it could be a reunion or family vacation. No need to go to Yosemite! Choose somewhere local.")
var longFamily2 = new Family("Take some pictures of your family in a candid setting. Choose 20 for each member that most shows their character.")
var longFamily3 = new Family("Got kids? Choose a chapter book and read to them every night.")
var longFamily4 = new Family("Make an emergency safety plan. Plan out escape routs, and practice this month.")

//Family Array

var shortFamilyArray = [shortFamily1, shortFamily2, shortFamily3, shortFamily4];
var medFamilyArray = [medFamily1, medFamily2, medFamily3, medFamily4];
var longFamilyArray = [longFamily1, longFamily2, longFamily3, longFamily4];

//Career Goals
var shortCareer1 = new Career("Sell yourself")
var shortCareer2 = new Career("Make an online resume.")
var shortCareer3 = new Career("Get a professional headshot for your linkedIn or online resume.")
var shortCareer4 = new Career("Earn a degree.")
var shortCareer5 = new Career("Change your job.")

var medCareer1 = new Career("Network, make some contacts in a company or field you want to work in.")
var medCareer2 = new Career("Improve your social skills. Join a volunteer organization.")
var medCareer3 = new Career("Get a promotion!")
var medCareer4 = new Career("Start a business.")

var highCareer1 = new Career("Grow your efficiency!")
var highCareer2 = new Career("Grow your productivity!")
var highCareer3 = new Career("Get smart!")
var highCareer4 = new Career("Develop yourself!")


//Career Array

var shortCareerArray = [shortCareer1, shortCareer2, shortCareer3, shortCareer4, shortCareer5];
var medCareerArray = [medCareer1, medCareer2, medCareer3, medCareer4];
var longCareerArray = [highCareer1, highCareer2, highCareer3, highCareer4];

//Social Goals
var shortSocial1 = new Social("Call 3 Family Members");

var medSocial1 = new Social("Go Anywhere Except Your House (NOT INCLUDING WORK) For At Least 3 Hours For 3 Days A Week");

var longSocial1 = new Social("Participate In Social Clubs or Gatherings That Have Regular Meetings");

//Social Array
var shortSocialArray = [shortSocial1];
var medSocialArray = [medSocial1];
var longSocialArray = [longSocial1];

//Financial Goals
var shortFinancial1 = new Financial("Save $3,000 for emergencies");
var shortFinancial2 = new Financial("Open a savings account ");
var shortFinancial3 = new Financial("Send $250 from your checking to your savings account for 12 months");
var shortFinancial4 = new Financial("Never get into an emergecy");

var medFinancial1 = new Financial("Pay off student loans");
var medFinancial2 = new Financial("Understand loan amount and terms");
var medFinancial3 = new Financial("Sign up for income-based repayment");
var medFinancial4 = new Financial("Ask Joe Biden to forgive your loans");

var longFinancial1 = new Financial("Save $1 million for retirement");
var longFinancial2 = new Financial("Get your 401k match from your employer");
var longFinancial3 = new Financial("Invest in a target date fund");
var longFinancial4 = new Financial("Buy daily lottery tickets and pray");
//Financial Array

var shortFinancialArray = [shortFinancial1, shortFinancial2, shortFinancial3, shortFinancial4];
var medFinancialArray = [medFinancial1, medFinancial2, medFinancial3, medFinancial4];
var longFinancialArray = [longFinancial1, longFinancial2, longFinancial3, longFinancial4];


//Use below to call to inner HTML
const shortSpiritRandom = Math.floor(Math.random() * shortSpiritArray.length);
const medSpiritRandom = Math.floor(Math.random() * medSpiritArray.length);
const longSpiritRandom = Math.floor(Math.random() * longSpiritArray.length);

const shortFitnessRandom = Math.floor(Math.random() * shortFitnessArray.length);
const medFitnessRandom = Math.floor(Math.random() * medFitnessArray.length);
const longFitnessRandom = Math.floor(Math.random() * longFitnessArray.length);

const shortEducationalRandom = Math.floor(Math.random() * shortEducationalArray.length);
const medEducationalRandom = Math.floor(Math.random() * medEducationalArray.length);
const longEducationalRandom = Math.floor(Math.random() * longEducationalArray.length);

const shortFamilyRandom = Math.floor(Math.random() * shortFamilyArray.length);
const medFamilyRandom = Math.floor(Math.random() * medFamilyArray.length);
const longFamilyRandom = Math.floor(Math.random() * longFamilyArray.length);

const shortCareerRandom = Math.floor(Math.random() * shortCareerArray.length);
const medCareerRandom = Math.floor(Math.random() * medCareerArray.length);
const longCareerRandom = Math.floor(Math.random() * longCareerArray.length);

const shortSocialRandom = Math.floor(Math.random() * shortSocialArray.length);
const medSocialRandom = Math.floor(Math.random() * medSocialArray.length);
const longSocialRandom = Math.floor(Math.random() * longSocialArray.length);

const shortFinancialRandom = Math.floor(Math.random() * shortFinancialArray.length);
const medFinancialRandom = Math.floor(Math.random() * medFinancialArray.length);
const longFinancialRandom = Math.floor(Math.random() * longFinancialArray.length);

/*
console.log("Your easy spirit goal is " + shortSpiritArray[shortSpiritRandom].task);
console.log("Your medium spirit goal is " + medSpiritArray[medSpiritRandom].task);
console.log("Your hard spirit goal is " + longSpiritArray[longSpiritRandom].task);
*/
