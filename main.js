let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}


let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList,toggle('shadow', window.scrollY > 0);
});


// Add to Cart Functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const name = button.getAttribute('data-name');
        const price = button.getAttribute('data-price');

        // Retrieve cart from localStorage or create an empty array
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if item already exists in cart
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += 1; // Increase quantity if item exists
        } else {
            // Add new item to cart with quantity 1
            cart.push({ name, price, quantity: 1 });
        }

        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${name} has been added to your cart!`);
    });
});
