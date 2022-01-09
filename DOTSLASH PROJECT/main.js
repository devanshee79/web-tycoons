let quoteButton = document.getElementById("quoteButton");
let quote = document.getElementById("quote");
let quotes = document.getElementById("quotes");
let author = document.getElementById("author");
let quoteSection = document.getElementById("quoteSection");
let realData = " ";



function getNewQuotes() {
    let rnum = Math.floor(Math.random() * 10);
    quotes.innerText = data[rnum];
    console.log("i am working too");
}

let data = [
    
        `"Genius is one percent inspiration and ninety-nine percent perspiration." - Thomas Edison`,
        `"A house divided against itself cannot stand." - Abraham Lincoln`,
        `"Difficulties increase the nearer we get to the goal." - Johann Wolfgang von Goethe`,
        `"Fate is in your hands and no one elses" - Byron Pulsifer`,
        `"Be the chief but never the lord." - Lao Tzu`,
        `"Nothing happens unless first we dream." - Carl Sandburg`,
        `"Life is a learning experience, only if you learn." - Yogi Berra`,
        `"Peace comes from within. Do not seek it without." - Buddha`,
        `"It's easier to see the mistakes on someone else's paper." - Unknown`,
        `"Every man dies. Not every man really lives." - Unknown`,
        `"To lead people walk behind them." - Lao Tzu`,
        `"Ideas are the beginning points of all fortunes." - Napoleon Hill`,
        `"Doing nothing is better than being busy doing nothing." - Lao Tzu`,
        `"The day is already blessed, find peace within it." - Unknown`,
        `"From error to error one discovers the entire truth." - Sigmund Freud`,
        `"Work out your own salvation. Do not depend on others." - Buddha`,
        `""One today is worth two tomorrows." - Benjamin Franklin`,
        `"Once you choose hope, anythings possible." - Christopher Reeve`
           
]



quote.addEventListener("click",  () =>{
  
    quoteSection.style.display = 'block';
    getNewQuotes();
    });


quoteButton.addEventListener("click", () =>{

        quoteSection.style.display = 'none';
        getQuotes();
        } )
   

   