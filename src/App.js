import {useState} from "react"
import './App.css';

import {questions} from "./libs/questions"
import ScoreBoard from "./components/ScoreBoard";
import SpeechBubble from "./components/SpeechBubble";

function App() {
// || STATE OBJECTS
//Creating our state object so that we can move onto subsequent questions
const [currentQuestion, setCurrentQuestion] = useState(0)

//Creating our state object that will display the score when the final answer button is clicked
const [scoreBoard, setScoreBoard] = useState(false)

//Creating our state object that remember the user's score as they answer the questions
const [userScore, setUserScore] = useState(0)


// || HANDLECLICK FUNCTION
//Creating our handleClick function so that the question moves to the next question when an answer button is clicked
const handleAnswerButtonClick = function (userAnswer){
	//Logic that allows the user to move to the next question
	const nextQuestion = currentQuestion +1

	//Logic that adds one to the user's score if they click the correct answer
	if(userAnswer === true){
		console.log(userScore)
		setUserScore(userScore + 1);
		console.log(userScore)
	}

	//Display the score when the final answer button is clicked
	if (nextQuestion < questions.length){
		return setCurrentQuestion(nextQuestion)
	} else {
		setScoreBoard(true);
	}
	
}

  return (
    <div className="App">
		{/*This displays the user's score when they've finished the quiz */}
		{scoreBoard ? (
			<ScoreBoard userScore = {userScore} numberOfQuestions={questions.length}/>
		):(
		<div className = "questions">
			{/* This display which question number you're on*/}
			<h1 className ="questionNumber">Pregunta {currentQuestion +1}/{questions.length}</h1>
			{/*This displays the question text */}
			<SpeechBubble  speechBubbleText={questions[currentQuestion].questionText}/>
			{/* Mapping through answers to the questions, so that they are displayed inside each button */}
			<h2 className ="answerButtons">
				{questions[currentQuestion].answerOptions.map(function(answerOption){
				return <button onClick = {function(){handleAnswerButtonClick(answerOption.isCorrect)}}>{answerOption.answerText}</button>})}
			</h2>
		</div>
		)}
    </div>
  );
}

export default App;