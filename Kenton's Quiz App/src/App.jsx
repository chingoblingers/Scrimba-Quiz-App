import { useState} from 'react'
import Intro from "./components/intro.jsx"
import QuizQuestion from './components/quizQuestion.jsx'

function App() {
const [questions, setQuestions] = useState([])
const [chosenAnswer, setChosenAnswer] = useState({})

function selectAwnser(quesIndex, ans){
  setChosenAnswer(prevAnswer =>{
    return {...prevAnswer, [quesIndex] : ans}
  })
}

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
        chooseAnswerFunc={selectAwnser} rightAnswer={correct_answer} userAnswer={chosenAnswer[index]} />
      })

 

  return (
  <main>
  {questions.length === 0 ? <Intro start={generateQuestionArr} /> : quizList}

  </main>  
  )
}

export default App
