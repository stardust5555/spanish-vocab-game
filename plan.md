# GETTING STARTED
- Create a react app
- Set up a new repo on Github
- Remove unwanted files
- Clean up index.js
- Push these changes up to the main branch on GitHub

# PHASE 1 - Creating an MVP of a simple quiz (all code in App.js)
We want to create an MVP which is essentially just the quiz. 
To do this we're going to set up everything in index.js. 
Later we will move the data into separate files and components, but let's keep it simple for now.

APP.JS
- import React 
Inside the App function...
- create an array of questions

## STEP 1 - Rendering the first question
- Create a heading that tells you which number question it is
- Create a h2 that displays the question
- Create a map function that maps over the different answers as different buttons

## STEP 2 - Rendering subsequent questions
To do this we need to use useState. We want our code to be able to remember which question the user is on, and then when a button is clicked we want to go update the question to the next question. 
- import useState into App.js
- Create a state object which will allow us to move to subsequent questions
    - e.g. [currentQuestion, setCurrentQuestion] = setState(0)
    - Our state variable is called 'currentQuestion' - this holds the current question that the users are currently on. So instead of puttting questions[0], we put questions[currentQuestion]
    - We want our inital state to be 0, as this selected the first element in the 'questions' array i.e. the first question.

- Adding one to the current question every time the button is clicked
    - Create a handleClick function
    - Inside the state function, add one to currentQuestion state variable
        i.e. setCurrentQuestion(currentQuestion + 1)
    - Put the handleClick function inside the onClick parameter of the button.

- Change the h1 that contains the question number inside it so that it changes as the next question is clicked
    -i.e. Question 1 becomes Question {currentQuestion +1}

## STEP 3 - Displaying the user's score when they have finished the quiz
Currently, when the user reaches the end of the quiz, the screen goes blank. This is because every time we click an answer button we go to the next question in the array. However, when we click the final answer button, we tell the code to go to the next question in the array but it doesn't exist!

So we need to create an if else statement, so that when the final answer button is clicked we display something else i.e. the user's score.
In our handleClick function
    - Create an if else statement that says
    - If nextQuestion < questions.length, then we display the next question
    - else display the score (for now we will just put a console log saying thay you've finished the quiz)

Displaying the user's score
- First we want to create a state object for the score, so that it displays when the quiz is finished
    i.e. const [showScore, setShowScore] = setState(true)
    N.B. We want the initial state to be "false" because we don't want to show the score initially.
- Change the else sataement in the handleAnswerClickButton function to be setShowScore(true). This means that when the we've finished the last question (i.e. when the user has clicked the final answer button), we want setShowScore to be true i.e. we want to display the score at the end.
- Now we need to add logic to the return of the App function (i.e. the stuff that's rendered)
    The crux of it is that we want to display the scoreboard when the we've cycled through the questions. So...
    - Create a h1 that displays the score
    - Wrap it inside it's own div
    - Wrap the code that concerns the questions inside another div.
    If we want to display the score when the user's clicked the final answer button, then we want to show our "scoreBoard" h1 when showScore = true.
    - Create a ternary around the separate divs.
    - When showScore = true, then we want to display the scoreBoard
    - When showScore = false, then we want to display the questions

## STEP 4 - Saving the score
We want to be able to save the user's score as they complete the quiz and then display it in the scoreboard at the end of the quiz.

- Creating another state object. (We start by creating a state object that will save their score over the course of the quiz)
    - i.e. [score, setScore] = useState(0)
    - We want the user's score to be zero initially as they don't have any points when they start the quiz

- Adding logic to handleAnswerButtonClick. We need to add some more logic to our handleAnswerButtonClick function to say that when the user's answer is true, we want to add point to their score.
    i.e. where we render our button, in the handleClick we want to be able to map over every answer and determine if isCorrect = true. If it is true, then inside our handleClick function we want to create some logic that adds one to the score. Let's take the first bit first
    - Mapping over every answer 
        onClick = {handleAnswerButtonClick(answerOption.isCorrect)}
    - However, now that we've got smooth brackets after our function, it's going to run the function immediately. So we need to wrap it inside an empty function.
        onClick = {function(){handleAnswerButtonClick(answerOption.isCorrect)}}
    - Creating the logic in our handleClick function
        - We want the handleClick to take in a parameter 
            i.e.const handleAnswerButtonClick = function (userAnswer)
        - Now we want to say that when the userAnswer is true, add one to the user's score.
    - Display the user's score in the scoreBoard section of the return in the App function
        
        i.e. ``` <h1> You've scored {userScore} out of {questions.length} </h1>```
         

# PHASE 2 - Moving everything into separate folders
Remeber to import and export everything!

1. Moving the questions array into libs folder