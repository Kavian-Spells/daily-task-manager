class Task{
    constructor(task){
        this.task = task;
    }
}

class Spiritual extends Task{
    easy(){
        console.log(this.task + " is an easy spiritual task");
    }
    medium(){
        console.log(this.task + " is a medium spiritual task");
    }
    hard(){
        console.log(this.task + " is a hard spiritual task");
    }
}

var easySpirit1 = new Spiritual("Pet a dog");
var easySpirit2 = new Spiritual("Go to church");
var easySpirit3 = new Spiritual("Write a daily journal");
var easySpirit4 = new Spiritual("Meditate by the ocean");

var medSpirit1 = new Spiritual("Attend a seminar");
var medSpirit2 = new Spiritual("Read a self help book");
var medSpirit3 = new Spiritual("Volunteer your time somewhere");
var medSpirit4 = new Spiritual("Donate to a good cause");

var hardSpirit1 = new Spiritual("Go to church");
var hardSpirit2 = new Spiritual("Forgive someone from an old grudge");
var hardSpirit3 = new Spiritual("Help someone else thru difficulty");
var hardSpirit4 = new Spiritual("Write a new life goal");
var hardSpirit5 = new Spiritual("Forgive yourself");

function easySpirit(){
    easySpirit1.easy();
    easySpirit2.easy();
    easySpirit3.easy();
    easySpirit4.easy();
}

function mediumSpirit(){
    medSpirit1.medium();
    medSpirit2.medium();
    medSpirit3.medium();
}

function hardSpirit(){
    hardSpirit1.hard();
    hardSpirit2.hard();
    hardSpirit3.hard();
    hardSpirit4.hard();
}





var easyArray = [easySpirit1, easySpirit2, easySpirit3, easySpirit4];
var mediumArray = [medSpirit1, medSpirit2, medSpirit3, medSpirit4];
var hardArray = [hardSpirit1, hardSpirit2, hardSpirit3, hardSpirit4];



const random = Math.floor(Math.random() * easyArray.length);

console.log(easyArray[random].task);
