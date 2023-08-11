// main.js

// Function to update cart summary
function updateCartSummary() {
    // Calculate and update total price
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;
    cartItems.forEach((item) => {
      const price = parseFloat(item.querySelector('p').textContent.substring(1));
      const quantity = parseInt(item.querySelector('input').value);
      total += price * quantity;
    });
  
    document.querySelector('.cart-summary p').textContent = `Total: $${total.toFixed(2)}`;
  }
  
  // Add to cart event listener
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
      const product = event.target.closest('.product-card');
      const title = product.querySelector('h3').textContent;
      const price = parseFloat(product.querySelector('p').textContent.substring(1));
  
      // Create cart item
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <img src="${product.querySelector('img').src}" alt="${title}">
        <div class="item-details">
          <h3>${title}</h3>
          <p>$${price.toFixed(2)}</p>
          <input type="number" value="1" min="1">
          <button class="remove-item">Remove</button>
        </div>
      `;
  
      // Append to cart
      document.querySelector('.cart-items').appendChild(cartItem);
      updateCartSummary();
    }
  
    // Remove item from cart event listener
    if (event.target.classList.contains('remove-item')) {
      event.target.closest('.cart-item').remove();
      updateCartSummary();
    }
  
    // Proceed to checkout event listener
    if (event.target.classList.contains('checkout-button')) {
      // Implement checkout logic here
    }
  });
  
  // Place order event listener
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('place-order-button')) {
      event.preventDefault();
      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      
      // Perform order placement and processing
      // Implement order logic here
  
      // Display success message
      const checkoutContainer = document.querySelector('.checkout-container');
      checkoutContainer.innerHTML = `
        <h2>Thank You, ${name}!</h2>
        <p>Your order has been placed successfully. An email confirmation has been sent to ${email}.</p>
      `;
    }
  });
// main.js (continued)

// Hamburger menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav ul');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Implement additional interactions and functionality here
//Replace 'api/products' with the actual endpoint for fetching product data from your backend.
// Fetch product data from the server
fetch('api/products')
  .then((response) => response.json())
  .then((data) => {
    // Display product data on the UI
    const productCards = document.querySelectorAll('.product-card');
    data.forEach((product, index) => {
      const card = productCards[index];
      card.querySelector('h3').textContent = product.title;
      card.querySelector('img').src = product.image;
      card.querySelector('p').textContent = `$${product.price.toFixed(2)}`;
    });
  })
  .catch((error) => {
    console.error('Error fetching product data:', error);
  });
  // main.js (continued)

// Update cart summary on quantity change
document.addEventListener('input', (event) => {
    if (event.target.closest('.cart-item')) {
      updateCartSummary();
    }
  });
  
  // Implement other interactions and functionality here
  
  // Display initial cart summary
  updateCartSummary();
  
  // Display success message upon adding item to cart
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
      const productTitle = event.target.closest('.product-card').querySelector('h3').textContent;
      alert(`${productTitle} added to cart!`);
    }
  });
  
  // Implement additional interactions and features
  
  // Ensure DOM is fully loaded before executing the script
  document.addEventListener('DOMContentLoaded', () => {
    // Execute your code here
  });
  