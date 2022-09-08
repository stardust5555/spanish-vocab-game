import './school.css';

import { Link } from "react-router-dom"
import {useState} from "react"

import {questions} from "../../libs/schoolQuestions"

export default function School(){
// || STATE OBJECTS
//Creating our state object so that we can move onto subsequent questions.
const [currentQuestion, setCurrentQuestion] = useState(0)

//Creating our state object that will display the score when the final answer button is clicked
const [scoreBoard, setScoreBoard] = useState(false)

//Creating our state object that remembers the user's score as they answer the questions
const [userScore, setUserScore] = useState(0)


// || HANDLECLICK FUNCTION
//Creating our handleClick function so that the question moves to the next question when an answer button is clicked
const handleAnswerButtonClick = function (userAnswer){
	//Logic that allows the user to move to the next question
	const nextQuestion = currentQuestion +1

	//Logic that adds one to the user's score if they click the correct answer
	if(userAnswer === true){
		setUserScore(userScore + 1);
	}

	//Display the score when the final answer button is clicked
	if (nextQuestion < questions.length){
		return setCurrentQuestion(nextQuestion)
	} else {
		setScoreBoard(true);
	}
	
}
    return(
		
        <div className="School">
			<Link className="homeButton" to="/">
				<button id="homepage"> ⬅️ Back to Map </button>
			</Link>

			<img class="schoolBackground" src={ require('./schoolBackground.jpg') } alt="school background"/>
			<div className="schoolContent">
				{/*This displays the user's score when they've finished the quiz */}
				{scoreBoard ? (
					<h1>You've scored {userScore} out of {questions.length}</h1>
				):(
				<div className = "questions">
					{/* This display which question number you're on*/}
					<h1 className ="questionNumber">Pregunta {currentQuestion +1}/{questions.length}</h1>
					{/*This displays the question text */}
					<h1 className ="questionText">{questions[currentQuestion].questionText}</h1>
					{/* Mapping through the different answers to the questions, so that they are displayed inside each button */}
					<div className ="answerButtons">
						{questions[currentQuestion].answerOptions.map(function(answerOption){
						return <button onClick = {function(){handleAnswerButtonClick(answerOption.isCorrect)}}>{answerOption.answerText}</button>})}
					</div>
				</div>
				)}

			</div>
			

        </div>
    )
}

