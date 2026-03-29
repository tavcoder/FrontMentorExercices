/* calculateScore.js */
export function calculateScore (data){
  return Math.round(data.reduce((sum, item)=> sum + item.score,0)/data.length);
}