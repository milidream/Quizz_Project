let j = 0; //Variable index des questions.
let s = 0; //Variable compteur du score.
var button1 = document.getElementById("answer0");
var button2 = document.getElementById("answer1");
var button3 = document.getElementById("answer2");
var button4 = document.getElementById("answer3");
var game = document.getElementById("game");

function hide(){ //Fonction permettant la transition entre le main menu et la première question.
    document.getElementById("startGame").classList.add("hide");
    game.classList.remove("hide");
};

function startGame(){ //Fonction de lancement du quizz.
    hide();
    newQuestion();
};
document.getElementById("startButton").addEventListener("click", startGame);


function check(e){ //Fonction vérifiant si la réponse sélectionnée est la bonne.
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    if(correct){ //Vérifie si l'attribut "data-correct" contient la valeur "true".
        s++; //Ajoute un point au score si c'est la bonne réponse.
        console.log(s);
    }
    console.log(correct);
};

button1.addEventListener("click", check);
button2.addEventListener("click", check);
button3.addEventListener("click", check);
button4.addEventListener("click", check);

function newQuestion(){ //Fonction affichant la question suivante.
    if(j<questions.length){
        document.getElementById("questionText").innerHTML = questions[j].question; //Change de question en incrémentant la variable "j".
        for(i=0;i<4;i++){ //Change les choix de réponse en fonction de la question.
            let choice = document.getElementById("answer" + [i]);
            choice.innerHTML = questions[j].answers[i].text;
            if(questions[j].answers[i].correct){ //Crée l'attribut "data-correct" au bouton de la bonne réponse.
                choice.dataset.correct = questions[j].answers[i].correct;
            };
        };
        j++;
    }else{
        score();
    };
};

button1.addEventListener("click", newQuestion);
button2.addEventListener("click", newQuestion);
button3.addEventListener("click", newQuestion);
button4.addEventListener("click", newQuestion);

function score(){ //Fonction affichant le score et les réponses.
    game.classList.add("hide");
    document.getElementById("scores").classList.remove("hide");
    let newScoreText = document.createTextNode(s + "/5");
    let score = document.getElementById("score");
    score.appendChild(newScoreText);
};

const questions = [ //Tableau d'objet.
    {
        question: "Quelle marque a un logo a 4 anneaux ?",
        answers: [
            {text: "Audi", correct: true},
            {text: "BMW", correct: false},
            {text: "Renault", correct: false},
            {text: "Volkswagen", correct: false}
        ]
    },
    {
        question: "Quelle est la voiture la plus rapide ?",
        answers: [
            {text: "Bugatti Chiron", correct: true},
            {text: "Fiat Multipla", correct: false},
            {text: "SSC Tuatara", correct: false},
            {text: "LaFerrari", correct: false}
        ]
    },
    {
        question: "Dans quelle voiture Paul Walker a-t-il perdu la vie ?",
        answers: [
            {text: "Porsche Carrera GT", correct: true},
            {text: "M8", correct: false},
            {text: "Clio 3", correct: false},
            {text: "Porsche GT2RS", correct: false},
        ]
    },
    {
        question: "Quelle est la voiture emblematique de James Bond ?",
        answers: [
            {text: "Aston Martin DB85", correct: true},
            {text: "Maserati MC20", correct: false},
            {text: "Aston Martin DB11", correct: false},
            {text: "Audi RS7", correct: false}
        ]
    },
    {
        question: "A quelle marque appartient 'La Voiture Noire' ?",
        answers: [
            {text: "Bugatti", correct: true},
            {text: "Koenigsegg", correct: false},
            {text: "Peugeot", correct: false},
            {text: "Infinity", correct: false}
        ]
    },
];