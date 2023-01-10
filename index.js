const nav = document.querySelector('#nav a');
const cart = document.querySelector('#cart');
const cartItems = document.querySelector('#cart-items');
let numItems = 0;
let items = [];
let total = 0;

const products = [
    {name: "Product 3", description: "Description of Product 3", price: "$39.99",iamge1: ("/home/pc/Desktop/online-store/car.jpg")},// call image path
    {name: "Product 4", description: "Description of Product 4", price: "$49.99",iamge1: ("/home/pc/Desktop/online-store/car.jpg")},
    {name: "Product 5", description: "Description of Product 5", price: "$59.99",iamge1: ("/home/pc/Desktop/online-store/car.jpg")},
    {name: "Product 6", description: "Description of Product 6", price: "$69.99",iamge1: ("/home/pc/Desktop/online-store/car.jpg")},
    {name: "Product 7", description: "Description of Product 7", price: "$79.99",iamge1: ("/home/pc/Desktop/online-store/car.jpg")}
];

const container = document.getElementById("products");

for (let i = 0; i < products.length; i++) {
    const product = document.createElement("article");

    product.setAttribute("data-description", products[i].description);
    product.setAttribute("data-price", products[i].price);
    product.setAttribute("data-product", products[i].name);
    
    const h3 = document.createElement("h3");
    h3.innerHTML = products[i].name;
    product.appendChild(h3);

    const img = document.createElement("img");
    //img.src = (product.image1);
    img.setAttribute("src",product.iamge)
    img.setAttribute("alt", products[i].name);
    img.setAttribute("class", "product-image");
    product.appendChild(img);
    
    const button = document.createElement("button");
    button.innerHTML = "Add to Cart";
    button.setAttribute("class","add-to-cart");
    button.setAttribute("onclick", `addToNav(this.parentNode.getAttribute('data-product'), this.parentNode.getAttribute('data-price'))`);
    product.appendChild(button);

    container.appendChild(product);
}


function showFirstThree() {
    const products = document.querySelectorAll("#products article");
    for (let i = 0; i < products.length; i++) {
        if (i < 3) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}




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
// window.onload = function () {
//     showFirstThree();
// }