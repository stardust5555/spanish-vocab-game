import './App.css';

function App() {

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

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
