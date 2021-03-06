const readlineSync = require('readline-sync');
const chalk = require('chalk');

let score = 0;

const questions = [
    {
        question : "what is capital of Australia ? ",
        answer : "Canberra"
    },
     {
        question : "what is capital of Bangladesh ? ",
        answer : "Dhaka"
    },
     {
        question : "what is capital of China ? ",
        answer : "Beijing"
    },
     {
        question : "what is capital of France ? ",
        answer : "Paris"
    },
     {
        question : "what is capital of Japan ? ",
        answer : "Tokyo"
    }
]

const highScores = [
    {
        name : "Viresh",
        score : 5
    },
    {
        name : "Abhishek",
        score : 4
    }
]

const welcome = () =>{
    let name = readlineSync.question("What is your name ? ")
    const welcomeMsg = "Welcome " + chalk.yellow.bold(name.toUpperCase()) + " to DO YOU KNOW CAPITALS ";
    console.log(welcomeMsg);
    console.log("every correct answer give you +1 score");
}

const play = (question , answer)=>{
    let styledQuestion = chalk.rgb(255, 214, 153)(question)
    let userAnswer = readlineSync.question(styledQuestion);
    if(userAnswer.toLowerCase() === answer.toLowerCase()){
        score = score + 1;
        console.log(chalk.green("Right !!!"));
    } 
    else{
        console.log(chalk.red("Wrong !!!"));
    }
    console.log("Your Current Score : " + chalk.magenta(score));
    console.log("---------------------------------------------------")
}

const game = ()=>{
    questions.map( (element)=>{
        play(element.question,element.answer)
    })
}

const displayScores = () =>{
    console.log(chalk.bgRed("YAY! , You Scored : " + score))
    console.log("---------------------------------------------------")
    console.log("Check out the high scores ")
    console.log("If you broke any of the records, send me the screenshot, I will update it in the leaderboard.")
    highScores.map(element =>console.log(element.name + " : "+element.score))
}


welcome()
game()
displayScores()