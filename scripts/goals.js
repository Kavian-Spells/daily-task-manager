class Task{
    constructor(task, category, term){
        this.task = task;
        this.category = category;
        this.term = term;
    }
    printTask(){
        console.log(this.task + " is an " + this.term + " " + this.category)
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

class Quotes {
    constructor() {
        this.quote = []
    }
    async fetchApi() {
        await axios.get("https://api.codetabs.com/v1/proxy/?quest=https://zenquotes.io/api/random/09c8cdd54d833aeabd5f426d210c5552e4aefef9",
        { 
        })
        .then(response => {
            console.log(response.data)
            this.quote = response.data
            this.displayQuote()
        })
        
 // getting an error, dev tools says that the response is blocked...not sure why
    }
    displayQuote() {
        this.quote.map(data => {
            document.getElementById('quotes').innerHTML = `${data.h}` // this dot notation will probably change once we see the actual results of the api response. 
        })
    }
}

function windowLoadMessage() {
    document.getElementById("tipBox").innerHTML = "You Got This!!"
}

let apiQuotes = new Quotes
apiQuotes.fetchApi();
apiQuotes.displayQuote();
windowLoadMessage();

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
var randomSpiritArray = [shortSpirit1, shortSpirit2, shortSpirit3, shortSpirit4, medSpirit1, medSpirit2, medSpirit3, medSpirit4, longSpirit1, longSpirit2, longSpirit3, longSpirit4]

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
var randomFitnessArray = [shortFitness1, shortFitness2, shortFitness3, shortFitness4, medFitness1, medFitness2, medFitness3, medFitness4, longFitness1, longFitness2, longFitness3, longFitness4, longFitness5]



//Educational Goals
var shortEducation1 = new Education("Read An Article About A Topic You Are Normally Disintereted In");
var shortEducation2 = new Education("Learn A New Word");
var shortEducation3 = new Education("Learn Something New About A Foreign Country");

var medEducation1 = new Education("Learn A Formal Dance");
var medEducation2 = new Education("Read A Non-Fiction Novel");
var medEducation3 = new Education("Learn How To Fix Something; i.e. Fix A Clogged Sink, Replace Brake Pads, etc...");

var longEducation1 = new Education("Master A Fictional Language");
var longEducation2 = new Education("Earn An Official Certificate In Any Trade Or Skill");
var longEducation3 = new Education("Earn New College Credits In Any Subject")

//Educational Array
var shortEducationalArray = [shortEducation1, shortEducation2, shortEducation3];
var medEducationalArray = [medEducation1, medEducation2, medEducation3];
var longEducationalArray = [longEducation1, longEducation2, longEducation3];
var randomEducationArray = [shortEducation1, shortEducation2, shortEducation3, medEducation1, medEducation2, medEducation3, longEducation1, longEducation2, longEducation3]

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
var randomFamilyArray = [shortFamily1, shortFamily2, shortFamily3, shortFamily4, medFamily1, medFamily2, medFamily3, medFamily4, longFamily1, longFamily2, longFamily3, longFamily4]

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

var longCareer1 = new Career("Grow your efficiency!")
var longCareer2 = new Career("Grow your productivity!")
var longCareer3 = new Career("Get smart!")
var longCareer4 = new Career("Develop yourself!")


//Career Array

var shortCareerArray = [shortCareer1, shortCareer2, shortCareer3, shortCareer4, shortCareer5];
var medCareerArray = [medCareer1, medCareer2, medCareer3, medCareer4];
var longCareerArray = [longCareer1, longCareer2, longCareer3, longCareer4];
var randomCareerArray = [shortCareer1, shortCareer2, shortCareer3, shortCareer4, shortCareer5, medCareer1, medCareer2, medCareer3, medCareer4, longCareer1, longCareer2, longCareer3, longCareer4]

//Social Goals
var shortSocial1 = new Social("Call 3 Family Members");
var shortSocial2 = new Social("Call 3 Friends You Haven't Seen In A While");
var shortSocial3 = new Social("Engage A Stranger In Conversation");

var medSocial1 = new Social("Go Anywhere Except Your House (NOT INCLUDING WORK) For At Least 3 Hours For 3 Days A Week");
var medSocial2 = new Social("Do Something That Takes You Out Of Your Comfort Zone");
var medSocial3 = new Social("Go Dancing Once A Week")

var longSocial1 = new Social("Participate In Social Clubs or Gatherings That Have Regular Meetings");
var longSocial2 = new Social("Make At Least One New Friend");
var longSocial3 = new Social("Actively Participate In A Charity/Volunteer Organization");

//Social Array
var shortSocialArray = [shortSocial1, shortSocial2, shortSocial3];
var medSocialArray = [medSocial1, medSocial2, medSocial3];
var longSocialArray = [longSocial1, longSocial2, longSocial3];
var randomSocialArray = [shortSocial1, shortSocial2, shortSocial3, medSocial1, medSocial2, medSocial3, longSocial1, longSocial2, longSocial3]

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
var randomFinancialArray = [shortFinancial1, shortFinancial2, shortFinancial3, shortFinancial4, medFinancial1, medFinancial2, medFinancial3, medFinancial4, longFinancial1, longFinancial2, longFinancial3, longFinancial4]

// tip library
var familyTipOne = "Your family loves you and wants to hear from you.";
var familyTipTwo = "Make sure to let your loved ones know how you're doing.";
var familyTipThree = "Now try to make family contact a regular activity!";
var familyTipArray = [familyTipOne, familyTipTwo, familyTipThree];

var spiritTipOne = "Find a space of solitude and make that your place of spiritual self-discussion.";
var spiritTipTwo = "If you're having spiritual troubles, find a trusted advisor and ask for guidance.";
var spiritTipThree = "This can be a tool for mental rest and personal calmness.";
var spiritTipArray = [spiritTipOne, spiritTipTwo, spiritTipTwo];

var financialTipOne = "Money doesn't buy happiness, but c'mon, it sure does help.";
var financialTipTwo = "Retirement is best enjoyed without debt and financial stress.";
var financialTiThree = "Saving loose change can amount to enough vacation money for when you really need one.";
var financialTipArray = [financialTipOne, financialTipTwo, financialTiThree]

var fitnessTipOne = "Drink water and make sure you eat enough.";
var fitnessTipTwo = "Take rest days to heal your body.";
var fitnessTipThree = "Be sure to stick to an exercise regiment that best works for you.";
var fitnessTipArray = [fitnessTipOne, fitnessTipTwo, fitnessTipThree];

var careerTipOne = "If nobody will pay you to do what you like doing, then get paid for doing something that you're good at.";
var careerTipTwo = "Healthy habits correlate to a healthy career.";
var careerTipThree = "Your career is just as important as your ideal livlihood outside of the workplace, always take time to balance them both.";
var careerTipArray = [careerTipOne, careerTipTwo, careerTipThree];

var educationTipOne = "Always chase learning outside of the ordiance.";
var educationTipTwo = "Eating good foods before a study session have positive affects on cognition and comprehension.";
var educationTipThree = "Studying a little everyday typically results in better academic perfomance compared to an overloaded single study session.";
var educationTipArray = [educationTipOne, educationTipTwo, educationTipThree];

var socialTipOne = "If it will help; take small and deliberate steps toward overcoming social anxities.";
var socialTipTwo = "Spending time with people you get along with is just as important as spending time alone.";
var socialTipThree = "Being happy with yourself makes it easier to enjoy senarios that you normally avoid.";
var socialTipArray = [socialTipOne, socialTipTwo, socialTipThree];

var rouletteTipOne = "Believe in yourself and you can accomplish anything...within reason!";
var rouletteTipTwo = "Meditation and self-reflection are good practices before taking on a task.";
var rouletteTipThree = "Don't forget to feel proud of yourself upon task completion!";
var rouletteTipArray = [rouletteTipOne, rouletteTipTwo, rouletteTipThree];

// to call random tips to relevant category
const randomSocialTip = Math.floor(Math.random() * socialTipArray.length);
const randomEducationTip = Math.floor(Math.random() * educationTipArray.length);
const randomFamilyTip = Math.floor(Math.random() * familyTipArray.length);
const randomFitnessTip = Math.floor(Math.random() * fitnessTipArray.length);
const randomCareerTip = Math.floor(Math.random() * careerTipArray.length);
const randomSpiritTip = Math.floor(Math.random() * spiritTipArray.length);
const randomFinancialTip = Math.floor(Math.random() * financialTipArray.length);
const randomRouletteTip = Math.floor(Math.random() * rouletteTipArray.length)

//Use below to call to inner HTML
const shortSpiritRandom = Math.floor(Math.random() * shortSpiritArray.length);
const medSpiritRandom = Math.floor(Math.random() * medSpiritArray.length);
const longSpiritRandom = Math.floor(Math.random() * longSpiritArray.length);
const randomSpirit = Math.floor(Math.random() * randomSpiritArray.length);

const shortFitnessRandom = Math.floor(Math.random() * shortFitnessArray.length);
const medFitnessRandom = Math.floor(Math.random() * medFitnessArray.length);
const longFitnessRandom = Math.floor(Math.random() * longFitnessArray.length);
const randomFitness = Math.floor(Math.random() * randomFitnessArray.length);

const shortEducationalRandom = Math.floor(Math.random() * shortEducationalArray.length);
const medEducationalRandom = Math.floor(Math.random() * medEducationalArray.length);
const longEducationalRandom = Math.floor(Math.random() * longEducationalArray.length);
const randomEducation = Math.floor(Math.random() * randomEducationArray.length);

const shortFamilyRandom = Math.floor(Math.random() * shortFamilyArray.length);
const medFamilyRandom = Math.floor(Math.random() * medFamilyArray.length);
const longFamilyRandom = Math.floor(Math.random() * longFamilyArray.length);
const randomFamily = Math.floor(Math.random() * randomFamilyArray.length);

const shortCareerRandom = Math.floor(Math.random() * shortCareerArray.length);
const medCareerRandom = Math.floor(Math.random() * medCareerArray.length);
const longCareerRandom = Math.floor(Math.random() * longCareerArray.length);
const randomCareer = Math.floor(Math.random() * randomCareerArray.length);

const shortSocialRandom = Math.floor(Math.random() * shortSocialArray.length);
const medSocialRandom = Math.floor(Math.random() * medSocialArray.length);
const longSocialRandom = Math.floor(Math.random() * longSocialArray.length);
const randomSocial = Math.floor(Math.random() * randomSocialArray.length);

const shortFinancialRandom = Math.floor(Math.random() * shortFinancialArray.length);
const medFinancialRandom = Math.floor(Math.random() * medFinancialArray.length);
const longFinancialRandom = Math.floor(Math.random() * longFinancialArray.length);
const randomFinancial = Math.floor(Math.random() * randomFinancialArray.length);





shortSpiritAnswer = shortSpiritArray[shortSpiritRandom].task;
medSpiritAnswer = medSpiritArray[medSpiritRandom].task;
longSpiritAnswer = longSpiritArray[longSpiritRandom].task;
rouletteSpiritAnswer = randomSpiritArray[randomSpirit].task;
spiritTipBox = spiritTipArray[randomSpiritTip];

shortFitnessAnswer = shortFitnessArray[shortFitnessRandom].task;
medFitnessAnswer = medFitnessArray[medFitnessRandom].task;
longFitnessAnswer = longFitnessArray[longFitnessRandom].task;
rouletteFitnessAnswer = randomFitnessArray[randomFitness].task;
fitnessTipBox = fitnessTipArray[randomFitnessTip];

shortEducationalAnswer = shortEducationalArray[shortEducationalRandom].task;
medEducationalAnswer = medEducationalArray[medEducationalRandom].task;
longEducationalAnswer = longEducationalArray[longEducationalRandom].task;
rouletteEducationalAnswer = randomEducationArray[randomEducation].task;
educationTipBox = educationTipArray[randomEducationTip];

shortFamilyAnswer = shortFamilyArray[shortFamilyRandom].task;
medFamilyAnswer = medFamilyArray[medFamilyRandom].task;
longFamilyAnswer = longFamilyArray[longFamilyRandom].task;
rouletteFamilyAnswer = randomFamilyArray[randomFamily].task;
familyTipBox = familyTipArray[randomFamilyTip];

shortCareerAnswer = shortCareerArray[shortCareerRandom].task;
medCareerAnswer = medCareerArray[medCareerRandom].task;
longCareerAnswer = longCareerArray[longCareerRandom].task;
rouletteCareerAnswer = randomCareerArray[randomCareer].task;
careerTipBox = careerTipArray[randomCareerTip];

shortSocialAnswer = shortSocialArray[shortSocialRandom].task;
medSocialAnswer = medSocialArray[medSocialRandom].task;
longSocialAnswer = longSocialArray[longSocialRandom].task;
rouletteSocialAnswer = randomSocialArray[randomSocial].task;
socialTipBox = socialTipArray[randomSocialTip];

shortFinancialAnswer = shortFinancialArray[shortFinancialRandom].task;
medFinancialAnswer = medFinancialArray[medFinancialRandom].task;
longFinancialAnswer = longFinancialArray[longFinancialRandom].task;
rouletteFinancialAnswer = randomFinancialArray[randomFinancial].task;
financialTipBox = financialTipArray[randomFinancialTip];

var rouletteArray = [rouletteSpiritAnswer, rouletteCareerAnswer, rouletteEducationalAnswer, rouletteFamilyAnswer, rouletteFinancialAnswer, rouletteFitnessAnswer, rouletteSocialAnswer]
const rouletteRandomAnswer = Math.floor(Math.random() * rouletteArray.length)
roulette = rouletteArray[rouletteRandomAnswer]
rouletteTipBox = rouletteTipArray[randomRouletteTip]





$("#family").click(function(){
    if(document.getElementById("shortTerm").checked == true){
        document.getElementById("familyAnswer").innerHTML = shortFamilyAnswer;
        document.getElementById("tipBox").innerHTML = familyTipBox;
        document.getElementById("spiritual").remove();
        document.getElementById("spiritualAnswer").remove();
        document.getElementById("financial").remove();
        document.getElementById("financialAnswer").remove();
        document.getElementById("fitness").remove();
        document.getElementById("fitnessAnswer").remove();
        document.getElementById("career").remove();
        document.getElementById("careerAnswer").remove();
        document.getElementById("education").remove();
        document.getElementById("educationAnswer").remove();
        document.getElementById("social").remove();
        document.getElementById("socialAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec2").remove();
        document.getElementById("min2").remove();
        document.getElementById("sec3").remove();
        document.getElementById("min3").remove();
        document.getElementById("sec4").remove();
        document.getElementById("min4").remove();
        document.getElementById("sec5").remove();
        document.getElementById("min5").remove();
        document.getElementById("sec6").remove();
        document.getElementById("min6").remove();
        document.getElementById("sec7").remove();
        document.getElementById("min7").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
        
    }
    else if(document.getElementById("midTerm").checked == true){
        document.getElementById("familyAnswer").innerHTML = medFamilyAnswer;
        document.getElementById("tipBox").innerHTML = familyTipBox;
        document.getElementById("spiritual").remove();
        document.getElementById("spiritualAnswer").remove();
        document.getElementById("financial").remove();
        document.getElementById("financialAnswer").remove();
        document.getElementById("fitness").remove();
        document.getElementById("fitnessAnswer").remove();
        document.getElementById("career").remove();
        document.getElementById("careerAnswer").remove();
        document.getElementById("education").remove();
        document.getElementById("educationAnswer").remove();
        document.getElementById("social").remove();
        document.getElementById("socialAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec2").remove();
        document.getElementById("min2").remove();
        document.getElementById("sec3").remove();
        document.getElementById("min3").remove();
        document.getElementById("sec4").remove();
        document.getElementById("min4").remove();
        document.getElementById("sec5").remove();
        document.getElementById("min5").remove();
        document.getElementById("sec6").remove();
        document.getElementById("min6").remove();
        document.getElementById("sec7").remove();
        document.getElementById("min7").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
    }
    else if(document.getElementById("longTerm").checked == true){
        document.getElementById("familyAnswer").innerHTML = longFamilyAnswer;
        document.getElementById("tipBox").innerHTML = familyTipBox;
        document.getElementById("spiritual").remove();
        document.getElementById("spiritualAnswer").remove();
        document.getElementById("financial").remove();
        document.getElementById("financialAnswer").remove();
        document.getElementById("fitness").remove();
        document.getElementById("fitnessAnswer").remove();
        document.getElementById("career").remove();
        document.getElementById("careerAnswer").remove();
        document.getElementById("education").remove();
        document.getElementById("educationAnswer").remove();
        document.getElementById("social").remove();
        document.getElementById("socialAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec2").remove();
        document.getElementById("min2").remove();
        document.getElementById("sec3").remove();
        document.getElementById("min3").remove();
        document.getElementById("sec4").remove();
        document.getElementById("min4").remove();
        document.getElementById("sec5").remove();
        document.getElementById("min5").remove();
        document.getElementById("sec6").remove();
        document.getElementById("min6").remove();
        document.getElementById("sec7").remove();
        document.getElementById("min7").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
    } 
    
})

$("#spiritual").click(function(){
    if(document.getElementById("shortTerm").checked == true){
        document.getElementById("spiritualAnswer").innerHTML = shortSpiritAnswer;
        document.getElementById("tipBox").innerHTML = spiritTipBox;
        document.getElementById("family").remove();
        document.getElementById("familyAnswer").remove();
        document.getElementById("financial").remove();
        document.getElementById("financialAnswer").remove();
        document.getElementById("fitness").remove();
        document.getElementById("fitnessAnswer").remove();
        document.getElementById("career").remove();
        document.getElementById("careerAnswer").remove();
        document.getElementById("education").remove();
        document.getElementById("educationAnswer").remove();
        document.getElementById("social").remove();
        document.getElementById("socialAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec1").remove();
        document.getElementById("min1").remove();
        document.getElementById("sec3").remove();
        document.getElementById("min3").remove();
        document.getElementById("sec4").remove();
        document.getElementById("min4").remove();
        document.getElementById("sec5").remove();
        document.getElementById("min5").remove();
        document.getElementById("sec6").remove();
        document.getElementById("min6").remove();
        document.getElementById("sec7").remove();
        document.getElementById("min7").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
    }
    else if(document.getElementById("midTerm").checked == true){
        document.getElementById("spiritualAnswer").innerHTML = medSpiritAnswer;
        document.getElementById("tipBox").innerHTML = spiritTipBox;
        document.getElementById("family").remove();
        document.getElementById("familyAnswer").remove();
        document.getElementById("financial").remove();
        document.getElementById("financialAnswer").remove();
        document.getElementById("fitness").remove();
        document.getElementById("fitnessAnswer").remove();
        document.getElementById("career").remove();
        document.getElementById("careerAnswer").remove();
        document.getElementById("education").remove();
        document.getElementById("educationAnswer").remove();
        document.getElementById("social").remove();
        document.getElementById("socialAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec1").remove();
        document.getElementById("min1").remove();
        document.getElementById("sec3").remove();
        document.getElementById("min3").remove();
        document.getElementById("sec4").remove();
        document.getElementById("min4").remove();
        document.getElementById("sec5").remove();
        document.getElementById("min5").remove();
        document.getElementById("sec6").remove();
        document.getElementById("min6").remove();
        document.getElementById("sec7").remove();
        document.getElementById("min7").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
    }
    else if(document.getElementById("longTerm").checked == true){
        document.getElementById("spiritualAnswer").innerHTML = longSpiritAnswer;
        document.getElementById("tipBox").innerHTML = spiritTipBox;
        document.getElementById("family").remove();
        document.getElementById("familyAnswer").remove();
        document.getElementById("financial").remove();
        document.getElementById("financialAnswer").remove();
        document.getElementById("fitness").remove();
        document.getElementById("fitnessAnswer").remove();
        document.getElementById("career").remove();
        document.getElementById("careerAnswer").remove();
        document.getElementById("education").remove();
        document.getElementById("educationAnswer").remove();
        document.getElementById("social").remove();
        document.getElementById("socialAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec1").remove();
        document.getElementById("min1").remove();
        document.getElementById("sec3").remove();
        document.getElementById("min3").remove();
        document.getElementById("sec4").remove();
        document.getElementById("min4").remove();
        document.getElementById("sec5").remove();
        document.getElementById("min5").remove();
        document.getElementById("sec6").remove();
        document.getElementById("min6").remove();
        document.getElementById("sec7").remove();
        document.getElementById("min7").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
    } 
})

$("#financial").click(function(){
    if(document.getElementById("shortTerm").checked == true){
        document.getElementById("financialAnswer").innerHTML = shortFinancialAnswer;
        document.getElementById("tipBox").innerHTML = financialTipBox;
        document.getElementById("spiritual").remove();
        document.getElementById("spiritualAnswer").remove();
        document.getElementById("family").remove();
        document.getElementById("familyAnswer").remove();
        document.getElementById("fitness").remove();
        document.getElementById("fitnessAnswer").remove();
        document.getElementById("career").remove();
        document.getElementById("careerAnswer").remove();
        document.getElementById("education").remove();
        document.getElementById("educationAnswer").remove();
        document.getElementById("social").remove();
        document.getElementById("socialAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec1").remove();
        document.getElementById("min1").remove();
        document.getElementById("sec2").remove();
        document.getElementById("min2").remove();
        document.getElementById("sec4").remove();
        document.getElementById("min4").remove();
        document.getElementById("sec5").remove();
        document.getElementById("min5").remove();
        document.getElementById("sec6").remove();
        document.getElementById("min6").remove();
        document.getElementById("sec7").remove();
        document.getElementById("min7").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
    }
    else if(document.getElementById("midTerm").checked == true){
        document.getElementById("financialAnswer").innerHTML = medFinancialAnswer;
        document.getElementById("tipBox").innerHTML = financialTipBox;
        document.getElementById("spiritual").remove();
        document.getElementById("spiritualAnswer").remove();
        document.getElementById("family").remove();
        document.getElementById("familyAnswer").remove();
        document.getElementById("fitness").remove();
        document.getElementById("fitnessAnswer").remove();
        document.getElementById("career").remove();
        document.getElementById("careerAnswer").remove();
        document.getElementById("education").remove();
        document.getElementById("educationAnswer").remove();
        document.getElementById("social").remove();
        document.getElementById("socialAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec1").remove();
        document.getElementById("min1").remove();
        document.getElementById("sec2").remove();
        document.getElementById("min2").remove();
        document.getElementById("sec4").remove();
        document.getElementById("min4").remove();
        document.getElementById("sec5").remove();
        document.getElementById("min5").remove();
        document.getElementById("sec6").remove();
        document.getElementById("min6").remove();
        document.getElementById("sec7").remove();
        document.getElementById("min7").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
    }
    else if(document.getElementById("longTerm").checked == true){
        document.getElementById("financialAnswer").innerHTML = longFinancialAnswer;
        document.getElementById("tipBox").innerHTML = financialTipBox;
        document.getElementById("spiritual").remove();
        document.getElementById("spiritualAnswer").remove();
        document.getElementById("family").remove();
        document.getElementById("familyAnswer").remove();
        document.getElementById("fitness").remove();
        document.getElementById("fitnessAnswer").remove();
        document.getElementById("career").remove();
        document.getElementById("careerAnswer").remove();
        document.getElementById("education").remove();
        document.getElementById("educationAnswer").remove();
        document.getElementById("social").remove();
        document.getElementById("socialAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec1").remove();
        document.getElementById("min1").remove();
        document.getElementById("sec2").remove();
        document.getElementById("min2").remove();
        document.getElementById("sec4").remove();
        document.getElementById("min4").remove();
        document.getElementById("sec5").remove();
        document.getElementById("min5").remove();
        document.getElementById("sec6").remove();
        document.getElementById("min6").remove();
        document.getElementById("sec7").remove();
        document.getElementById("min7").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
    } 
})

$("#fitness").click(function(){
    if(document.getElementById("shortTerm").checked == true){
        document.getElementById("fitnessAnswer").innerHTML = shortFitnessAnswer;
        document.getElementById("tipBox").innerHTML = fitnessTipBox;
        document.getElementById("spiritual").remove();
        document.getElementById("spiritualAnswer").remove();
        document.getElementById("financial").remove();
        document.getElementById("financialAnswer").remove();
        document.getElementById("family").remove();
        document.getElementById("familyAnswer").remove();
        document.getElementById("career").remove();
        document.getElementById("careerAnswer").remove();
        document.getElementById("education").remove();
        document.getElementById("educationAnswer").remove();
        document.getElementById("social").remove();
        document.getElementById("socialAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec1").remove();
        document.getElementById("min1").remove();
        document.getElementById("sec2").remove();
        document.getElementById("min2").remove();
        document.getElementById("sec3").remove();
        document.getElementById("min3").remove();
        document.getElementById("sec5").remove();
        document.getElementById("min5").remove();
        document.getElementById("sec6").remove();
        document.getElementById("min6").remove();
        document.getElementById("sec7").remove();
        document.getElementById("min7").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
    }
    else if(document.getElementById("midTerm").checked == true){
        document.getElementById("fitnessAnswer").innerHTML = medFitnessAnswer;
        document.getElementById("tipBox").innerHTML = fitnessTipBox;
        document.getElementById("spiritual").remove();
        document.getElementById("spiritualAnswer").remove();
        document.getElementById("financial").remove();
        document.getElementById("financialAnswer").remove();
        document.getElementById("family").remove();
        document.getElementById("familyAnswer").remove();
        document.getElementById("career").remove();
        document.getElementById("careerAnswer").remove();
        document.getElementById("education").remove();
        document.getElementById("educationAnswer").remove();
        document.getElementById("social").remove();
        document.getElementById("socialAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec1").remove();
        document.getElementById("min1").remove();
        document.getElementById("sec2").remove();
        document.getElementById("min2").remove();
        document.getElementById("sec3").remove();
        document.getElementById("min3").remove();
        document.getElementById("sec5").remove();
        document.getElementById("min5").remove();
        document.getElementById("sec6").remove();
        document.getElementById("min6").remove();
        document.getElementById("sec7").remove();
        document.getElementById("min7").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
    }
    else if(document.getElementById("longTerm").checked == true){
        document.getElementById("fitnessAnswer").innerHTML = longFitnessAnswer;
        document.getElementById("tipBox").innerHTML = fitnessTipBox;
        document.getElementById("spiritual").remove();
        document.getElementById("spiritualAnswer").remove();
        document.getElementById("financial").remove();
        document.getElementById("financialAnswer").remove();
        document.getElementById("family").remove();
        document.getElementById("familyAnswer").remove();
        document.getElementById("career").remove();
        document.getElementById("careerAnswer").remove();
        document.getElementById("education").remove();
        document.getElementById("educationAnswer").remove();
        document.getElementById("social").remove();
        document.getElementById("socialAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec1").remove();
        document.getElementById("min1").remove();
        document.getElementById("sec2").remove();
        document.getElementById("min2").remove();
        document.getElementById("sec3").remove();
        document.getElementById("min3").remove();
        document.getElementById("sec5").remove();
        document.getElementById("min5").remove();
        document.getElementById("sec6").remove();
        document.getElementById("min6").remove();
        document.getElementById("sec7").remove();
        document.getElementById("min7").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
    } 
})

$("#career").click(function(){
    if(document.getElementById("shortTerm").checked == true){
        document.getElementById("careerAnswer").innerHTML = shortCareerAnswer;
        document.getElementById("tipBox").innerHTML = careerTipBox;
        document.getElementById("spiritual").remove();
        document.getElementById("spiritualAnswer").remove();
        document.getElementById("financial").remove();
        document.getElementById("financialAnswer").remove();
        document.getElementById("fitness").remove();
        document.getElementById("fitnessAnswer").remove();
        document.getElementById("family").remove();
        document.getElementById("familyAnswer").remove();
        document.getElementById("education").remove();
        document.getElementById("educationAnswer").remove();
        document.getElementById("social").remove();
        document.getElementById("socialAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec1").remove();
        document.getElementById("min1").remove();
        document.getElementById("sec2").remove();
        document.getElementById("min2").remove();
        document.getElementById("sec3").remove();
        document.getElementById("min3").remove();
        document.getElementById("sec4").remove();
        document.getElementById("min4").remove();
        document.getElementById("sec6").remove();
        document.getElementById("min6").remove();
        document.getElementById("sec7").remove();
        document.getElementById("min7").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
    }
    else if(document.getElementById("midTerm").checked == true){
        document.getElementById("careerAnswer").innerHTML = medCareerAnswer;
        document.getElementById("tipBox").innerHTML = careerTipBox;
        document.getElementById("spiritual").remove();
        document.getElementById("spiritualAnswer").remove();
        document.getElementById("financial").remove();
        document.getElementById("financialAnswer").remove();
        document.getElementById("fitness").remove();
        document.getElementById("fitnessAnswer").remove();
        document.getElementById("family").remove();
        document.getElementById("familyAnswer").remove();
        document.getElementById("education").remove();
        document.getElementById("educationAnswer").remove();
        document.getElementById("social").remove();
        document.getElementById("socialAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec1").remove();
        document.getElementById("min1").remove();
        document.getElementById("sec2").remove();
        document.getElementById("min2").remove();
        document.getElementById("sec3").remove();
        document.getElementById("min3").remove();
        document.getElementById("sec4").remove();
        document.getElementById("min4").remove();
        document.getElementById("sec6").remove();
        document.getElementById("min6").remove();
        document.getElementById("sec7").remove();
        document.getElementById("min7").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
    }
    else if(document.getElementById("longTerm").checked == true){
        document.getElementById("careerAnswer").innerHTML = longCareerAnswer;
        document.getElementById("tipBox").innerHTML = careerTipBox;
        document.getElementById("spiritual").remove();
        document.getElementById("spiritualAnswer").remove();
        document.getElementById("financial").remove();
        document.getElementById("financialAnswer").remove();
        document.getElementById("fitness").remove();
        document.getElementById("fitnessAnswer").remove();
        document.getElementById("family").remove();
        document.getElementById("familyAnswer").remove();
        document.getElementById("education").remove();
        document.getElementById("educationAnswer").remove();
        document.getElementById("social").remove();
        document.getElementById("socialAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec1").remove();
        document.getElementById("min1").remove();
        document.getElementById("sec2").remove();
        document.getElementById("min2").remove();
        document.getElementById("sec3").remove();
        document.getElementById("min3").remove();
        document.getElementById("sec4").remove();
        document.getElementById("min4").remove();
        document.getElementById("sec6").remove();
        document.getElementById("min6").remove();
        document.getElementById("sec7").remove();
        document.getElementById("min7").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
    } 
})

$("#education").click(function(){
    if(document.getElementById("shortTerm").checked == true){
        document.getElementById("educationAnswer").innerHTML = shortEducationalAnswer;
        document.getElementById("tipBox").innerHTML = educationTipBox;
        document.getElementById("spiritual").remove();
        document.getElementById("spiritualAnswer").remove();
        document.getElementById("financial").remove();
        document.getElementById("financialAnswer").remove();
        document.getElementById("fitness").remove();
        document.getElementById("fitnessAnswer").remove();
        document.getElementById("career").remove();
        document.getElementById("careerAnswer").remove();
        document.getElementById("family").remove();
        document.getElementById("familyAnswer").remove();
        document.getElementById("social").remove();
        document.getElementById("socialAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec1").remove();
        document.getElementById("min1").remove();
        document.getElementById("sec2").remove();
        document.getElementById("min2").remove();
        document.getElementById("sec3").remove();
        document.getElementById("min3").remove();
        document.getElementById("sec4").remove();
        document.getElementById("min4").remove();
        document.getElementById("sec5").remove();
        document.getElementById("min5").remove();
        document.getElementById("sec7").remove();
        document.getElementById("min7").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
    }
    else if(document.getElementById("midTerm").checked == true){
        document.getElementById("educationAnswer").innerHTML = medEducationalAnswer;
        document.getElementById("tipBox").innerHTML = educationTipBox;
        document.getElementById("spiritual").remove();
        document.getElementById("spiritualAnswer").remove();
        document.getElementById("financial").remove();
        document.getElementById("financialAnswer").remove();
        document.getElementById("fitness").remove();
        document.getElementById("fitnessAnswer").remove();
        document.getElementById("career").remove();
        document.getElementById("careerAnswer").remove();
        document.getElementById("family").remove();
        document.getElementById("familyAnswer").remove();
        document.getElementById("social").remove();
        document.getElementById("socialAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec1").remove();
        document.getElementById("min1").remove();
        document.getElementById("sec2").remove();
        document.getElementById("min2").remove();
        document.getElementById("sec3").remove();
        document.getElementById("min3").remove();
        document.getElementById("sec4").remove();
        document.getElementById("min4").remove();
        document.getElementById("sec5").remove();
        document.getElementById("min5").remove();
        document.getElementById("sec7").remove();
        document.getElementById("min7").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
    }
    else if(document.getElementById("longTerm").checked == true){
        document.getElementById("educationAnswer").innerHTML = longEducationalAnswer;
        document.getElementById("tipBox").innerHTML = educationTipBox;
        document.getElementById("spiritual").remove();
        document.getElementById("spiritualAnswer").remove();
        document.getElementById("financial").remove();
        document.getElementById("financialAnswer").remove();
        document.getElementById("fitness").remove();
        document.getElementById("fitnessAnswer").remove();
        document.getElementById("career").remove();
        document.getElementById("careerAnswer").remove();
        document.getElementById("family").remove();
        document.getElementById("familyAnswer").remove();
        document.getElementById("social").remove();
        document.getElementById("socialAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec1").remove();
        document.getElementById("min1").remove();
        document.getElementById("sec2").remove();
        document.getElementById("min2").remove();
        document.getElementById("sec3").remove();
        document.getElementById("min3").remove();
        document.getElementById("sec4").remove();
        document.getElementById("min4").remove();
        document.getElementById("sec5").remove();
        document.getElementById("min5").remove();
        document.getElementById("sec7").remove();
        document.getElementById("min7").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
    } 
})

$("#social").click(function(){
    if(document.getElementById("shortTerm").checked == true){
        document.getElementById("socialAnswer").innerHTML = shortSocialAnswer;
        document.getElementById("tipBox").innerHTML = socialTipBox;
        document.getElementById("spiritual").remove();
        document.getElementById("spiritualAnswer").remove();
        document.getElementById("financial").remove();
        document.getElementById("financialAnswer").remove();
        document.getElementById("fitness").remove();
        document.getElementById("fitnessAnswer").remove();
        document.getElementById("career").remove();
        document.getElementById("careerAnswer").remove();
        document.getElementById("education").remove();
        document.getElementById("educationAnswer").remove();
        document.getElementById("family").remove();
        document.getElementById("familyAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec1").remove();
        document.getElementById("min1").remove();
        document.getElementById("sec2").remove();
        document.getElementById("min2").remove();
        document.getElementById("sec3").remove();
        document.getElementById("min3").remove();
        document.getElementById("sec4").remove();
        document.getElementById("min4").remove();
        document.getElementById("sec5").remove();
        document.getElementById("min5").remove();
        document.getElementById("sec6").remove();
        document.getElementById("min6").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
    }
    else if(document.getElementById("midTerm").checked == true){
        document.getElementById("socialAnswer").innerHTML = medSocialAnswer;
        document.getElementById("tipBox").innerHTML = socialTipBox;
        document.getElementById("spiritual").remove();
        document.getElementById("spiritualAnswer").remove();
        document.getElementById("financial").remove();
        document.getElementById("financialAnswer").remove();
        document.getElementById("fitness").remove();
        document.getElementById("fitnessAnswer").remove();
        document.getElementById("career").remove();
        document.getElementById("careerAnswer").remove();
        document.getElementById("education").remove();
        document.getElementById("educationAnswer").remove();
        document.getElementById("family").remove();
        document.getElementById("familyAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec1").remove();
        document.getElementById("min1").remove();
        document.getElementById("sec2").remove();
        document.getElementById("min2").remove();
        document.getElementById("sec3").remove();
        document.getElementById("min3").remove();
        document.getElementById("sec4").remove();
        document.getElementById("min4").remove();
        document.getElementById("sec5").remove();
        document.getElementById("min5").remove();
        document.getElementById("sec6").remove();
        document.getElementById("min6").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
    }
    else if(document.getElementById("longTerm").checked == true){
        document.getElementById("socialAnswer").innerHTML = longSocialAnswer;
        document.getElementById("tipBox").innerHTML = socialTipBox;
        document.getElementById("spiritual").remove();
        document.getElementById("spiritualAnswer").remove();
        document.getElementById("financial").remove();
        document.getElementById("financialAnswer").remove();
        document.getElementById("fitness").remove();
        document.getElementById("fitnessAnswer").remove();
        document.getElementById("career").remove();
        document.getElementById("careerAnswer").remove();
        document.getElementById("education").remove();
        document.getElementById("educationAnswer").remove();
        document.getElementById("family").remove();
        document.getElementById("familyAnswer").remove();
        document.getElementById("rouletteBox").remove();
        document.getElementById("rouletteBoxAnswer").remove();
        document.getElementById("sec").remove();
        document.getElementById("min").remove();
        document.getElementById("sec1").remove();
        document.getElementById("min1").remove();
        document.getElementById("sec2").remove();
        document.getElementById("min2").remove();
        document.getElementById("sec3").remove();
        document.getElementById("min3").remove();
        document.getElementById("sec4").remove();
        document.getElementById("min4").remove();
        document.getElementById("sec5").remove();
        document.getElementById("min5").remove();
        document.getElementById("sec6").remove();
        document.getElementById("min6").remove();
        document.getElementById("sec8").remove();
        document.getElementById("min8").remove();
    } 
})

$("#rouletteButton").click(() => {
    document.getElementById("rouletteBoxAnswer").innerHTML = roulette;
    document.getElementById("tipBox").innerHTML = rouletteTipBox;
    document.getElementById("spiritual").remove();
    document.getElementById("spiritualAnswer").remove();
    document.getElementById("financial").remove();
    document.getElementById("financialAnswer").remove();
    document.getElementById("fitness").remove();
    document.getElementById("fitnessAnswer").remove();
    document.getElementById("career").remove();
    document.getElementById("careerAnswer").remove();
    document.getElementById("education").remove();
    document.getElementById("educationAnswer").remove();
    document.getElementById("social").remove();
    document.getElementById("socialAnswer").remove();
    document.getElementById("family").remove();
    document.getElementById("familyAnswer").remove();
    document.getElementById("sec1").remove();
    document.getElementById("min1").remove();
    document.getElementById("sec2").remove();
    document.getElementById("min2").remove();
    document.getElementById("sec3").remove();
    document.getElementById("min3").remove();
    document.getElementById("sec4").remove();
    document.getElementById("min4").remove();
    document.getElementById("sec5").remove();
    document.getElementById("min5").remove();
    document.getElementById("sec6").remove();
    document.getElementById("min6").remove();
    document.getElementById("sec7").remove();
    document.getElementById("min7").remove();
    document.getElementById("sec8").remove();
    document.getElementById("min8").remove();
})