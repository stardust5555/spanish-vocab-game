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