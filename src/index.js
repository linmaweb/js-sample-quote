import { twitterBtn, newQuoteBtn } from './variables';
import { newQuote, getQuotes, tweetQuote } from './view';

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuotes();
