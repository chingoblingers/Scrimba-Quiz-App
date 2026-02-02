import { useState } from 'react'
import Intro from "./components/intro.jsx"

function App() {
const [questions, setQuestions] = useState([])

  return (
  <main>
  <Intro/>

  </main>  
  )
}

export default App
