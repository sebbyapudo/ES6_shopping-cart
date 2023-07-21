/* app.js */
// SELECT ELEMENTS

const productsEl = document.querySelector('.products');
const cartItems = document.querySelector('.cart-items');


// RENDER PRODUCTS
function renderProducts(){

  products.forEach((product) => {
    productsEl.innerHTML += `
            <div class="item">
                <div class="item-container">
                    <div class="item-img">
                        <img src=${product.imgSrc}>
                    </div>
                    <div class="desc">
                        <h2>${product.name}1</h2>
                        <h2><small>$</small>${product.price}</h2>
                        <p>
                          ${product.description}
                        </p>
                    </div>
                    <div class="add-to-wishlist">
                        <img src="./icons/heart.png" alt="add to wish list">
                    </div>
                    <div class="add-to-cart" onClick="addToCart(${product.id })">
                        <img src="./icons/bag-plus.png" alt="add to cart">
                    </div>
                </div>
            </div>
    `
  })
}

renderProducts()

// cart array
let cart = []
function addToCart(id) {
  // Check if product already exists in cart
  if(cart.some((item) => item.id === id)) {
    alert("Product already in cart!!")
  }
  else {
    const item = products.find( (product) => product.id === id) ;

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

// update cart
function updateCart(){
  renderCartItems();
  // renderSubTotal();
}

// Render cartItems 
function renderCartItems() {
  cart.forEach((product) => {
    cartItems.innerHTML = `
      <div class="cart-item">
          <div class="item-info">
              <img src=${product.imgSrc}>
              <h4>${product.name}</h4>
          </div>
          <div class="unit-price">
              <small>$</small>${product.price}
          </div>
          <div class="units">
              <div class="btn minus">-</div>
              <div class="number">${product.numberOfUnits}</div>
              <div class="btn plus">+</div>           
          </div>
      </div>
    `
  })
}