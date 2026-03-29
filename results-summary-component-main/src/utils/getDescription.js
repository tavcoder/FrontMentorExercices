
/* getDescription.js */

export function getDescription(score) {
    // Force conversion to primitive number
    const numScore = Number(score);

    // Handle NaN or invalid input
    if (isNaN(numScore)) {
        return {
            ranking: "Unknown",
            description: "Unable to determine score."
        };
    }

    if (numScore >= 65) {
        return {
            ranking: "Great",
            description: "You scored higher than 65% of the people who have taken these tests."
        };
    }

    return {
        ranking: "Keep trying",
        description: "You scored lower than 65% of the people who have taken these tests."
    };
}