import { useState } from 'react'
import Intro from "./components/intro.jsx"
import QuizQuestion from './components/quizQuestion.jsx'

function App() {
const [questions, setQuestions] = useState([])

    function generateQuestionArr(){
     fetch("https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple")
    .then(res => res.json())
    .then(data => setQuestions(data.results))    
    }

    const quizList = questions.map(question =>{
        return <QuizQuestion ask={question.question} solution={question.incorrect_answers}/>
      })


  return (
  <main>
  {questions.length === 0 ? <Intro start={generateQuestionArr} /> : quizList}

  </main>  
  )
}

export default App
