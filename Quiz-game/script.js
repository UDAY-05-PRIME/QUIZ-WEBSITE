console.log("Script loaded successfully!");

const questions = [
    {
        question: "Who directed the Interstellar movie?",
        answers: [
            { text: "A. Christopher Nolan", correct: true },
            { text: "B. Steven Spielberg", correct: false },
            { text: "C. Quentin Tarantino", correct: false },
            { text: "D. Martin Scorsese", correct: false },
        ]
    },
    {
        question: "Which movie won the Academy Award for Best Picture in 1994?",
        answers: [
            { text: "A. Pulp Fiction", correct: false },
            { text: "B. Forrest Gump", correct: true },
            { text: "C. The Shawshank Redemption", correct: false },
            { text: "D. Braveheart", correct: false },
        ]
    },
    {
        question: "Which actor played the character of Jack Dawson in Titanic?",
        answers: [
            { text: "A. Leonardo DiCaprio", correct: true },
            { text: "B. Brad Pitt", correct: false },
            { text: "C. Matt Damon", correct: false },
            { text: "D. Johnny Depp", correct: false },
        ]
    },
    {
        question: "What is the highest-grossing movie of all time as of 2024?",
        answers: [
            { text: "A. Avatar", correct: false },
            { text: "B. Avengers: Endgame", correct: true },
            { text: "C. Titanic", correct: false },
            { text: "D. Star Wars: The Force Awakens", correct: false },
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
            { text: "A. The Terminator", correct: true },
            { text: "B. Predator", correct: false },
            { text: "C. Total Recall", correct: false },
            { text: "D. Commando", correct: false },
        ]
    },
    {
        question: "Who played the character of 'The Joker' in The Dark Knight (2008)?",
        answers: [
            { text: "A. Joaquin Phoenix", correct: false },
            { text: "B. Heath Ledger", correct: true },
            { text: "C. Jack Nicholson", correct: false },
            { text: "D. Jared Leto", correct: false },
        ]
    },
    {
        question: "Which movie is based on the Marvel superhero Iron Man?",
        answers: [
            { text: "A. Iron Man", correct: true },
            { text: "B. Spider-Man", correct: false },
            { text: "C. Captain America", correct: false },
            { text: "D. Thor", correct: false },
        ]
    },
    {
        question: "Who directed the movie 'Jurassic Park'?",
        answers: [
            { text: "A. Steven Spielberg", correct: true },
            { text: "B. James Cameron", correct: false },
            { text: "C. George Lucas", correct: false },
            { text: "D. Ridley Scott", correct: false },
        ]
    },
    {
        question: "Which movie is considered the first feature-length animated film?",
        answers: [
            { text: "A. Snow White and the Seven Dwarfs", correct: true },
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
            { text: "A. Titanic", correct: true },
            { text: "B. The Bodyguard", correct: false },
            { text: "C. Pretty Woman", correct: false },
            { text: "D. Ghost", correct: false },
        ]
    },
    {
        question: "Which film is known as the first movie in the Marvel Cinematic Universe?",
        answers: [
            { text: "A. Iron Man", correct: true },
            { text: "B. The Incredible Hulk", correct: false },
            { text: "C. Captain America: The First Avenger", correct: false },
            { text: "D. Thor", correct: false },
        ]
    },
    {
        question: "Who directed the movie 'The Godfather'?",
        answers: [
            { text: "A. Francis Ford Coppola", correct: true },
            { text: "B. Martin Scorsese", correct: false },
            { text: "C. Brian De Palma", correct: false },
            { text: "D. Stanley Kubrick", correct: false },
        ]
    },
    {
        question: "Which movie won the Academy Award for Best Picture in 2023?",
        answers: [
            { text: "A. Everything Everywhere All At Once", correct: true },
            { text: "B. Top Gun: Maverick", correct: false },
            { text: "C. The Banshees of Inisherin", correct: false },
            { text: "D. Avatar: The Way of Water", correct: false },
        ]
    }
];
    let currentQuestionindex = 0;
    let score = 0;

    const questionElement = document.getElementById("Question");
    const answerButtons = document.querySelectorAll(".options button");
    const questionNumberElement = document.querySelector(".questionNumber");
    const nextButton = document.getElementById("nextBtn");

    function startQuiz(){
        currentQuestionindex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        loadQuestion();

    }

    function loadQuestion(){
        resetState();
        const currentQuestion = questions[currentQuestionindex];
        let questionNo = currentQuestionindex + 1;
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
    }
    
    function selectAnswer(e){
        console.log("function run");
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            console.log("right");
        }
        else{
            selectedBtn.classList.add("incorrect");
            console.log("wrong");
        }
        console.log("function run 2");
    }
    startQuiz();