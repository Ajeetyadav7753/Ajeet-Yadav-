 // =======================
// Quiz Questions
// =======================

const quizData = [

{
question:"Where did the little squirrel live?",
options:["0.In a cave","1.In a tree","2.In a house","3.In a river"],
answer:1
},

{
question:"What was the squirrel collecting?",
options:["0.Flower","1.Nuts","2.Stones","3.Toys"],
answer:1
},

{
question:"What was the squirrel's tail like?",
options:["0.Long and bushy","1.Short","2.Curly","3.Thin"],
answer:0
},

{
question:"Which animal is the story about?",
options:["0.Rabbit","1.Squirrel","2.Monkey","3.Cat"],
answer:1
},

{
question:"What quality does the squirrel show?",
options:["0.Laziness","1.Hard work","2.Anger","3.Fear"],
answer:1
},

{
question:"Where did Vidit go?",
options:["0.School","1.Market","2.Park","3.Zoo"],
answer:1
},

{
question:"What did Vidit carry while shopping?",
options:["0.School bag","1.Shopping bag","2.Suitcase","3.Basket"],
answer:1
},

{
question:"What did Vidit buy?",
options:["0.Fruits and vegetables","1.Books","2.Clothes","3.Toys"],
answer:0
},

{
question:"What did Vidit learn?",
options:["0.Waste money","1.Shop carefully","2.Play games","3.Sleep"],
answer:1
},

{
question:"Who helped Vidit?",
options:["0.Teacher","1.Parents","2.Friend","3.Brother"],
answer:1
},

{
question:"What is the priceless gift?",
options:["0.Toy","1.Love and kindness","2.Money","3.Watch"],
answer:1
},

{
question:"Who received the gift?",
options:["0.Stranger","1.Loved one","2.Shopkeeper","3.Driver"],
answer:1
},

{
question:"Why is the gift priceless?",
options:[
"0.Very expensive",
"1.Cannot be bought with money",
"2.Made of gold",
"3.Very big"
],
answer:1
},

{
question:"What value does the story teach?",
options:[
"0.Honesty and kindness",
"1.Laziness",
"2.Jealousy",
"Anger"
],
answer:0
},

{
question:"What is the main message?",
options:[
"0.Money is everything",
"1.Love is more valuable",
"2.Only rich people give gifts",
"3.Never share"
],
answer:1
}

];

// =======================

let currentQuestion = 0;
let answers = new Array(quizData.length).fill(null);

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const question = document.getElementById("question");
const options = document.getElementById("options");
const timer = document.getElementById("timer");
const questionCount = document.getElementById("questionCount");

document.getElementById("startBtn").addEventListener("click",startQuiz);

// =======================

let timeLeft = 300;
let interval;

// =======================

function startQuiz(){

startScreen.classList.add("hide");
quizScreen.classList.remove("hide");

loadQuestion();

interval=setInterval(()=>{

timeLeft--;

timer.innerHTML="⏳ "+timeLeft;

if(timeLeft<=0){

clearInterval(interval);

showResult();

}

},1000);

}

// =======================

function loadQuestion(){

questionCount.innerHTML=
`Question ${currentQuestion+1} / ${quizData.length}`;

question.innerHTML=
quizData[currentQuestion].question;

options.innerHTML="";

quizData[currentQuestion].options.forEach((opt,index)=>{

const div=document.createElement("div");

div.className="option";

div.innerHTML=opt;

if(answers[currentQuestion]===index){

div.classList.add("selected");

}

div.onclick=()=>selectAnswer(index);

options.appendChild(div);

});

}

// =======================

function selectAnswer(index){

answers[currentQuestion]=index;

loadQuestion();

}

// =======================
// Next Button
// =======================

document.getElementById("nextBtn").addEventListener("click", () => {

    if(currentQuestion < quizData.length - 1){

        currentQuestion++;

        loadQuestion();

    }else{

        showResult();

    }

});

// =======================
// Previous Button
// =======================

