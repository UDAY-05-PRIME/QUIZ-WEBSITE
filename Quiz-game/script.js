console.log("Script loaded successfully!");

const questions = [
    {
        question: "Who directed the Interstellar movie?",
        answers: [
            { text: "A. Steven Spielberg", correct: false },
            { text: "B. Quentin Tarantino", correct: false },
            { text: "C. Martin Scorsese", correct: false },
            { text: "D. Christopher Nolan", correct: true },
        ]
    },
    {
        question: "Which movie won the Academy Award for Best Picture in 1994?",
        answers: [
            { text: "A. Forrest Gump", correct: true },
            { text: "B. Pulp Fiction", correct: false },
            { text: "C. Braveheart", correct: false },
            { text: "D. The Shawshank Redemption", correct: false },
        ]
    },
    {
        question: "Which actor played the character of Jack Dawson in Titanic?",
        answers: [
            { text: "A. Brad Pitt", correct: false },
            { text: "B. Leonardo DiCaprio", correct: true },
            { text: "C. Matt Damon", correct: false },
            { text: "D. Johnny Depp", correct: false },
        ]
    },
    {
        question: "What is the highest-grossing movie of all time as of 2024?",
        answers: [
            { text: "A. Avengers: Endgame", correct: true },
            { text: "B. Star Wars: The Force Awakens", correct: false },
            { text: "C. Titanic", correct: false },
            { text: "D. Avatar", correct: false },
        ]
    },
    {
        question: "Who directed the movie 'Inception'?",
        answers: [
            { text: "A. Christopher Nolan", correct: true },
            { text: "B. James Cameron", correct: false },
            { text: "C. Steven Spielberg", correct: false },
            { text: "D. Ridley Scott", correct: false },
        ]
    },
    {
        question: "Which movie features the quote 'I'll be back'?",
        answers: [
            { text: "A. Predator", correct: false },
            { text: "B. Total Recall", correct: false },
            { text: "C. The Terminator", correct: true },
            { text: "D. Commando", correct: false },
        ]
    },
    {
        question: "Who played the character of 'The Joker' in The Dark Knight (2008)?",
        answers: [
            { text: "A. Heath Ledger", correct: true },
            { text: "B. Joaquin Phoenix", correct: false },
            { text: "C. Jack Nicholson", correct: false },
            { text: "D. Jared Leto", correct: false },
        ]
    },
    {
        question: "Which movie is based on the Marvel superhero Iron Man?",
        answers: [
            { text: "A. Spider-Man", correct: false },
            { text: "B. Iron Man", correct: true },
            { text: "C. Captain America", correct: false },
            { text: "D. Thor", correct: false },
        ]
    },
    {
        question: "Who directed the movie 'Jurassic Park'?",
        answers: [
            { text: "A. George Lucas", correct: false },
            { text: "B. James Cameron", correct: false },
            { text: "C. Steven Spielberg", correct: true },
            { text: "D. Ridley Scott", correct: false },
        ]
    },
    {
        question: "Which movie is considered the first feature-length animated film?",
        answers: [
            { text: "A. Snow White", correct: true },
            { text: "B. Pinocchio", correct: false },
            { text: "C. Fantasia", correct: false },
            { text: "D. Cinderella", correct: false },
        ]
    },
    {
        question: "Which actor played the character of Neo in The Matrix?",
        answers: [
            { text: "A. Keanu Reeves", correct: true },
            { text: "B. Tom Cruise", correct: false },
            { text: "C. Will Smith", correct: false },
            { text: "D. Hugh Jackman", correct: false },
        ]
    },
    {
        question: "Which movie features the song 'My Heart Will Go On'?",
        answers: [
            { text: "A. The Bodyguard", correct: false },
            { text: "B. Titanic", correct: true },
            { text: "C. Pretty Woman", correct: false },
            { text: "D. Ghost", correct: false },
        ]
    },
    {
        question: "Which film is known as the first movie in the Marvel Cinematic Universe?",
        answers: [
            { text: "A. The Incredible Hulk", correct: false },
            { text: "B. Captain America", correct: false },
            { text: "C. Thor", correct: false },
            { text: "D. Iron Man", correct: true },
        ]
    },
    {
        question: "Who directed the movie 'The Godfather'?",
        answers: [
            { text: "A. Brian De Palma", correct: false },
            { text: "B. Stanley Kubrick", correct: false },
            { text: "C. Francis Ford Coppola", correct: true },
            { text: "D. Martin Scorsese", correct: false },
        ]
    },
];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionElement = document.getElementById("Question");
    const answerButtons = document.querySelectorAll(".options button");
    const questionNumberElement = document.querySelector(".questionNumber");
    const nextButton = document.getElementById("nextBtn");
    const scoreElement = document.querySelector(".scoreButton");

    function startQuiz(){
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        loadQuestion();
    }

    function loadQuestion(){
        resetState();
        const currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerText = questionNo + ". " + currentQuestion.question;

        answerButtons.forEach((button, index) => {
            const answer = currentQuestion.answers[index];
            button.innerText = answer.text;
            button.dataset.correct = answer.correct;
            
                button.dataset.correct = answer.correct;
            
            button.classList.remove("correct", "incorrect");
            button.onclick = selectAnswer; 
        });
    }
    
    function resetState(){
        nextButton.style.display = "none";
        answerButtons.forEach(button =>{
            button.disabled = false;
        });
    }
    
    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
            scoreElement.innerText = "Score: 0" + score;
        }
        else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons).forEach(button =>{
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block"
    }
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            loadQuestion();
        }
    }
    nextButton.onclick = handleNextButton;
    startQuiz();