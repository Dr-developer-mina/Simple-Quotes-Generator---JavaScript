var quoteBtn = document.getElementById("quoteChange");
var displayQuote = document.getElementById("quoteDisplay");
var quotes = [
  ["So many books.so little time", "― Frank Zappa"],
  [
    "A room without books is like a body without a soul",
    "― Marcus Tullius Cicero",
  ],
  [
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
    "― Bernard M. Baruch",
  ],
  ["You only live once, but if you do it right, once is enough", "― Mae West"],
  ["Be the change that you wish to see in the world", "― Mahatma Gandhi"],
  [
    "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    "― H. Jackson Brown Jr.",
  ],
  [
    "It is better to be hated for what you are than to be loved for what you are not.",
    "― Andre Gide, Autumn Leaves",
  ],
  [
    "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
    "― Marilyn Monroe",
  ],
  [
    "Insanity is doing the same thing, over and over again, but expecting different results.",
    "― Narcotics Anonymous",
  ],
  [
    "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
    "― Steve Jobs",
  ],
  [
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "― Ralph Waldo Emerson",
  ],
  [
    "I am so clever that sometimes I don't understand a single word of what I am saying.",
    "― Oscar Wilde",
  ],
  ["Without music, life would be a mistake.", "― Friedrich Nietzsche"],
  ["We accept the love we think we deserve.", "― Stephen Chbosky"],
];

function getQuote() {
  displayQuote.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}

var darkModeBtn = document.getElementById("darkMode");

darkModeBtn.addEventListener("click", (e) => {
  document.body.classList.toggle("activeDarkMode");
  quoteChange.classList.toggle("btn-outline-dark");
});
