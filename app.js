// Initialize variables
const addButtons = document.querySelectorAll(".button");
const cartValue = document.getElementById('cart-value'); // Corrected variable name
let count = 0;
const array = [];
let rate = 0;

// Function to update the cart value displayed in the HTML
function updateCartValue() {
  const cartVal = array.reduce((total, item) => total + item.qty, 0);
  cartValue.innerText = cartVal; // Corrected variable name
}

// Event listener for "Add" buttons
addButtons.forEach(item => {
  item.addEventListener('click', function() {
    count += 1;
    updateCartValue(); // Update cart value in the HTML
  });
});

// Rest of the code remains the same

// Event listener for book items
const addingButton = document.querySelectorAll(".allbooks");

function getContentText(event) {
  const parentDiv = event.target.closest(".allbooks");
  if (parentDiv) {
    const h3 = parentDiv.querySelector("h3").textContent;
    const p = parentDiv.querySelector(".buy p").textContent;
    const pp = parseFloat(p.replace("$", ""));
    let existingItem = array.find(item => item.name === h3);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      array.push({ name: h3, qty: 1, price: pp });
    }
    rate += pp;
    updateCartValue(); // Update cart value in the HTML
  }
}

addingButton.forEach(button => {
  button.addEventListener('click', getContentText);
});

// Event listener for the "Cart" button
const cartbutton = document.querySelector('#cart');

cartbutton.addEventListener('click', () => {
  console.log(array);
  console.log("The total amount is = $" + rate.toFixed(2));
});
