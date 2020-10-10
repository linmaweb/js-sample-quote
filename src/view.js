import {
  quoteContainer,
  quoteText,
  authorText,
  loader,
  apiUrl,
  twitterBaseUrl
} from './variables'

let apiQuotes = [];

const loading = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

const complete = () => {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

const newQuote = () => {
  loading();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }

  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }

  quoteText.textContent = quote.text;
  complete();
}

const getQuotes = async () => {
  loading();
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.log(error)
  }
}

const tweetQuote = () => {
  const twitterUrl = `${twitterBaseUrl}${quoteText.innerText} - ${authorText.innerText}`;
  window.open(twitterUrl, '_blank');
}

export {
  newQuote,
  getQuotes,
  tweetQuote
}