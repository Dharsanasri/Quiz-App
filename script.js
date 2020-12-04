const quizData = [
    {
        question: 'What is the Cleanest City in TamilNadu?',
        a:'Chennai',
        b:'Coimbatore',
        c:'Trichy',
        d:'Madurai',
        correct:'b'
    },{
        question: 'What is the popular Programming Language?',
        a:'Python',
        b:'Java',
        c:'Javascript',
        d:'C++',
        correct:'a'
    },{
        question: 'PHP Stands for?',
        a:'Preprocessor Hypertext',
        b:'Programming Hypertext',
        c:'Hypertext Programming',
        d:'Hyperext Preprocessor',
        correct:'d'
    },{
        question: 'Which is Hiding Inner details in OOPS?',
        a:'Inheritance',
        b:'Polymorphism',
        c:'Abstraction',
        d:'Encapsulation',
        correct:'c'
    },{
        question: 'API stands for?',
        a:'Application Programming Interaction',
        b:'Application Programming Interface',
        c:'Application Peripheral Interface',
        d:'App programming Interaction',
        correct:'b'
    }
];
const answersEls = document.querySelectorAll('.answer');
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question')
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;
    answersEls.forEach((answerEl)=>{
       if(answerEl.checked){
            answer= answerEl.id;
       }
    });
    return answer;
}

function deselectAnswers(){
    answersEls.forEach((answerEl)=>{
        answerEl.checked = false;
     });
    }


submitBtn.addEventListener("click",()=>{
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++; 
        }
        currentQuiz++;
          if(currentQuiz < quizData.length){
          loadQuiz();
      }else{
          quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2>  <button onclick="location.reload()">Reload</button>`
      }
    }
});

