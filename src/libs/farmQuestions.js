//Our array of questions
export const questions = [
    {
        questionText: '¿Dónde está la vaca?',
        answerOptions: [
            { answerText: 'cow 🐄', isCorrect: true },
            { answerText: 'chicken 🐔', isCorrect: false },
            { answerText: 'goat 🐐', isCorrect: false },
            { answerText: 'pig 🐖', isCorrect: false },
        ],
    },
    {
        questionText: '¿Dónde está el cerdo?',
        answerOptions: [
            { answerText: 'fish 🐟', isCorrect: false },
            { answerText: 'horse 🐴', isCorrect: false },
            { answerText: 'deer 🦌', isCorrect: false },
            { answerText: 'pig 🐖', isCorrect: true },
        ],
    },
    {
        questionText: '¿Quién trabaja en la granja?',
        answerOptions: [
            { answerText: 'la abogada', isCorrect: false },
            { answerText: 'la camarera', isCorrect: false },
            { answerText: 'la granjera', isCorrect: true },
            { answerText: 'la profesora', isCorrect: false },
        ],
    },
];
