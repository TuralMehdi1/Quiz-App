// 'user strict';

// const quizData=[
// {
//     question:'On what date did the Ford Mustang debut to the public?',
//     a:' June 24th, 1964',
//     b:' April 27th, 1964',
//     c:' July 8th, 1964',
//     d:' April 17th, 1964',
//     correct:'d',
// },

// {
//     question:'How many of Ford s rules did Gale Halderman say the first Mustang broke?How many of Ford s rules did Gale Halderman say the first Mustang broke?',
//     a:'10',
//     b:'77',
//     c:'29',
//     d:'100+',
//     correct:'b',
// },

// {
//     question:'What color was the Mustang used in its first film debut, Goldfinger?',
//     a:'blue',
//     b:'red',
//     c:'white',
//     d:'black',
//     correct:'c',
// },

// {
//     question:'When did the first Shelby-made Mustang come out?',
//     a:'1965',
//     b:'1966',
//     c:'1967',
//     d:'1964',
//     correct:'a',
// },

// {
//     question:'What was one of the reasons for the creation of the Mustang II?',
//     a:'1st gen Mustangs were accident prone',
//     b:' Car parts shortage',
//     c:'Safety laws changed',
//     d:' Oil crisis',
//     correct:'d',
// }
// ];

// const quiz = document.querySelector('.quiz-body');
// const answerEl = document.querySelectorAll('.answer');
// const questionEl = document.getElementById('question');
// const footerEl= document.querySelector('.quiz-footer');
// const quizDetail = document.querySelector('.quiz-details');

// const aTxt = document.getElementById('a_text');
// const bTxt = document.getElementById('b_text');
// const cTxt = document.getElementById('c_text');
// const dTxt = document.getElementById('d_text');
// const btnSubmit = document.getElementById('btn');

// let currentQuiz = 0;
// let score = 0;

// loadQuiz();



// function loadQuiz(){
//     const currentQuizData=quizData[currentQuiz];

//     questionEl.innerText = currentQuizData.question;
//     aTxt.innerText = currentQuizData.a;
//     bTxt.innerText = currentQuizData.b;
//     cTxt.innerText = currentQuizData.c;
//     dTxt.innerText = currentQuizData.d;

//     quizDetail.innerHTML = `<p>${currentQuiz +1} of ${quizData.length} Questions</p>`;
// }

// function selectAnswer(){
//     answerEl.forEach((answerEl)=>{
//         answerEl.checked =false;
//     })
// } 

// function getSelected(){
//     let answer;
//     answerEl.forEach((answerEls)=>{
//         if(answerEls.checked){
//             answer= answerEls.id;
//         }
//     })
//     return answer;
// }

// btnSubmit.addEventListener('click ', ()=>{
//     const answer  = getSelected();

//     if(answer){
//         if(answer ===quizData[currentQuiz].correct){
//             score++;
//         }
//         currentQuiz++;

//         if(currentQuiz < quizData.length){
//             loadQuiz();
//         }else{
//             quiz.innerHTML=`<h2> You answered ${score}/${quizData.length} Question correctly </h2>
//             <button type="button" onclick="Location.reload()">Reload</button>;`
//         }
//     }
// })


'use strict';

const quizData = [
    {
        question: 'Ford Mustang debuted to the public on what date?',
        a: 'June 24th, 1964',
        b: 'April 27th, 1964',
        c: 'July 8th, 1964',
        d: 'April 17th, 1964',
        correct: 'd',
    },
    {
        question: 'How many of Ford\'s rules did Gale Halderman say the first Mustang broke?',
        a: '10',
        b: '77',
        c: '29',
        d: '100+',
        correct: 'b',
    },
    {
        question: 'What color was the Mustang used in its first film debut, Goldfinger?',
        a: 'blue',
        b: 'red',
        c: 'white',
        d: 'black',
        correct: 'c',
    },
    {
        question: 'When did the first Shelby-made Mustang come out?',
        a: '1965',
        b: '1966',
        c: '1967',
        d: '1964',
        correct: 'a',
    },
    {
        question: 'What was one of the reasons for the creation of the Mustang II?',
        a: '1st gen Mustangs were accident-prone',
        b: 'Car parts shortage',
        c: 'Safety laws changed',
        d: 'Oil crisis',
        correct: 'd',
    }
];

const quiz = document.querySelector('.quiz-body');
const answerEl = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const footerEl = document.querySelector('.quiz-footer');
const quizDetail = document.querySelector('.quiz-details');

const aTxt = document.getElementById('a_text');
const bTxt = document.getElementById('b_text');
const cTxt = document.getElementById('c_text');
const dTxt = document.getElementById('d_text');
const btnSubmit = document.getElementById('btn');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    aTxt.innerText = currentQuizData.a;
    bTxt.innerText = currentQuizData.b;
    cTxt.innerText = currentQuizData.c;
    dTxt.innerText = currentQuizData.d;

    quizDetail.innerHTML = `<p>${currentQuiz + 1} of ${quizData.length} Questions</p>`;
}

function deselectAnswers() {
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

function getSelected() {
    let answer;
    answerEl.forEach((answerEls) => {
        if (answerEls.checked) {
            answer = answerEls.id;
        }
    });
    return answer;
}

btnSubmit.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
            deselectAnswers();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} Questions correctly</h2>
            <button type="button" onclick="location.reload()">Reload</button>`;
        }
    }
});
