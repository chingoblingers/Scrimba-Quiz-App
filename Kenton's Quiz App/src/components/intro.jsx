export default function Intro(props){


    return (
    <section className="intro">
    <h1> Quizzical </h1>
    <p> The test that will make you the best! </p>
    <button onClick={props.start}> Start Quiz </button>
    </section>
    )
}