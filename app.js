/* app.js */
// SELECT ELEMENTS

const productsEl = document.querySelector('.products');


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
                    <div class="add-to-cart">
                        <img src="./icons/bag-plus.png" alt="add to cart">
                    </div>
                </div>
            </div>
    `
  })
}

renderProducts()