document.getElementById("prevBtn").addEventListener("click", () => {

    if(currentQuestion > 0){

        currentQuestion--;

        loadQuestion();

    }

});

// =======================
// Show Result
// =======================

function showResult(){

    clearInterval(interval);

    quizScreen.classList.add("hide");

    resultScreen.classList.remove("hide");

    let score = 0;

    answers.forEach((ans,index)=>{

        if(ans === quizData[index].answer){

            score++;

        }

    });

    let wrong = quizData.length - score;

    let percentage = ((score / quizData.length) * 100).toFixed(2);

    document.getElementById("score").innerHTML =
    `Score : ${score} / ${quizData.length}`;

    document.getElementById("correct").innerHTML =
    `Correct : ${score}`;

    document.getElementById("wrong").innerHTML =
    `Wrong : ${wrong}`;

    document.getElementById("percentage").innerHTML =
    `Percentage : ${percentage}%`;

    if(percentage >= 40){

        document.getElementById("resultText").innerHTML =
        "🎉 Pass";

    }else{

        document.getElementById("resultText").innerHTML =
        "❌ Fail";

    }

}

//////computer quiz 


document.getElementById("computerBtn").classList.remove("hide");

document.getElementById("computerBtn").addEventListener("click", () => {

    // Computer Quiz Start

   let quizData = computerQuiz;

    answers = new Array(quizData.length).fill(null);

    currentQuestion = 0;

    resultScreen.classList.add("hide");

    quizScreen.classList.remove("hide");

    loadQuestion();

    startTimer();

});

let computerQuiz = [

{
question:"MS Word 2019 is used for?",
options:["0.Drawing","1.Typing documents","2.Playing Games","3.Internet Browsing"],
answer:1
},

{
question:"Which key is used to start a new line?",
options:["0.Shift","1.Enter","2.Ctrl","3.Alt"],
answer:1
},

{
question:"Which tab is used to change the font size?",
options:["0.Home","1.Insert","2.View","3.Review"],
answer:0
},

{
question:"Which shortcut is used to save a document?",
options:["0.Ctrl + P","1.Ctrl + S","2.Ctrl + C","3.Ctrl + X"],
answer:1
},

{
question:"MS Word files are called?",
options:["0.Documents","1.Pictures","2.Videos","3.Folders"],
answer:0
},

{
question:"Which shortcut is used to copy text?",
options:["0.Ctrl + C","1.Ctrl + V","2.Ctrl + X","3.Ctrl + Z"],
answer:0
},

{
question:"Which shortcut is used to paste text?",
options:["0.Ctrl + P","1.Ctrl + V","2.Ctrl + C","3.Ctrl + S"],
answer:1
},

{
question:"Which shortcut is used to cut text?",
options:["0.Ctrl + X","1.Ctrl + C","2.Ctrl + V","3.Ctrl + Z"],
answer:0
},

{
question:"Which shortcut is used to undo?",
options:["0.Ctrl + Y","1.Ctrl + Z","2.Ctrl + P","3.Ctrl + S"],
answer:1
},

{
question:"Editing means?",
options:[
"0.Making changes in a document",
"1.Printing a document",
"2.Deleting a file",
"3.Opening a game"
],
answer:0
},

{
question:"MS Paint 3D is used for?",
options:[
"0.Drawing and 3D Designing",
"1.Typing",
"2.Browsing",
"3.Watching Videos"
],
answer:0
},

{
question:"Which tool is used for drawing?",
options:["0.Brush","1.Keyboard","2.Speaker","3.Camera"],
answer:0
},

{
question:"Which option fills color?",
options:["0.Fill Tool","1.Zoom","2.Crop","3.Print"],
answer:0
},

{
question:"Paint 3D can create?",
options:[
"0.2D and 3D Objects",
"1.Only Text",
"2.Only Music",
"3.Only Videos"
],
answer:0
},

{
question:"Which option is used to save a drawing?",
options:["0.Save","1.Exit","2.Delete","3.Refresh"],
answer:0
}

];