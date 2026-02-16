export default function QuizQuestion({choiceList, ask, questionIndex, chooseAnswerFunc, userAnswer, rightAnswer}){

const answers = choiceList.map((answer, index) =>{
let highlight = ''
if (answer === userAnswer){
    highlight = "selected"
}


 return <button key={index} onClick={()=>{chooseAnswerFunc(questionIndex, answer)}} className={highlight}> {answer} </button>})
    
    return(
        <section className="question">
        <h2>{ask}</h2>
        <div>
        {answers}     
        </div>
        </section>
    )
}