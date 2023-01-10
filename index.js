const nav = document.querySelector('#nav a');
const cart = document.querySelector('#cart');
const cartItems = document.querySelector('#cart-items');
let numItems = 0;
let items = [];
let total = 0;

function addToNav(product, price) {
    numItems++;
    nav.textContent = `Cart (${numItems})`;
    items.push({ product, price });
    cart.style.display = 'none';
}


function showCart() {
    cartItems.innerHTML = '';
    // totalSpan = document.createElement('li');
    // totalSpan.setAttribute('class', 'total');
    if (items.length >= 0) {
        cart.style.display = 'block';
        
        const itemCount = {};
        

        for (const item of items) {
            if (!itemCount[item.product]) {
                itemCount[item.product] = 0;
            }
            itemCount[item.product]++;
            total += parseFloat(item.price.slice(1)); 
        }
        // if (totalSpan.textContent) {
        //     totalSpan.remove();
        // }

        for (const [product, count] of Object.entries(itemCount)) {
            const li = document.createElement('li');
            li.textContent = `${product} - ${count}`;
            cartItems.appendChild(li);
        }
        
        //const totalSpan = cart.querySelector('.total');  // Check if element exists
        //totalSpan = document.querySelector('.total')
        const totalSpan = document.querySelector('#cart .total');
        if (!totalSpan) {
            // Create the totalSpan element if it does not exist
            totalSpan = document.createElement('span');
            totalSpan.classList.add('.total');
            totalSpan.textContent = `Total: $${total.toFixed(2)}`;
            cart.appendChild(totalSpan);
          }
        totalSpan.textContent = `Total: $${total.toFixed(2)}`;

        // cart.appendChild(totalSpan);
        const oldModal = document.querySelector('.modal');
        oldModal.style.display = 'none';

        // if (totalSpan) {
        //     totalSpan.parentNode.removeChild(totalSpan);
        // }
        
    }
}



function buyNow() {
    cart.classList.add('hidden');
    //cart.remove()
    nav.textContent = 'Cart';
    numItems = 0;
    items = [];
    cartItems.innerHTML = '';
    const totalSpan = document.querySelector('#cart span');
    if (totalSpan) {
        // totalSpan.parentNode.removeChild(totalSpan);
        total = 0;
        totalSpan.innerHTML = '';


    }
}
function closeCart() {
    cart.classList.add('hidden');
    cart.style.display = 'none';

  }

 
const productImages = document.querySelectorAll('.product-image');
productImages.forEach(img => {
img.addEventListener('click', event => {
    const article = event.target.parentNode;
    const description = article.getAttribute('data-description');
    const price = article.getAttribute('data-price');
    const product = article.getAttribute('data-product')

    const oldModal = document.querySelector('.modal');
    if (oldModal) {
    oldModal.parentNode.removeChild(oldModal);
    }

    const modal = document.createElement('div');  
    modal.setAttribute('class', 'modal');
    modal.innerHTML = `
    <div class="topPart"><h2>${product}</h2></div>
    <h3>${product}</h3>
    <p>${description}</p>
    <p>Price: ${price}</p>`;
    cart.style.display = 'none';
    document.body.appendChild(modal);
});
});