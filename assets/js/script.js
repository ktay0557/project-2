let currentQuestionsRight = 0;

// Questions that will be in the quiz, with the correct answers.
const questions = [
    {
        question: "Which of the following is the Japanese flag?",
        options: [
            { src: 'assets/images/flags/austrian_flag.png', alt: 'Austrian Flag', value: 'Austria' },
            { src: 'assets/images/flags/cameroon_flag.png', alt: 'Cameroon Flag', value: 'Cameroon' },
            { src: 'assets/images/flags/luxembourg_flag.png', alt: 'Luxembourg Flag', value: 'Luxembourg' },
            { src: 'assets/images/flags/japanese_flag.png', alt: 'Japanese Flag', value: 'Japan' },
        ],
        answer: "Japan"
    },
    {
        question: "Which of the following is the Kuwait flag?",
        options: [
            { src: 'assets/images/flags/german_flag.png', alt: 'German Flag', value: 'Germany' },
            { src: 'assets/images/flags/kuwait_flag.png', alt: 'Kuwait Flag', value: 'Kuwait' },
            { src: 'assets/images/flags/belgium_flag.png', alt: 'Belgium Flag', value: 'Belgium' },
            { src: 'assets/images/flags/norway_flag.png', alt: 'Norwegian Flag', value: 'Norway' },
        ],
        answer: "Kuwait"
    },
    {
        question: "Which of the following is the Icelandic flag?",
        options: [
            { src: 'assets/images/flags/icelandic_flag.png', alt: 'Icelandic Flag', value: 'Iceland' },
            { src: 'assets/images/flags/czech_flag.png', alt: 'Czech Flag', value: 'Czechia' },
            { src: 'assets/images/flags/french_flag.png', alt: 'French Flag', value: 'France' },
            { src: 'assets/images/flags/swedish_flag.png', alt: 'Swedish Flag', value: 'Sweden' },
        ],
        answer: "Iceland"
    },
    {
        question: "Which of the following is the Bolivian flag?",
        options: [
            { src: 'assets/images/flags/italian_flag.png', alt: 'Italian Flag', value: 'Italy' },
            { src: 'assets/images/flags/bolivian_flag.png', alt: 'Bolivian Flag', value: 'Bolivia' },
            { src: 'assets/images/flags/scottish_flag.png', alt: 'Scottish Flag', value: 'Scotland' },
            { src: 'assets/images/flags/denmark_flag.png', alt: 'Danish Flag', value: 'Denmark' },
        ],
        answer: "Bolivia"
    },
    {
        question: "Which of the following is the Irish flag?",
        options: [
            { src: 'assets/images/flags/burma_flag.png', alt: 'Burmese Flag', value: 'Burma' },
            { src: 'assets/images/flags/netherlands_flag.png', alt: 'Netherlands Flag', value: 'Netherlands' },
            { src: 'assets/images/flags/somalia_flag.png', alt: 'Somalian Flag', value: 'Somalia' },
            { src: 'assets/images/flags/irish_flag.png', alt: 'Irish Flag', value: 'Ireland' },
        ],
        answer: "Ireland"
    },
    // Add more questions if necessary.
];

/** This is the question function, which is called once the script is loaded
 * to allow the user to see the flag questions.
*/
function loadQuestion() {
    let flagQuestion = questions[currentQuestionsRight];
    let questionAns = `<p>${flagQuestion.question}</p>`;

    flagQuestion.options.forEach((option) => {
        questionAns += `<label><input type="radio" name="question" value="${option.value}"><img class="flagImage" src="${option.src}" alt="${option.alt}"></label>`;
    });

    document.getElementById('question').innerHTML = questionAns;
}

/** This is the main "loop", called when the user clicks the submit button,
 * will either continue the game or end it depending on user score.
 */
function checkAnswer() {
    let selectedAns = document.querySelector('input[name="question"]:checked');
    if (!selectedAns) {
        alert("Please select a flag before submitting!");
        return;
    }

    let userAns = selectedAns.value;
    let correctAns = questions[currentQuestionsRight].answer;

    if (userAns === correctAns) {
        currentQuestionsRight++;
        if (currentQuestionsRight < questions.length) {
            alert("Fantastic! Correct answer!");
            loadQuestion();
        } else {
            document.getElementById('right').innerHTML = "Quiz completed! Well Done!";
        }
    } else {
        alert("Incorrect answer. Try again!");
    }
}

loadQuestion();