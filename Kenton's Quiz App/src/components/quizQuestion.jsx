export default function QuizQuestion({choiceList, ask, questionIndex, chooseAnswerFunc, userAnswer, rightAnswer, onSubmit}){

const answers = choiceList.map((answer, index) =>{
let highlight = ''

if(onSubmit){
answer === rightAnswer ? highlight = "correct" : answer === userAnswer ? highlight = "wrong" : null 
} else {
answer === userAnswer ? highlight = "selected" : null    
}


 return <button key={index} onClick={()=>{ chooseAnswerFunc(questionIndex, answer)}} 
        disabled={onSubmit}  className={highlight}> {answer} </button>})
    
    return(
        <section className="question">
        <h2>{ask}</h2>
        <div>
        {answers}     
        </div>
        </section>
    )
}