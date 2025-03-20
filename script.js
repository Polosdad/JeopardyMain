const questions = {
    "Harry Potter": {
        100: ["What is the name of the train that takes students to Hogwarts?", "Hogwarts Express"],
        200: ["Who was the first person to be killed by the basilisk in the Chamber of Secrets?", "Colin Creevey"],
        300: ["What is the name of the spell used to summon objects?", "Accio"],
        400: ["Who killed Dumbledore?", "Severus Snape"],
        500: ["What is the name of the curse that Draco Malfoy uses on Harry Potter in the Half-Blood Prince?", "Sectumsempra"]
    },
    // other categories go here
};

const modal = document.getElementById("question-modal");
const questionText = document.getElementById("question-text");
const correctBtn = document.getElementById("correct-btn");
const incorrectBtn = document.getElementById("incorrect-btn");

document.querySelectorAll(".question").forEach(button => {
    button.addEventListener("click", function () {
        const category = this.parentElement.querySelector(".category-header").textContent;
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
