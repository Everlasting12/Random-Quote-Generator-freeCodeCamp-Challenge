window.onload = init;

function init() {
  getRandomQuote();
}

const getRandomQuote = async () => {
  const quoteObj = await fetch("https://api.quotable.io/random");
  const quote = await quoteObj.json();
  message = quote.content;
  author = quote.author;

  document.getElementById("text").innerText = quote.content;
  document.getElementById("author").innerText = " - " + quote.author;

  //a tag
  let quoteLink ="https://twitter.com/intent/tweet?text="+quote.content.replace(/\s/g, "%20")+"%20-%20"+author.replace(/\s/g, "%20");
  console.log(typeof quoteLink);
  console.log(quoteLink);

  document.getElementById("tweet-quote").setAttribute("href", quoteLink);
};
document.getElementById("new-quote").addEventListener("click", getRandomQuote);
