const quotes = [
  "Programs must be written for people to read, and only incidentally for machines to execute. — Harold Abelson",
  "In the world of software, the most beautiful code is the code you never have to write. — Robert Galanakis",
  "The best error message is the one that never shows up. — Thomas Fuchs",
  "Good programmers write code that humans can understand. — Martin Fowler",
  "Simplicity is the soul of efficiency. — Austin Freeman",
  "The best way to predict the future is to invent it. — Alan Kay",
  "Talk is cheap. Show me the code. — Linus Torvalds"
];

function getDailyQuote() {
  const today = new Date();
  const index = today.getDate() % quotes.length;
  return quotes[index];
}
