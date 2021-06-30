export const qData = async()=>{
    const  url: string = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
const response = await fetch(url);
let data =response.json();
console.log(`data`, data);
}