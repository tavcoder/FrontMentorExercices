/* SummarySection.jsx*/
import { SummaryItem } from "./SummaryItem.jsx";

export function SummarySection({ data }) {
    return (
        <section className="result-card__summary">
            <h2 className="result-card__summary-title">Summary</h2>
            <ul className="result-card__summary-list">
                {data.map((item) => <SummaryItem
                    key={item.category}
                    category={item.category}
                    score={item.score}
                    icon={item.icon}
                />)}
            </ul>
            <button className='result-card__continue-btn'>Continue</button>

        </section>)
}
;
