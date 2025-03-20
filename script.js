const questions = {
    "Harry Potter": {
        100: ["What is the name of the train that takes students to Hogwarts?", "Hogwarts Express"],
        200: ["Who was the first person to be killed by the basilisk in the Chamber of Secrets?", "Colin Creevey"],
        300: ["What is the name of the spell used to summon objects?", "Accio"],
        400: ["Who killed Dumbledore?", "Severus Snape"],
        500: ["What is the name of the curse that Draco Malfoy uses on Harry Potter in the Half-Blood Prince?", "Sectumsempra"]
    },
    "Star Wars": {
        100: ["What is the name of Han Solo’s ship?", "Millennium Falcon"],
        200: ["Who trained Luke Skywalker in the ways of the Jedi?", "Obi-Wan Kenobi"],
        300: ["What was the name of the planet destroyed by the first Death Star?", "Alderaan"],
        400: ["Who is the leader of the Rebel Alliance?", "Mon Mothma"],
        500: ["What is the name of the clone trooper who leads the 501st Legion?", "Captain Rex"]
    },
    "Science": {
        100: ["What is the chemical formula for carbon dioxide?", "CO₂"],
        200: ["What is the most abundant gas in Earth's atmosphere?", "Nitrogen"],
        300: ["Which planet is known as the 'Red Planet'?", "Mars"],
        400: ["What force pulls objects toward the Earth?", "Gravity"],
        500: ["Who developed the laws of motion and universal gravitation?", "Isaac Newton"]
    },
    "Law": {
        100: ["Which branch of government is responsible for interpreting laws?", "Judicial Branch"],
        200: ["What is the legal term for stealing someone's personal property?", "Larceny"],
        300: ["What is the minimum age to serve as a U.S. President?", "35 years old"],
        400: ["What is the term for an agreement made between two parties that is legally binding?", "Contract"],
        500: ["What landmark Supreme Court case established the principle of 'separate but equal'?", "Plessy v. Ferguson"]
    },
    "Weather": {
        100: ["What phenomenon causes thunder and lightning?", "Thunderstorms"],
        200: ["What is the name of the tool used to measure air pressure?", "Barometer"],
        300: ["What is the term for a large, rotating storm system with high winds?", "Cyclone"],
        400: ["Which scale is used to measure the intensity of hurricanes?", "Saffir-Simpson scale"],
        500: ["What is the name for a weather phenomenon characterized by a sudden increase in temperature and wind?", "Heatwave"]
    }
};

// Game variables
const categories = Object.keys(questions);
let teamScores = {};

// Generate the game board
function generateBoard() {
    const boardContainer = document.getElementById("board-container");
    
    categories.forEach(category => {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");
        categoryDiv.innerText = category;
        boardContainer.appendChild(categoryDiv);

        Object.keys(questions[category]).forEach(points => {
            const questionButton = document.createElement("button");
            questionButton.classList.add("question");
            questionButton.innerText = points;
            questionButton.onclick = () => openQuestionModal(category, points);
            boardContainer.appendChild(questionButton);
        });
    });
}

// Open the question modal
function openQuestionModal(category, points) {
    const [question, correctAnswer] = questions[category][points];
    const modal = document.getElementById("modal");
    const questionText = document.getElementById("question-text");
    questionText.innerText = question;

    const correctBtn = document.getElementById("correct-btn");
    const incorrectBtn = document.getElementById("incorrect-btn");

    modal.style.display = "flex";

    correctBtn.onclick = function() {
        assignPoints(points);
        modal.style.display = "none";
    };

    incorrectBtn.onclick = function() {
        assignPoints(0);  // No points for incorrect
        modal.style.display = "none";
    };
}

// Assign points to a team
function assignPoints(points) {
    const team = prompt("Enter the team that answered correctly:");
    if (!teamScores[team]) {
        teamScores[team] = 0;
    }

    teamScores[team] += points;
    updateScoreboard();
}

// Update the scoreboard
function updateScoreboard() {
    const scoreList = document.getElementById("score-list");
    scoreList.innerHTML = ""; // Clear current scoreboard

    for (const team in teamScores) {
        const scoreItem = document.createElement("li");
        scoreItem.innerText = `${team}: ${teamScores[team]}`;
        scoreList.appendChild(scoreItem);
    }
}

// Initialize the game
generateBoard();
