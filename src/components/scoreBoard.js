import React from "react";

function ScoreBoard({userScore, numberOfQuestions}){
    return <h1> You've scored {userScore} out of {numberOfQuestions}</h1>
}

export default ScoreBoard