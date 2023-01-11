const products = [
    {name: "Product 3", description: "Description of Product 3", price: "$39.99",image1: "car.jpg"},
    {name: "Product 4", description: "Description of Product 4", price: "$49.99",image1: "car.jpg"},
    {name: "Product 5", description: "Description of Product 5", price: "$59.99",image1: "car.jpg"},
    {name: "Product 6", description: "Description of Product 6", price: "$69.99",image1: "car.jpg"},
    {name: "Product 7", description: "Description of Product 7", price: "$79.99",image1: "car.jpg"} //image1 is not working 
];
// this comment was to create product with js but the image is not showing at the moment 
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
    //img.innerHTML = `<img src ="$${product[i].image1}" class="product-image">` // only with other element
    img.setAttribute("alt", products[i].name);
    img.setAttribute("class", "product-image");
    img.setAttribute("src","car.jpg");
    product.appendChild(img);
    
    const button = document.createElement("button");
    button.innerHTML = "Add to Cart";
    button.setAttribute("class","add-to-cart");
    button.setAttribute("onclick", `addToNav(this.parentNode.getAttribute('data-product'), this.parentNode.getAttribute('data-price'))`);
    product.appendChild(button);

    container.appendChild(product);
}
