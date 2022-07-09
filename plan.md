# GETTING STARTED
- Create a react app
- Set up a new repo on Github
- Remove unwanted files
- Clean up index.js
- Push these changes up to the main branch on GitHub

# PHASE 1
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