const nav = document.querySelector('#nav a');
const cart = document.querySelector('#cart');
const cartItems = document.querySelector('#cart-items');
let numItems = 0;
let items = [];

function addToNav(product, price) {
    numItems++;
    nav.textContent = `Cart (${numItems})`;
    items.push({ product, price });
}


function showCart() {
    if (items.length > 0) {
        cart.style.display = 'block';
        cartItems.innerHTML = '';
        let total = 0;
        for (const item of items) {
        const li = document.createElement('li');
        li.textContent = `${item.product} - ${item.price}`;
        total += parseFloat(item.price.slice(1)); // remove the "$" sign and add the price to the total
        cartItems.appendChild(li);
        }
        const totalSpan = document.createElement('span');
        totalSpan.textContent = `Total: $${total.toFixed(2)}`; // display the total with 2 decimal places
        cart.appendChild(totalSpan);
    }
}



function buyNow() {
    cart.classList.add('hidden');
    nav.textContent = 'Cart';
    numItems = 0;
    items = [];
    cartItems.innerHTML = '';
    const totalSpan = document.querySelector('#cart span');
    if (totalSpan) {
        totalSpan.parentNode.removeChild(totalSpan);
    }
}

const productImages = document.querySelectorAll('.product-image');
productImages.forEach(img => {
img.addEventListener('click', event => {
    const article = event.target.parentNode;
    const description = article.getAttribute('data-description');
    const price = article.getAttribute('data-price');
    const product = article.getAttribute('data-product')

    // Remove the existing modal window if it exists
    const oldModal = document.querySelector('.modal');
    if (oldModal) {
    oldModal.parentNode.removeChild(oldModal);
    }

    // Create the new modal window and populate it with the product details
    const modal = document.createElement('div');  
    modal.setAttribute('class', 'modal');
    modal.innerHTML = `
    <h3>${product}</h3>
    <p>${description}</p>
    <p>Price: ${price}</p>`;

    document.body.appendChild(modal);
});
});