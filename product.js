// Cart data
let cart = [];
let cartTotal = 0;

// Function to add items to the cart
function addToCart(productName, productPrice) {
  const cartItemsDiv = document.getElementById('cart-items');
  const cartTotalSpan = document.getElementById('cart-total');

  // Add product to cart
  cart.push({ name: productName, price: productPrice });
  cartTotal += productPrice;

  // Update cart display
  cartItemsDiv.innerHTML = cart
    .map(
      (item, index) =>
        `<p>${item.name} - ₱${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button></p>`
    )
    .join('');

  cartTotalSpan.textContent = cartTotal.toFixed(2);
}

// Function to remove items from the cart
function removeFromCart(index) {
  const cartItemsDiv = document.getElementById('cart-items');
  const cartTotalSpan = document.getElementById('cart-total');

  // Remove product from cart
  cartTotal -= cart[index].price;
  cart.splice(index, 1);

  // Update cart display
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cartItemsDiv.innerHTML = cart
      .map(
        (item, index) =>
          `<p>${item.name} - ₱${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button></p>`
      )
      .join('');
  }

  cartTotalSpan.textContent = cartTotal.toFixed(2);
}

// Show checkout form
document.getElementById('checkoutButton').addEventListener('click', function () {
  const checkoutForm = document.getElementById('checkoutForm');
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  // Populate checkout form
  const cartSummary = cart
    .map((item) => `${item.name}: ₱${item.price.toFixed(2)}`)
    .join('\n');
  document.getElementById('cartSummary').value = cartSummary;
  document.getElementById('checkoutTotal').textContent = cartTotal.toFixed(2);

  checkoutForm.style.display = 'block';
});

// Close checkout form
document.getElementById('closeForm').addEventListener('click', function () {
  document.getElementById('checkoutForm').style.display = 'none';
});

// Confirm checkout
document.getElementById('confirmCheckout').addEventListener('click', function () {
  const customerName = document.getElementById('customerName').value.trim();
  const customerAddress = document.getElementById('customerAddress').value.trim();

  if (!customerName || !customerAddress) {
    alert('Please fill in all fields.');
    return;
  }

  alert(`Thank you for your order, ${customerName}!\nYour items will be shipped to ${customerAddress}.`);

  // Clear cart
  cart = [];
  cartTotal = 0;
  document.getElementById('cart-items').innerHTML = '<p>Your cart is empty.</p>';
  document.getElementById('cart-total').textContent = '0.00';

  document.getElementById('checkoutForm').style.display = 'none';
});

// "Back to Top" button functionality
const backToTopButton = document.getElementById("backToTop");

// Show the button when the user scrolls down 200px
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Smooth scroll to top when the button is clicked
backToTopButton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});