/* ResultSection.jsx*/
export function ResultsSection({ score, ranking, description }) {
    return (
        <section className='result-card__score' >
            <h2 className='result-card__title'>Your Result</h2>
            <div className='score-circle'>
                <span className='score-circle__value'>{score}</span>
                <span className='score-circle__total'>of 100</span>
            </div>
            <div className='result-card__feedback'>
                <p className="result-card__ranking">{ranking}</p>
                <p className="result-card__description">{description}</p>
            </div>
        </section>
    )
}