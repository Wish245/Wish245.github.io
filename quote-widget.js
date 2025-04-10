document.addEventListener("DOMContentLoaded", function () {
  const quoteElement = document.getElementById("quote-of-the-day");
  if (quoteElement) {
    const quote = getDailyQuote();
    quoteElement.textContent = quote;
  }
});
