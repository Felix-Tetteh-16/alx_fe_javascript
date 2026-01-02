// 1. Initial array of quote objects
let quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    category: "Inspiration",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    category: "Leadership",
  },
];

/**
 * Displays a random quote from the array into the 'quoteDisplay' div.
 */
function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");

  // Select a random object from the array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  // Update the DOM dynamically
  quoteDisplay.innerHTML = `
        <div class="quote-card">
            <p class="quote-text">"${selectedQuote.text}"</p>
            <p class="quote-category">Category: <span>${selectedQuote.category}</span></p>
        </div>
    `;
}

/**
 * Captures user input, adds it to the array, and updates the display.
 * This is triggered by the 'Add Quote' button in your HTML.
 */
function addQuote() {
  const quoteInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const text = quoteInput.value.trim();
  const category = categoryInput.value.trim();

  // Basic Validation: Ensure fields are not empty
  if (text === "" || category === "") {
    alert("Please fill in both the quote and the category!");
    return;
  }

  // Update the Data: Push a new object into the quotes array
  quotes.push({ text: text, category: category });

  // Update the UI: Immediately show the newly added quote to provide feedback
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = `
        <div class="quote-card" style="border-left: 5px solid green;">
            <p><strong>New Quote Added:</strong></p>
            <p>"${text}"</p>
            <p><em>Category: ${category}</em></p>
        </div>
    `;

  // Clear the input fields for the next entry
  quoteInput.value = "";
  categoryInput.value = "";

  console.log("Updated Quotes Array:", quotes);
}

// Ensure the "Show New Quote" button also works
document.addEventListener("DOMContentLoaded", () => {
  const showNewQuoteBtn = document.getElementById("newQuote");
  if (showNewQuoteBtn) {
    showNewQuoteBtn.addEventListener("click", showRandomQuote);
  }

  // Initial display on load
  showRandomQuote();
});
