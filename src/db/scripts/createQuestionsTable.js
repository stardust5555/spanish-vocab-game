import {query} from "../index.js"

const sqlString = `CREATE TABLE IF NOT EXISTS questions(
    questions_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    questionText TEXT,
    answerOptions 
);`;

async function createTable(){
    const result = await query(sqlString);
    console.log("Created cats table")
}

createTable()