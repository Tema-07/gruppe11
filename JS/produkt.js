

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
          
           

             <h1>Tilføj din anmeldelse</h1>
            <div id="comment-form">
            <label for="reviewer-name"><strong>Dit navn:</strong></label><br>
            <input type="text" id="reviewer-name" placeholder="Skriv dit navn her"><br><br>

            <label for="review-rating"><strong>Vurdering (1-5):</strong></label><br>
            <select id="review-rating">
                <option value="1">1 ⭐</option>
                <option value="2">2 ⭐⭐</option>
                <option value="3">3 ⭐⭐⭐</option>
                <option value="4">4 ⭐⭐⭐⭐</option>
                <option value="5">5 ⭐⭐⭐⭐⭐</option>
            </select><br><br>

             <label for="new-comment"><strong>Din anmeldelse:</strong></label><br>
            <textarea id="new-comment" cols="60" rows="5" placeholder="Skriv din kommentar her"></textarea><br><br>

            <button id="btn-post">Tilføj anmeldelse</button>
            </div>
            

      `;
   
      document.getElementById("btn-post").addEventListener("click", function () {
        const reviewerName = document.getElementById("reviewer-name").value.trim();
        const reviewRating = document.getElementById("review-rating").value;
        const reviewComment = document.getElementById("new-comment").value.trim();
  
        document.getElementById("reviews-list").innerHTML += `
          <div class="review-card">
            <p class="review-date"><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
            <p class="review-name"><strong>Reviewer:</strong> ${reviewerName}</p>
            <p class="review-rating"><strong>Rating:</strong> ${reviewRating} ⭐️</p>
            <p class="review-comment"><strong>Comment:</strong> ${reviewComment}</p>
          </div>
        `;
  
        // Nulstil felterne efter indsendelse
        document.getElementById("reviewer-name").value = "";
        document.getElementById("review-rating").value = "5";
        document.getElementById("new-comment").value = "";
      });   
      });
    

  
    
   

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




 // <h1>Please add your comment</h1>
            // <div id="comment-container">
            // <!-- Brugergenererede kommentarer vil blive tilføjet her -->
            // </div>
            // <textarea id="new-comment" cols="60" rows="5"></textarea>
            // <br>
            // <button id="btn-post">Post</button>
            // </section>



 //   document.getElementById("btn-post").addEventListener("click", function () {
    //     const newComment = document.getElementById("new-comment").value;
    //     if (newComment.trim() !== "") {
    //       const commentContainer = document.getElementById("comment-container");
    //       const commentElement = document.createElement("p");
    //       commentElement.innerText = newComment;
    //       commentContainer.appendChild(commentElement);
    //       document.getElementById("new-comment").value = ""; // Ryd tekstfeltet
    //     }
