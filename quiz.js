 const quizForm = document.querySelector(".quiz-form");
 const submitAnswerBtn = document.querySelector("#submit-answer-btn");
 const outputQuiz = document.querySelector(".output");

 const correctAnswers = ["90°", "Right-Angled"];

 function calculateScore() {
     let score = 0;
     let index = 0;
     const formResults = new FormData(quizForm);

     //for (let entry of formResults.entries()){
     //    console.log(entry) //will return key-value pair, where key is name 
     //    and value is selected answer

     for (let value of formResults.values()) {
         //console.log(value);
    
         if (value === correctAnswers[index]) {
             score += 1;
             index += 1;
         } else {
             index += 1
         }

      }
     outputQuiz.innerText = "Your score is : " +  score;

 }




 submitAnswerBtn.addEventListener("click", calculateScore);