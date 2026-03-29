/* ResultsPage.jsx*/
import { useSuspenseQuery } from '@tanstack/react-query';
import { ResultsSection } from '../components/ResultSection.jsx';
import { SummarySection } from '../components/SummarySection.jsx';
import { get } from '../services/fetcher.js';
import { calculateScore } from '../utils/calculateScore.js';
import { getDescription } from '../utils/getDescription.js';

export function ResultsPage() {
    const { data } = useSuspenseQuery({
        queryKey: ["scores"],
        queryFn: get,
    });

    const score = calculateScore(data);
    const { ranking, description } = getDescription(score);

    return (
        <div className='layout'>
            <article className='result-card'>
                <ResultsSection
                    score={score}
                    ranking={ranking}
                    description={description}
                />
                <SummarySection data={data} />
            </article>
        </div>
    );
}