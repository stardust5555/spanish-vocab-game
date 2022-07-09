import {useState} from "react"
import './App.css';

function App() {
//Creating our state object so that we can move onto subsequent questions
const [currentQuestion, setCurrentQuestion] = useState(0)

//Creating our state object that will display the score when the final answer button is clicked
const [showScore, setShowScore] = useState(false)


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
				{ answerText: '🍞', isCorrect: true },
				{ answerText: '🥛', isCorrect: false },
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
const handleAnswerButtonClick = function (){
	const nextQuestion = currentQuestion +1

	//Display the score when the final answer button is clicked
	if (nextQuestion < questions.length){
		return setCurrentQuestion(nextQuestion)
	} else {
		setShowScore(true);
	}
	
}

  return (
    <div className="App">

		{/*This displays the user's score when they've finished the quiz */}
		{showScore ? (
		<div className = "scoreBoard">
			<h1> You've scored ? out of {questions.length}</h1>
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
				return <button onClick = {handleAnswerButtonClick}>{answerOption.answerText}</button>})}
			</h2>
		</div>
		)}
    </div>
  );
}

export default App;