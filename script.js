 // =======================
// Quiz Questions
// =======================

  const questions = [

{
question: "परिमेय संख्या किस रूप में लिखी जाती है?",
options: ["p/q (q ≠ 0)", "√2", "π", "√5"],
answer: 0
},
{
question: "इनमें से कौन-सी परिमेय संख्या है?",
options: ["√3", "5/8", "π", "√7"],
answer: 1
},
{
question: "परिमेय संख्या में हर (Denominator) क्या नहीं हो सकता?",
options: ["1", "5", "0", "10"],
answer: 2
},
{
question: "3/4 + 1/4 = ?",
options: ["1", "2", "3/8", "1/2"],
answer: 0
},
{
question: "5/6 - 1/6 = ?",
options: ["2/3", "1/2", "3/4", "5/12"],
answer: 0
},
{
question: "x² + 3x + 2 किस प्रकार का बहुपद है?",
options: ["रैखिक", "द्विघात", "त्रिघात", "स्थिर"],
answer: 1
},
{
question: "x³ + 2x² + 1 की घात क्या है?",
options: ["1", "2", "3", "4"],
answer: 2
},
{
question: "स्थिर बहुपद का उदाहरण कौन-सा है?",
options: ["x+1", "5", "x²", "x³"],
answer: 1
},
{
question: "x + 2 में कुल कितने पद हैं?",
options: ["1", "2", "3", "4"],
answer: 1
},
{
question: "x² - 9 का गुणनखंड क्या है?",
options: ["(x+3)(x-3)", "(x+9)(x-1)", "(x+1)(x-9)", "इनमें से कोई नहीं"],
answer: 0
},
{
question: "27 का घनमूल क्या है?",
options: ["2", "3", "4", "5"],
answer: 1
},
{
question: "64 का घनमूल क्या है?",
options: ["2", "3", "4", "8"],
answer: 2
},
{
question: "125 का घनमूल क्या है?",
options: ["4", "5", "6", "7"],
answer: 1
},
{
question: "216 का घनमूल क्या है?",
options: ["5", "6", "7", "8"],
answer: 1
},
{
question: "1000 का घनमूल क्या है?",
options: ["8", "9", "10", "12"],
answer: 2
},
{
question: "(a + b)² = ?",
options: ["a²+b²", "a²+2ab+b²", "a²-b²", "a²-2ab+b²"],
answer: 1
},
{
question: "(a - b)² = ?",
options: ["a²-2ab+b²", "a²+2ab+b²", "a²-b²", "a²+b²"],
answer: 0
},
{
question: "a² - b² = ?",
options: ["(a+b)²", "(a-b)²", "(a+b)(a-b)", "a²+b²"],
answer: 2
},
{
question: "(a+b)(a-b) बराबर है?",
options: ["a²+b²", "a²-b²", "a²+2ab+b²", "a²-2ab+b²"],
answer: 1
},
{
question: "(x + 5)² = ?",
options: ["x²+10x+25", "x²+25", "x²-10x+25", "x²+5"],
answer: 0
},
{
question: "इनमें से कौन-सी संख्या परिमेय है?",
options: ["7/9", "√11", "π", "√13"],
answer: 0
},
{
question: "परिमेय संख्या 8/12 का सरल रूप क्या है?",
options: ["2/3", "3/2", "4/5", "5/6"],
answer: 0
},
{
question: "2x + 5 किस प्रकार का बहुपद है?",
options: ["रैखिक", "द्विघात", "त्रिघात", "स्थिर"],
answer: 0
},
{
question: "x² + 5x + 6 का गुणनखंड क्या है?",
options: ["(x+2)(x+3)", "(x+1)(x+6)", "(x+5)(x+6)", "(x-2)(x-3)"],
answer: 0
},
{
question: "729 का घनमूल क्या है?",
options: ["7", "8", "9", "10"],
answer: 2
},
{
question: "512 का घनमूल क्या है?",
options: ["6", "7", "8", "9"],
answer: 2
},
{
question: "(a+b)² में मध्य पद क्या होता है?",
options: ["ab", "2ab", "a²", "b²"],
answer: 1
},
{
question: "(x-4)² का सही विस्तार क्या है?",
options: ["x²-8x+16", "x²+8x+16", "x²-16", "x²+16"],
answer: 0
},
{
question: "यदि a=b हो, तो a²-b² का मान क्या होगा?",
options: ["1", "0", "a²", "b²"],
answer: 1
},
{
question: "सर्वसमिका किसके लिए सत्य होती है?",
options: ["केवल एक मान के लिए", "केवल दो मानों के लिए", "सभी मानों के लिए", "किसी भी मान के लिए नहीं"],
answer: 2
}

];

// =======================

let currentQuestion = 0;
let answers = new Array(questions.length).fill(null);

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const question = document.getElementById("question");
const options = document.getElementById("options");
const timer = document.getElementById("timer");
const questionCount = document.getElementById("questionCount");

document.getElementById("startBtn").addEventListener("click",startQuiz);

// =======================

let timeLeft = 600;
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
`Question ${currentQuestion+1} / ${questions.length}`;

question.innerHTML=
questions[currentQuestion].question;

options.innerHTML="";

questions[currentQuestion].options.forEach((opt,index)=>{

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

    if(currentQuestion < questions.length - 1){

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

        if(ans === questions[index].answer){

            score++;

        }

    });

    let wrong = questions.length - score;

    let percentage = ((score / questions.length) * 100).toFixed(2);

    document.getElementById("score").innerHTML =
    `Score : ${score} / ${questions.length}`;

    document.getElementById("correct").innerHTML =
    `Correct : ${score}`;

    document.getElementById("wrong").innerHTML =
    `Wrong : ${wrong}`;

    document.getElementById("percentage").innerHTML =
    `Percentage : ${percentage}%`;

    if(percentage >= 30){

        document.getElementById("resultText").innerHTML =
        "🎉 Pass";

    }else{

        document.getElementById("resultText").innerHTML =
        "❌ Fail";

    }

}
