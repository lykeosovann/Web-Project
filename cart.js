// Display Cart Items
const cartItemsContainer = document.getElementById('cart-items');

// Retrieve cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render the cart
function renderCart() {
    cartItemsContainer.innerHTML = ''; // Clear the container

    if (cart.length > 0) {
        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <p><strong>${item.name}</strong></p>
                <p>Price: $${item.price}</p>
                <p>Quantity: 
                    <button class="decrease-quantity" data-index="${index}">-</button>
                    ${item.quantity}
                    <button class="increase-quantity" data-index="${index}">+</button>
                </p>
                <button class="delete-item" data-index="${index}">Delete</button>
            `;
            cartItemsContainer.appendChild(itemDiv);
        });
    } else {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    }

    // Add event listeners to quantity buttons and delete buttons
    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            cart[index].quantity += 1;
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        });
    });

    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            } else {
                cart.splice(index, 1); // Remove item if quantity is 0
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        });
    });

    document.querySelectorAll('.delete-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            cart.splice(index, 1); // Remove item from cart
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        });
    });
}

// Initial render
renderCart();
