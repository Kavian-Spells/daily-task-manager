/*let taskForce = {
    terms: ["Short Term", "Middle Term", "Long Term"],
    social: ["Call 3 Family Members", "Be Anywhere Except Your House (NOT INCLUDING WORK) For At Least 3 Hours For 3 Days A Week", "Participate In Social Clubs or Gatherings That Have Regular Meetings"],
    education: ["Read An Article About A Topic You Are Normally Disintereted In", "Learn A Formal Dance", "Learn To Fluently Speak A Fictional Language"]
};

console.log(taskForce.social[0] + " " + taskForce.terms[0] + " " + taskForce.education[0]);




class Social {
    constructor (social) {
        this.social = social
    }
    shortTermSocial() {
        console.log(this.social)
    }
    middleTermSocial() {
        console.log(this.social)
    }
    longTermSocial() {
        console.log(this.social)
    }
    
    }


class Education {
    constructor (education) {
        this.education = education
    }
    shortTermEducation() {
        console.log(this.education)
    }
    middleTermEducation() {
        console.log(this.education)
    }
    longTermEducation() {
        console.log(this.education)
    }
}

class Quotes {
    constructor() {
        this.quote = []
    }
    fetchApi() {
        axios.get("https://zenquotes.io/api/random")
        .then(response => {
            console.log(response)
            this.quote = response.data
        }) // getting an error, dev tools says that the response is blocked...not sure why
    }
    displayQuote() {
        this.quote.map(data => {
            document.getElementById('quotes').innerHTML = `${data.random}` // this dot notation will probably change once we see the actual results of the api response. 
        })
    }
} // this part is not finished



let apiQuotes = new Quotes
apiQuotes.fetchApi();
let socialResponseOne = new Social("Call 3 Family Members");
let socialResponseTwo = new Social("Go Anywhere Except Your House (NOT INCLUDING WORK) For At Least 3 Hours For 3 Days A Week");
let socialResponseThree = new Social("Participate In Social Clubs or Gatherings That Have Regular Meetings");
socialResponseOne.shortTermSocial();
socialResponseTwo.middleTermSocial();
socialResponseThree.longTermSocial();
let educationResponseOne = new Education("Read An Article About A Topic You Are Normally Disintereted In");
let educationResponseTwo = new Education("Learn A Formal Dance");
let educationResponseThree = new Education("Master A Fictional Language");
educationResponseOne.shortTermEducation();
educationResponseTwo.middleTermEducation();
educationResponseThree.longTermEducation();
*/