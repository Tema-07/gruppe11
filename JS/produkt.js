

const productId = new URLSearchParams(window.location.search).get("id");
const productContainer = document.querySelector(".productContainer");
const breadcrumbContainer = document.querySelector(".breadcrumb");

  fetch(`https://dummyjson.com/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {

      const categorySpan = document.querySelector(".productdisplayname");

       if (breadcrumbContainer) {
        breadcrumbContainer.innerHTML = `
          <nav class="breadcrumb-nav">
            <a href="index.html">Forside</a> /
            <a href="produktliste.html?category=${data.category}">${data.category}</a> /
            <span>${data.title}</span>
          </nav>
        `;
      }

      productContainer.innerHTML = `
        <section class="product_container">
          <div class="product_image">
            <img src="${data.thumbnail}" alt="${data.title}">
          </div>

          <div class="saleLabel ${data.discountPercentage ? "isOnSale" : ""}">
            ${data.discountPercentage ? `-${data.discountPercentage}%` : ""}
          </div>

          <div class="product_info">
            <p class="brandname"><strong>Brand:</strong> ${data.brand}</p>
            <h2 class="productdisplayname2">${data.title}</h2>
            <p class="category"><strong>Kategori:</strong> ${data.category}</p>
            <p class="description">${data.description}</p>
            <p class="stock"><strong>Lager:</strong> ${data.stock} stk.</p>
            <p class="rating"><strong>Rating:</strong> ${data.rating} ⭐️</p>
            <div class="price_bar">
            <h2 class="price">DKK ${
              data.discountPercentage
                ? `<s>${data.price},-</s> ${(data.price - (data.discountPercentage * data.price) / 100).toFixed(2)},-`
                : `${data.price},-`
            }</h2>
           
            <button onclick="addToBasket(${data.id})">Tilføj til kurv</button>
          </div>
          </div>
        </section>

         <section class="customer_reviews">
          <h3 class="review-title">Customer reviews</h3>
          <div class="reviews-list">
            ${data.reviews && data.reviews.length > 0 
              ? data.reviews.map((review) => `
                <div class="review-card">
                  <p class="review-date"><strong>Date:</strong> ${review.date}</p>
                  <p class="review-name"><strong>Reviewer:</strong> ${review.reviewerName}</p>
                  <p class="review-rating"><strong>Rating:</strong> ${review.rating} ⭐️</p>
                  <p class="review-comment"><strong>Comment:</strong> ${review.comment}</p>
                </div>`).join("")
              : "<p>Ingen anmeldelser fundet.</p>"
            }
          </div>
        </section>

      `;
    })
   

// Funktion til at simulere tilføjelse til kurv
function addToBasket(id) {
  alert(`Produkt er blevet tilføjet til kurven!`);
}

// vælg str

/* <label for="size">Vælg en størrelse</label>
<select id="size">
  <option value="S">S</option>
  <option value="M">M</option>
  <option value="L">L</option>
  <option value="XL">XL</option>
</select> */
