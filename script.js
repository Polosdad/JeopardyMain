// Questions and Answers
const questions = {
    "Science": {
        100: { question: "What is the chemical symbol for water?", answer: "H2O" },
        200: { question: "What is the atomic number of Carbon?", answer: "6" },
        300: { question: "Who developed the theory of relativity?", answer: "Albert Einstein" },
        400: { question: "What is the powerhouse of the cell?", answer: "Mitochondria" },
        500: { question: "What is the most abundant gas in the Earth's atmosphere?", answer: "Nitrogen" }
    },
    "History": {
        100: { question: "Who was the first President of the United States?", answer: "George Washington" },
        200: { question: "In which year did World War II end?", answer: "1945" },
        300: { question: "Who was the first woman to fly solo across the Atlantic?", answer: "Amelia Earhart" },
        400: { question: "What year did the Titanic sink?", answer: "1912" },
        500: { question: "Who was the famous civil rights leader in the 1960s?", answer: "Martin Luther King Jr." }
    },
    "Literature": {
        100: { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" },
        200: { question: "What is the title of the first Harry Potter book?", answer: "Harry Potter and the Sorcerer's Stone" },
        300: { question: "Who wrote 'The Great Gatsby'?", answer: "F. Scott Fitzgerald" },
        400: { question: "What is the title of the novel set in the dystopian future, '1984'?", answer: "George Orwell" },
        500: { question: "Who wrote 'Pride and Prejudice'?", answer: "Jane Austen" }
    },
    "Movies": {
        100: { question: "What movie features the character 'Darth Vader'?", answer: "Star Wars" },
        200: { question: "Who starred as the 'Titanic' leading man?", answer: "Leonardo DiCaprio" },
        300: { question: "Which movie won Best Picture at the 1994 Academy Awards?", answer: "Forrest Gump" },
        400: { question: "In what movie would you find the phrase 'I see dead people'?", answer: "The Sixth Sense" },
        500: { question: "Who directed 'Jaws'?", answer: "Steven Spielberg" }
    },
    "Music": {
        100: { question: "Who is known as the King of Pop?", answer: "Michael Jackson" },
        200: { question: "Which band was known for the song 'Hey Jude'?", answer: "The Beatles" },
        300: { question: "Who sang 'Rolling in the Deep'?", answer: "Adele" },
        400: { question: "What country is the band ABBA from?", answer: "Sweden" },
        500: { question: "Who composed the Four Seasons?", answer: "Antonio Vivaldi" }
    }
};

// Show Question when clicked
document.querySelectorAll(".category button").forEach(button => {
    button.addEventListener('click', function() {
        const category = this.parentElement.id;
        const points = this.textContent;
        const question = questions[category][points].question;
        const answer = questions[category][points].answer;
        
        // Show the question
        alert(`Question: ${question}`);
        const userAnswer = prompt(`Your Answer (Correct answer: ${answer}):`);
        
        // Check if the answer is correct
        if (userAnswer.toLowerCase() === answer.toLowerCase()) {
            alert("Correct!");
        } else {
            alert(`Incorrect! The correct answer was: ${answer}`);
        }
    });
});
