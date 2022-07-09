import {useState} from "react"
import './App.css';

function App() {
//Creating our state object so that we can move onto subsequent questions
const [currentQuestion, setCurrentQuestion] = useState(0)

//Creating our state object that will display the score when the final answer button is clicked
const [scoreBoard, setScoreBoard] = useState(false)

//Creating our state object that remember the user's score as they answer the questions
const [userScore, setUserScore] = useState(0)

//Our array of questions
  const questions = [
		{
			questionText: 'Quiero una manzana',
			answerOptions: [
				{ answerText: '🍇', isCorrect: false },
				{ answerText: '🍌', isCorrect: false },
				{ answerText: '🍎', isCorrect: true },
				{ answerText: '🍐', isCorrect: false },
			],
		},
		{
			questionText: 'Por favour. ¡Necessito leche!',
			answerOptions: [
				{ answerText: '🍉', isCorrect: false },
				{ answerText: '🍞', isCorrect: false },
				{ answerText: '🥛', isCorrect: true },
				{ answerText: '🍖', isCorrect: false },
			],
		},
		{
			questionText: 'Hola. La leche cuesta 70 centavos y el pan 50 centavos. ¿Cuánto dinero necesito?',
			answerOptions: [
				{ answerText: 'Dos euros', isCorrect: false },
				{ answerText: 'Dos euros y viente centavos', isCorrect: false },
				{ answerText: 'Uno euro y viente centavos', isCorrect: true },
				{ answerText: 'Uno euro y diez centavos', isCorrect: false },
			],
		},
	];
	

//Creating our handleClick function so that the question moves to the next question when an answer button is clicked
const handleAnswerButtonClick = function (userAnswer){
	//Logic that allows the user to move to the next question
	const nextQuestion = currentQuestion +1

	//Logc that adds one to the user's score if they click the correct answer
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
		<div className = "scoreBoard">
			<h1> You've scored {userScore} out of {questions.length}</h1>
		</div>
		):(
		<div className = "Questions">
			{/* This display which question number you're on*/}
			<h1>Pregunta {currentQuestion +1}/{questions.length}</h1>
			{/*This displays the question */}
			<h2>{questions[currentQuestion].questionText}</h2>
			{/* Mapping through answers to the questions, so that they are displayed inside each button */}
			<h2>
				{questions[currentQuestion].answerOptions.map(function(answerOption){
				return <button onClick = {function(){handleAnswerButtonClick(answerOption.isCorrect)}}>{answerOption.answerText}</button>})}
			</h2>
		</div>
		)}
    </div>
  );
}

export default App;