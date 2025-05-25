const questions = [
    {
        question: "Do you eat vegetables every day?",
        optionA: "Yes, I eat them at every meal.", // 3 pts
        optionB: "I eat them almost every day.",                // 2 pts
        optionC: "I eat them sometimes.",                        // 1 pt
        optionD: "No, I don't eat vegetables.",                            // 0 pts
        points: { optionA: 3, optionB: 2, optionC: 1, optionD: 0 }
    },
    {
        question: "How often do you exercise?",
        optionA: "I exercise every day.",            // 3 pts
        optionB: "3-4 times a week.",                 // 2 pts
        optionC: "Once a week.",                       // 1 pt
        optionD: "I don’t exercise at all.",          // 0 pts
        points: { optionA: 3, optionB: 2, optionC: 1, optionD: 0 }
    },
    {
        question: "How many hours do you sleep each night?",
        optionA: "I sleep 7 to 8 hours.",          // 3 pts
        optionB: "I sleep 6 to 7 hours.",          // 2 pts
        optionC: "I sleep 4 to 6 hours.",          // 1 pt
        optionD: "I sleep less than 4 hours.",  // 0 pts
        points: { optionA: 3, optionB: 2, optionC: 1, optionD: 0 }
    },
    {
        question: "What do you drink more often?",
        optionA: "I drink water all the time.",    // 3 pts
        optionB: "I drink tea every day.",         // 2 pts
        optionC: "I drink coffee every day.",      // 1 pt
        optionD: "I drink soda most of the time.",           // 0 pts
        points: { optionA: 3, optionB: 2, optionC: 1, optionD: 0 }
    },
    {
        question: "Do you take breaks during the day?",
        optionA: "Yes, I take regular breaks.",       // 3 pts
        optionB: "I take breaks when I feel like it.",// 2 pts
        optionC: "Only when I’m tired.",              // 1 pt
        optionD: "I never take breaks.",              // 0 pts
        points: { optionA: 3, optionB: 2, optionC: 1, optionD: 0 }
    },
    {
        question: "How often do you eat fast food?",
        optionA: "I never eat fast food.",                  // 3 pts
        optionB: "I eat fast food once or twice a month.",  // 2 pts
        optionC: "I eat fast food once a week.",            // 1 pt
        optionD: "I eat fast food almost every day.",       // 0 pts
        points: { optionA: 3, optionB: 2, optionC: 1, optionD: 0 }
    },
    {
        question: "Do you eat sugary snacks or drinks?",
        optionA: "I avoid them completely.",    // 3 pts
        optionB: "I eat them occasionally.",    // 2 pts
        optionC: "I eat them sometimes.",                  // 1 pt
        optionD: "I eat them every day.",                  // 0 pts
        points: { optionA: 3, optionB: 2, optionC: 1, optionD: 0 }
    },
    {
        question: "How do you manage stress?",
        optionA: "I use meditation or breathing.",    // 3 pts
        optionB: "I manage okay.",              // 2 pts
        optionC: "I try to relax.",             // 1 pt
        optionD: "I feel stressed all the time.", // 0 pts
        points: { optionA: 3, optionB: 2, optionC: 1, optionD: 0 }
    },
    {
        question: "Do you smoke or use tobacco?",
        optionA: "I don’t smoke.",                  // 3 pts
        optionB: "I smoke sometimes.",                  // 2 pts
        optionC: "I smoke regularly.",               // 1 pt
        optionD: "I smoke all the time.",                  // 0 pts
        points: { optionA: 3, optionB: 2, optionC: 1, optionD: 0 }
    },
    {
        question: "Do you go for medical check-ups?",
        optionA: "I go to the doctor every month.",          // 3 pts
        optionB: "I go to the doctor every 1-3 years.",     // 2 pts
        optionC: "I go to the doctor only when I am sick.", // 1 pt
        optionD: "I never go to the doctor.",                // 0 pts
        points: { optionA: 3, optionB: 2, optionC: 1, optionD: 0 }
    }
];


let indexNumber = 0;
let questionNumber = 1;
let totalScore = 0;

function NextQuestion(index) {
    const currentQuestion = questions[index];
    document.getElementById("question-number").innerText = questionNumber;
    document.getElementById("player-score").innerText = totalScore;
    document.getElementById("display-question").innerText = currentQuestion.question;
    document.getElementById("option-one-label").innerText = currentQuestion.optionA;
    document.getElementById("option-two-label").innerText = currentQuestion.optionB;
    document.getElementById("option-three-label").innerText = currentQuestion.optionC;
    document.getElementById("option-four-label").innerText = currentQuestion.optionD;
}

function handleNextQuestion() {
    const options = document.getElementsByName("option");
    let selectedValue = null;

    for (let option of options) {
        if (option.checked) {
            selectedValue = option.value;
            break;
        }
    }

    if (!selectedValue) {
        // Mostrar modal de opción no seleccionada
        document.getElementById('option-modal').style.display = "flex";
        return;
    }

    // Sumar puntos
    totalScore += questions[indexNumber].points[selectedValue];

    unCheckRadioButtons();

    indexNumber++;
    questionNumber++;

    if (indexNumber < questions.length) {
        NextQuestion(indexNumber);
    } else {
        handleEndGame();
    }
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    options.forEach(option => option.checked = false);
}

function handleEndGame() {
    let remark = '';
    let remarkColor = '';

    if (totalScore >= 21) {
        remark = "Nice! You're rockin' it 💪";
        remarkColor = "green";
    } else if (totalScore >= 11) {
        remark = "Not bad, but can do better 😉";
        remarkColor = "orange";
    } else {
        remark = "Uh-oh... gotta step it up! 🚀";
        remarkColor = "red";
    }

    document.getElementById('remarks').innerText = remark;
    document.getElementById('remarks').style.color = remarkColor;
    document.getElementById('final-score-line').innerText = `Your Score: ${totalScore} / 30`;
    document.getElementById('score-modal').style.display = "flex";
}

function closeScoreModal() {
    indexNumber = 0;
    questionNumber = 1;
    totalScore = 0;
    NextQuestion(indexNumber);
    document.getElementById('score-modal').style.display = "none";
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none";
}

// Inicializa primera pregunta
NextQuestion(indexNumber);

// Código para el menú hamburguesa 
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
