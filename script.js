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

const modal = document.getElementById("question-modal");
const questionText = document.getElementById("question-text");
const correctBtn = document.getElementById("correct-btn");
const incorrectBtn = document.getElementById("incorrect-btn");

document.querySelectorAll(".question").forEach(button => {
    button.addEventListener("click", function () {
        const category = this.dataset.category;
        const points = this.dataset.points;
        const questionData = questions[category][points];
        
        // Display the question
        questionText.textContent = questionData[0];
        modal.style.display = "flex";

        // Handle correct/incorrect answer selection
        correctBtn.onclick = () => {
            alert("Correct!");
            modal.style.display = "none";
        };
        incorrectBtn.onclick = () => {
            alert(`Incorrect! The correct answer is: ${questionData[1]}`);
            modal.style.display = "none";
        };
    });
});

// Close modal when clicking outside
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
