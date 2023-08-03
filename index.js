var  readlineSync = require("readline-sync");

var user = readlineSync.question("What is your name? ");
console.log("Welcome " + user + " to the KBC");

var score =0;

function play(question, answer) {
    var currAns = readlineSync.question(question);
  
    if(currAns === answer){
      console.log("right!");
      score++;
    }
    else {
      console.log("wrong!");
    }
    console.log("Score: "+score);
    console.log("--------");
  }
  
// var ques1 = {
//   ques: "Where do you live? ",
//   ans: "Patna"
// }
// var ques2 = {
//   ques: "What is your hobby? ",
//   ans: "cricket",
// }
  var questions = [{
    ques: "Where do you live? ",
    ans: "Patna"
  }, {
    ques: "What is your hobby? ",
    ans: "cricket",
  }, {
    ques: "What is your profession?",
    ans: "software engineering",
  }, {
    ques: "From where did you get graduated?",
    ans: "BPPIMT",
  }, {
    ques: "Where is your college situated?",
    ans: "kolkata",
  } ];
  
  
  for(var i=0;i<questions.length;i++) {
    play(questions[i].ques, questions[i].ans);
  }
  
  
  console.log("WoW you scored "+ score);