export default function QuizQuestion({solution, ask}){
    
 const answers = solution.map(answer =>{
        return <li> {answer} </li>
    })
    
    return(
        <section className="question">
        <h2>{ask}</h2>
        <ul>
        {answers}     
        </ul>
        </section>
    )
}