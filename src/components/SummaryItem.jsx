/* SummaryItem.jsx*/
export function SummaryItem({ category, score, icon }) {
    const modifier = category.toLowerCase();
    return (<li className={`summary__item summary__item--${modifier}`}>
        <div className={`summary__category summary__category--${modifier}`}>
            <img src={icon} alt="" aria-hidden="true" /><p>{category}</p>
        </div>
        <div className="summary__score">
            <strong className="summary__score-value">{score}</strong>
            <span className="summary__score-total"> / 100</span>
        </div>
    </li>);
}
