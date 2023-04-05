/**
  https://github.com/lukePeavey/quotable
*/

// This function will be responsible for getting and displaying the quote
function displayQuote(data) {
    const containerEl = document.querySelector("#quote");
  
    const quoteEl = document.createElement("p");
    quoteEl.classList.add("quote");
    const authorEl = document.createElement("p");
    authorEl.classList.add("author");
  
    quoteEl.textContent = data.content;
    authorEl.textContent = data.author;
  
    containerEl.appendChild(quoteEl);
    containerEl.appendChild(authorEl);
}

// Calling the API
function callService(url, displayCallback) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        displayCallback(data);
    });
}

// Randomizing which quote to display
const random = Math.floor(Math.random() * 1000);
callService("https://api.quotable.io/random", displayQuote);