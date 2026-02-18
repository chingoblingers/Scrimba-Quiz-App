import {useState} from 'react'
import Intro from "./components/intro.jsx"
import QuizQuestion from './components/quizQuestion.jsx'

function App() {
const [questions, setQuestions] = useState([])
const [chosenAnswer, setChosenAnswer] = useState({})
const [submitted, setSubmitted] = useState(false)

function selectAwnser(quesIndex, ans){
  setChosenAnswer(prevAnswer =>{
    return {...prevAnswer, [quesIndex] : ans}
  })
}

function submitAnswers(){
  setSubmitted(true)
}

function playAgain(){
  setSubmitted(false)
  setChosenAnswer({})
  generateQuestionArr()
}

let allAnswered = false 
if(questions.length > 0 && Object.keys(chosenAnswer).length === questions.length){
  allAnswered = true
}

const score = questions.reduce((accum, question, index)=>{ if (chosenAnswer[index] === question.correct_answer){ return accum + 1} else{ return accum} } , 0)




    function generateQuestionArr(){
     fetch("https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple")
    .then(res => res.json())
    .then(data =>{const questionArr = data.results.map(questionObj=>{
      const {question, incorrect_answers, correct_answer, } = questionObj
      const randomIndex = Math.floor(Math.random() * (incorrect_answers.length + 1))
      const choices = incorrect_answers.toSpliced(randomIndex,0,correct_answer)
      return {question, choices, correct_answer}
    })
   return setQuestions(questionArr)
    })    
    }

    const quizList = questions.map((singleQuestion, index) =>{
      const {question, choices, correct_answer} = singleQuestion
        return <QuizQuestion key={index} ask={question} choiceList={choices} questionIndex={index} 
        chooseAnswerFunc={selectAwnser} rightAnswer={correct_answer} userAnswer={chosenAnswer[index]} onSubmit={submitted} />
      })

 

  return (
  <main>
  {questions.length === 0 ? <Intro start={generateQuestionArr} /> : quizList}
  {allAnswered ? <div>
        {submitted? <p> You scored {score}/{questions.length} correct!</p> : null}
        <button onClick={!submitted? submitAnswers : playAgain}>{!submitted ? "Check Answers" : "Play Again" }</button>
        </div> : null}
  </main>  
  )
}

export default App
