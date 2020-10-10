const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

const apiUrl = 'https://type.fit/api/quotes';
const twitterBaseUrl = 'https://twitter.com/intent/tweet?text=';

export {
  quoteContainer,
  quoteText,
  authorText,
  twitterBtn,
  newQuoteBtn,
  loader,
  apiUrl,
  twitterBaseUrl
};
