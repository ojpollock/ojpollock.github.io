const button = document.querySelector("#js-new-quote")
button.addEventListener('click', getQuote);

const answerButton = document.querySelector("#js-tweet")
answerButton.addEventListener('click', show);

function show(){
    document.getElementById("js-quote-text2").style.color = 'black'
} 
function hahashow(){
    document.getElementById("js-quote-text1").style.color = 'black'
} 
const laughButton = document.querySelector("#laugh")
laughButton.addEventListener('click', hahashow);

const endpoint = "https://v2.jokeapi.dev/joke/Any?type=twopart"

async function getQuote() {
    //console.log("it worked")
    try{
        const response = await fetch(endpoint);
        if (!response.ok){
            throw Error(response.statusText)
        }
        const json = await response.json();
        // console.log(json.joke);
        displayQuote(json.setup);

        showAnswer(json.delivery)

        haha()
        // showAnswer(json.answer);
    }
    catch (err) {
        console.log(err);
        alert('failed to fetch new trivia');

    }
}
 
// async function getQuote2() {
//     //console.log("it worked")
//     try{
//         const response = await fetch(endpoint);
//         if (!response.ok){
//             throw Error(response.statusText)
//         }
//         const json = await response.json();
//         // console.log(json.joke);
//         showAnswer(json.delivery)
//         // showAnswer(json.answer);
//     }
//     catch (err) {
//         console.log(err);
//         alert('failed to fetch new trivia');

//     }
// }



function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text")
    quoteText.textContent = quote;

}

function showAnswer(quote){
    const quoteText = document.querySelector("#js-quote-text2")
    quoteText.textContent = quote;
    quoteText.style.color = "white";
}

function haha (){
    const quoteText = document.querySelector("#js-quote-text1")
    quoteText.textContent = "hahaahah";
    quoteText.style.color = "white";
    
}

getQuote()
// getQuote2()