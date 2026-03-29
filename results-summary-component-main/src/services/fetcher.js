/* Fetcher.js */
export function get (){
    return fetch ("/data.json").then(response => response.json());
}