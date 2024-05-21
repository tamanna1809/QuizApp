let questions = [
    {
        question: 'Which HTML tag is used to define an inline style?',
        choice1: '<script>',
        choice2: '<css>',
        choice3: '<style>',
        choice4: '<span>',
        answer: 3,
    },
    {
        question: 'Which property is used to change the text color in CSS?',
        choice1: 'text-color',
        choice2: 'font-color',
        choice3: 'text-style',
        choice4: 'color',
        answer: 4,
    },
    {
        question: 'Which of the following is the correct way to comment in HTML?',
        choice1: '// Comment',
        choice2: '<!-- Comment -->',
        choice3: '/* Comment */',
        choice4: '<! Comment>',
        answer: 2,
    },
];
let currentQuestionIndex = 0;
let score = 0;
let currentChoiceNumber = 0;

document.addEventListener('DOMContentLoaded', () => {
    const choicesElements = Array.from(document.getElementsByClassName('choice'));
    choicesElements.forEach((choice, index) => {
        choice.addEventListener('click', () => {
            currentChoiceNumber = index + 1;
            checkAnswer();
        });
    });
    showQuestion();
});

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        localStorage.setItem('finalScore', score);
        return window.location.assign('endpage.html');
    }

    const questionElement = document.getElementById('question');
    const choicesElements = Array.from(document.getElementsByClassName('choice'));

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    choicesElements.forEach((choice, index) => {
        choice.innerText = currentQuestion['choice' + (index + 1)];
    });

    const progressText = document.getElementById('progressText');
    progressText.innerText = `Question ${currentQuestionIndex + 1}/${questions.length}`;

    const scoreText = document.getElementById('score');
    scoreText.innerText = `Score: ${score}`;

    const progressBarFull = document.getElementById('progressBarFull');
    progressBarFull.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
}

function checkAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const choicesElements = Array.from(document.getElementsByClassName('choice'));

    const selectedChoice = choicesElements[currentChoiceNumber - 1];

    const classToApply = currentChoiceNumber === currentQuestion.answer ? 'correct' : 'incorrect';

    if (classToApply === 'correct') {
        score+=10;
    }

    selectedChoice.classList.add(classToApply);

    setTimeout(() => {
        selectedChoice.classList.remove(classToApply);
        currentQuestionIndex++;
        showQuestion();
    }, 1500);
}