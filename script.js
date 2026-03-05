const quiz = [
{
question:"HTML stands for?",
answers:["Hyper Text Markup Language","Home Tool Markup","Hyperlinks","None"],
correct:0
},
{
question:"CSS is used for?",
answers:["Structure","Styling","Database","Server"],
correct:1
}
];

let index = 0;
let score = 0;

function loadQuestion(){

document.getElementById("question").innerText = quiz[index].question;

for(let i=0;i<4;i++){
document.getElementById("a"+i).innerText = quiz[index].answers[i];
}

}

function checkAnswer(ans){

if(ans === quiz[index].correct){
score++;
document.getElementById("result").innerText="Correct";
}else{
document.getElementById("result").innerText="Wrong";
}

}

function nextQuestion(){

index++;

if(index<quiz.length){
loadQuestion();
}else{
document.getElementById("question").innerText="Quiz Finished";
document.getElementById("result").innerText="Score: "+score;
}

}

loadQuestion();
