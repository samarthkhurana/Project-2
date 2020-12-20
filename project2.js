var readlineSync = require("readline-sync");
const chalk = require('chalk');

var score=0;
// Kindof Database 
var highScores= [{
			name: "Chatur",
			total: 8
		},
    {
			name: "Farhan",
			total: 7
		},
		{
			name: "Rancho",
			total: 6
		}
		];

var userName =readlineSync.question(chalk.green("Please Enter your name to start the Quiz ?"));

console.log(chalk.blue.bold("Welcome " + userName + " to the COMPUTERS & TECHNOLOGY QUIZ"));

console.log(chalk.magentaBright("\nRules for the quiz :"+"\n1)There are 10 question in all,1 point for each correct answer.\n2)No negative marking i.e 0 will be given for a wrong answer.\n3)Choose your answer from the options a,b,c&d.\n"));

// play function
// basically a mini program and all the processing is done here

function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer){
    console.log(chalk.green.bold("Right!"));
    score=score+1 ;
    
  }
  else{
    console.log(chalk.red.bold("Wrong!"));
    score= score
  }

  console.log(chalk.green.bold("Current Score: ", score));
    console.log("------------")
}

// array (list of questions with their answers)
//MCQ Format
var questions = [{
  question : 
  chalk.blue.bold("Q1)About how many computer languages are in use :\n") + "\na)5000" + "\nb)20" +"\nc)50" + "\nd)2000\n" ,
  answer : 
  "d"
}, {
  question : 
  chalk.blue.bold("Q2)Which of these is not an early computer :\n ")+ "\na)UNIVAC" + "\nb)ENIAC" +"\nc)SAGE" + "\nd)NASA\n" ,
  answer : 
  "d"
},{
  question : 
  chalk.blue.bold("Q3)Which of these is not one of the early protocols or ways to use the internet :\n ") + "\na)Blogging" + "\nb)FTP" +"\nc)Telnet" + "\nd)Gopher\n" ,
  answer : 
  "a"
},{
  question : 
  chalk.blue.bold("Q4)A network design to allow communication within an organization is called :\n") + "\na)The Internet" + "\nb)A Browser" +"\nc)The World Wide Web" + "\nd)An Intranet\n " ,
  answer : "d"
},{
  question : 
  chalk.blue.bold("Q5)What device, released in 1993 gave rise to the term personal digital assistant :\n") +
  "\na)Microsoft Surface" + "\nb)Palm Pilot" +"\nc)NewtonMessagePad" + "\nd)Iphone\n   " ,
  answer : 
  "c"
},{
  question : 
  chalk.blue.bold("Q6)Computer Trojans are an example of:\n") +
  "\na)Network Security Devices" + "\nb)malware" +"\nc)Spyware" + "\nd)Computer Worms\n " ,
  answer : 
  "b"
},{
  question : 
  chalk.blue.bold("Q7)What was the name of the chess playing computer that made history when it defeated world champion Garry Kasparov in 1996 :\n") + "\na)Chipset" + "\nb)Rybka" +"\nc)Deep Blue" + "\nd)Deep Thought\n" ,
  answer : 
  "c"
},{
  question : 
  chalk.blue.bold("Q8)Which of these was the first programmable general-purpose electronic digital computer :\n") + "\na)EDVAC" + "\nb)Acorn Network Computer" +"\nc)ENIAC" + "\nd)BINAC\n   " ,
  answer : 
  "c"
},{
  question : 
  chalk.blue.bold("Q9)Who coined the term artificial intelligence :\n" )+"\na)Charles Bachman" + "\nb)Herbert A. Simon" +"\nc)Donald Ervin Knuth" + "\nd)John Mccarthy\n   " ,
  answer : 
  "d"
},{
  question : 
  chalk.blue.bold("Q10)Which company released its first notebook computer, the 316LT, in 1989 :\n") +"\na)Dell" + "\nb)Lenovo" +"\nc)Hewlett Packard" + "\nd)Apple\n   " ,
  answer : 
  "a"
}];

//loop
for (var i=0; i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.green("Yaaay!! YOU SCORED :", score + " out of 10." ));
console.log(chalk.magentaBright("The Highscores are as follows : "));
//loop to print the highscores array
		for (i = 0; i <highScores.length; i++) {
			console.log(chalk.magentaBright((i+1) +"." + " " + highScores[i].name + ": " + highScores[i].total));
		}

console.log(chalk.red.bold("Congrats if you have made a new Highscore.Reach out to me on my twitter handle with a screenshot of the same.\n"));
