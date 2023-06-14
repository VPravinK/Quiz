import React from 'react';
import './App.css';
import questions from './Components/quiz';
import { useState } from 'react';
function App() {
  const[questionIndex,setQuestionIndex]=useState(0);
  const[result,setResult]=useState(false);
  const[score,setScore]=useState(0);
  const replay =()=>{
    setQuestionIndex(0);
    setResult(false);
    setScore(0);
  }
  const present_question= questions[questionIndex];
  const get_choice =(index)=>{
    if(present_question.Answer===index){
      setScore(score+1);
    }
    const next_question=questionIndex+1;
    if(next_question<questions.length)
    {
      setQuestionIndex(next_question);
    }
    else{
      setResult(true);
    }
  };
  return (
    <div className="quiz_box">
      {result?(<><h1>{score}</h1>
      <br/><p>
      <button className="replay"onClick={replay}>Play Again</button></p></>):(<div className='quiz_qus'>
      <p className='Qus'>{present_question.question}</p>
        <div className='options'>
      <ul className='quiz_ul'>
         { present_question.options.map((option,i) =>
          {return <li className='quiz_li' onClick={()=> get_choice(i)}>{option}</li>})}
      </ul>
      </div>
     </div>)}
     
    </div>
  );
}

export default App;
