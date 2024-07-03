// When you type a grocery item into the text input and press [Enter]:
// - the new item should appear at the bottom of the list
// - the text input should be reset to a blank input field
// - the cursor should be blinking in the text input again

document.addEventListener("DOMContentLoaded", setupListeners)

function setupListeners() {
  document.querySelector("form").addEventListener("submit", addItem)
}

function addItem(e) {
  e.preventDefault();
  console.log(e);

}
