const questions = [
    {
        question: "Who directed the Interstellar movie?",
        answer: [
            { text: "A. Christopher Nolan", correct: true },
            { text: "B. Steven Spielberg", correct: false },
            { text: "C. Quentin Tarantino", correct: false },
            { text: "D. Martin Scorsese", correct: false },
        ]
    },
    {
        question: "Which movie won the Academy Award for Best Picture in 1994?",
        answer: [
            { text: "A. Pulp Fiction", correct: false },
            { text: "B. Forrest Gump", correct: true },
            { text: "C. The Shawshank Redemption", correct: false },
            { text: "D. Braveheart", correct: false },
        ]
    },
    {
        question: "Which actor played the character of Jack Dawson in Titanic?",
        answer: [
            { text: "A. Leonardo DiCaprio", correct: true },
            { text: "B. Brad Pitt", correct: false },
            { text: "C. Matt Damon", correct: false },
            { text: "D. Johnny Depp", correct: false },
        ]
    },
    {
        question: "What is the highest-grossing movie of all time as of 2024?",
        answer: [
            { text: "A. Avatar", correct: false },
            { text: "B. Avengers: Endgame", correct: true },
            { text: "C. Titanic", correct: false },
            { text: "D. Star Wars: The Force Awakens", correct: false },
        ]
    },
    {
        question: "Who directed the movie 'Inception'?",
        answer: [
            { text: "A. Christopher Nolan", correct: true },
            { text: "B. James Cameron", correct: false },
            { text: "C. Steven Spielberg", correct: false },
            { text: "D. Ridley Scott", correct: false },
        ]
    },
    {
        question: "Which movie features the quote 'I'll be back'?",
        answer: [
            { text: "A. The Terminator", correct: true },
            { text: "B. Predator", correct: false },
            { text: "C. Total Recall", correct: false },
            { text: "D. Commando", correct: false },
        ]
    },
    {
        question: "Who played the character of 'The Joker' in The Dark Knight (2008)?",
        answer: [
            { text: "A. Joaquin Phoenix", correct: false },
            { text: "B. Heath Ledger", correct: true },
            { text: "C. Jack Nicholson", correct: false },
            { text: "D. Jared Leto", correct: false },
        ]
    },
    {
        question: "Which movie is based on the Marvel superhero Iron Man?",
        answer: [
            { text: "A. Iron Man", correct: true },
            { text: "B. Spider-Man", correct: false },
            { text: "C. Captain America", correct: false },
            { text: "D. Thor", correct: false },
        ]
    },
    {
        question: "Who directed the movie 'Jurassic Park'?",
        answer: [
            { text: "A. Steven Spielberg", correct: true },
            { text: "B. James Cameron", correct: false },
            { text: "C. George Lucas", correct: false },
            { text: "D. Ridley Scott", correct: false },
        ]
    },
    {
        question: "Which movie is considered the first feature-length animated film?",
        answer: [
            { text: "A. Snow White and the Seven Dwarfs", correct: true },
            { text: "B. Pinocchio", correct: false },
            { text: "C. Fantasia", correct: false },
            { text: "D. Cinderella", correct: false },
        ]
    },
    {
        question: "Which actor played the character of Neo in The Matrix?",
        answer: [
            { text: "A. Keanu Reeves", correct: true },
            { text: "B. Tom Cruise", correct: false },
            { text: "C. Will Smith", correct: false },
            { text: "D. Hugh Jackman", correct: false },
        ]
    },
    {
        question: "Which movie features the song 'My Heart Will Go On'?",
        answer: [
            { text: "A. Titanic", correct: true },
            { text: "B. The Bodyguard", correct: false },
            { text: "C. Pretty Woman", correct: false },
            { text: "D. Ghost", correct: false },
        ]
    },
    {
        question: "Which film is known as the first movie in the Marvel Cinematic Universe?",
        answer: [
            { text: "A. Iron Man", correct: true },
            { text: "B. The Incredible Hulk", correct: false },
            { text: "C. Captain America: The First Avenger", correct: false },
            { text: "D. Thor", correct: false },
        ]
    },
    {
        question: "Who directed the movie 'The Godfather'?",
        answer: [
            { text: "A. Francis Ford Coppola", correct: true },
            { text: "B. Martin Scorsese", correct: false },
            { text: "C. Brian De Palma", correct: false },
            { text: "D. Stanley Kubrick", correct: false },
        ]
    },
    {
        question: "Which movie won the Academy Award for Best Picture in 2023?",
        answer: [
            { text: "A. Everything Everywhere All At Once", correct: true },
            { text: "B. Top Gun: Maverick", correct: false },
            { text: "C. The Banshees of Inisherin", correct: false },
            { text: "D. Avatar: The Way of Water", correct: false },
        ]
    }
];
    const questionElement = document.getElementById("question");
    const answerButtonAB = document.getElementsByClassName("firstTwoOption");
    const nextButton = document.getElementById("nextBtn");