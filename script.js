 // =======================
// Quiz Questions
// =======================

 const questions = [

{
question: "Who wrote the poem 'Another Chance'?",
options: ["Helen Steiner Rice", "Rabindranath Tagore", "Ruskin Bond", "Sarojini Naidu"],
answer: 0
},
{
question: "What does the poem 'Another Chance' teach us?",
options: ["Never try again", "Learn from mistakes", "Be lazy", "Give up"],
answer: 1
},
{
question: "Who was the Kabuliwallah?",
options: ["A doctor", "A fruit seller from Kabul", "A teacher", "A soldier"],
answer: 1
},
{
question: "What was the name of the little girl in 'The Kabuliwallah'?",
options: ["Mini", "Rani", "Sita", "Gita"],
answer: 0
},
{
question: "Who wrote 'The Kabuliwallah'?",
options: ["Premchand", "Rabindranath Tagore", "Ruskin Bond", "R.K. Narayan"],
answer: 1
},
{
question: "What did the Kabuliwallah sell?",
options: ["Books", "Dry fruits", "Flowers", "Toys"],
answer: 1
},
{
question: "What is the main message of 'The Right Choice'?",
options: ["Make wise decisions", "Spend more money", "Fight with others", "Ignore advice"],
answer: 0
},
{
question: "A right choice leads to?",
options: ["Failure", "Success", "Confusion", "Loss"],
answer: 1
},
{
question: "Who visited Cambridge?",
options: ["The narrator", "A king", "A teacher", "A soldier"],
answer: 0
},
{
question: "Which famous scientist is mentioned in 'A Visit to Cambridge'?",
options: ["C.V. Raman", "Stephen Hawking", "Einstein", "Newton"],
answer: 1
},
{
question: "Stephen Hawking was famous for?",
options: ["Painting", "Physics", "Music", "Cricket"],
answer: 1
},
{
question: "What does 'Play Things' encourage children to do?",
options: ["Play happily", "Fight", "Sleep", "Study all day"],
answer: 0
},
{
question: "What is the theme of 'Play Things'?",
options: ["Joy of childhood", "War", "Travel", "Business"],
answer: 0
},
{
question: "Awesome Assam is famous for?",
options: ["Tea gardens", "Deserts", "Snow", "Coal mines"],
answer: 0
},
{
question: "Which river flows through Assam?",
options: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
answer: 2
},
{
question: "Kaziranga National Park is famous for?",
options: ["One-horned rhinoceros", "Lions", "Tigers only", "Camels"],
answer: 0
},
{
question: "Veer Abdul Hamid was a?",
options: ["Teacher", "Soldier", "Doctor", "Farmer"],
answer: 1
},
{
question: "Veer Abdul Hamid received which award?",
options: ["Padma Shri", "Param Vir Chakra", "Bharat Ratna", "Ashok Chakra"],
answer: 1
},
{
question: "Veer Abdul Hamid fought in which war?",
options: ["1965 Indo-Pak War", "Kargil War", "1971 War", "World War II"],
answer: 0
},
{
question: "What quality did Veer Abdul Hamid show?",
options: ["Bravery", "Fear", "Laziness", "Selfishness"],
answer: 0
},
{
question: "Another Chance tells us to?",
options: ["Try again", "Quit", "Cry", "Hide"],
answer: 0
},
{
question: "Mini became friends with?",
options: ["Kabuliwallah", "Teacher", "Doctor", "Farmer"],
answer: 0
},
{
question: "The Kabuliwallah came from?",
options: ["Delhi", "Kabul", "Mumbai", "Chennai"],
answer: 1
},
{
question: "Stephen Hawking inspired people through?",
options: ["His courage", "His dance", "His acting", "His singing"],
answer: 0
},
{
question: "Cambridge is located in?",
options: ["India", "England", "USA", "Canada"],
answer: 1
},
{
question: "Play Things is a?",
options: ["Poem", "Story", "Play", "Essay"],
answer: 0
},
{
question: "Assam is located in?",
options: ["North India", "North-East India", "South India", "West India"],
answer: 1
},
{
question: "Assam is famous for?",
options: ["Tea", "Gold", "Oil only", "Cotton only"],
answer: 0
},
{
question: "Veer Abdul Hamid destroyed enemy?",
options: ["Tanks", "Ships", "Planes", "Boats"],
answer: 0
},
{
question: "The poem Another Chance inspires?",
options: ["Hope", "Fear", "Anger", "Pride"],
answer: 0
},
{
question: "Mini was a?",
options: ["Little girl", "Teacher", "Doctor", "Mother"],
answer: 0
},
{
question: "Kabuliwallah loved Mini like his?",
options: ["Friend", "Daughter", "Mother", "Teacher"],
answer: 1
},
{
question: "Stephen Hawking used?",
options: ["Wheelchair", "Bicycle", "Car", "Horse"],
answer: 0
},
{
question: "Play Things celebrates?",
options: ["Childhood", "Old age", "War", "Business"],
answer: 0
},
{
question: "Which animal is the pride of Kaziranga?",
options: ["One-horned Rhino", "Elephant", "Lion", "Tiger"],
answer: 0
},
{
question: "Abdul Hamid belonged to?",
options: ["Indian Army", "Air Force", "Navy", "Police"],
answer: 0
},
{
question: "The Right Choice teaches us?",
options: ["Think before acting", "Be careless", "Waste time", "Fight"],
answer: 0
},
{
question: "The main idea of Awesome Assam is?",
options: ["Beauty and culture", "Pollution", "War", "Business"],
answer: 0
},
{
question: "Veer Abdul Hamid is remembered for?",
options: ["Bravery", "Singing", "Painting", "Dancing"],
answer: 0
},
{
question: "The overall message of these lessons is?",
options: ["Courage, kindness and wisdom", "Hatred", "Fear", "Greed"],
answer: 0
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

    if(percentage >= 40){

        document.getElementById("resultText").innerHTML =
        "🎉 Pass";

    }else{

        document.getElementById("resultText").innerHTML =
        "❌ Fail";

    }

}
