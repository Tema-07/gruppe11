const listContainer = document.querySelector(".productList");
const mycategory = new URLSearchParams(window.location.search).get("category");

const categorySpan = document.querySelector(".categories");
if (mycategory) {
  categorySpan.textContent = mycategory;
} else {
  categorySpan.textContent = "Category Not Found";
}


fetch(`https://dummyjson.com/products/category/${mycategory}`)
  .then((response) => response.json())
  .then((data) => showList(data.products))
  .catch((error) => console.error('Error fetching products:', error));

function showList(products) {
  const listContainer = document.querySelector(".productList");
  let markup = "";

  products.forEach((product) => {
    markup += `
      <a href="produkt.html?id=${product.id}" class="product-link">
        <article class="smallProduct ${product.discountPercentage ? "onSale" : ""} ${product.stock === 0 ? "soldOut" : ""}">
          <img src="${product.thumbnail}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p>${product.brand}</p>
          <p>${product.category}</p>
          <p class="price">
            ${
              product.discountPercentage
                ? `<s>${product.price},-</s> ${(product.price - (product.discountPercentage * product.price) / 100).toFixed(2)},-`
                : `${product.price},-`
            }
          </p>
          ${
            product.discountPercentage
              ? `<div class="discount">${product.discountPercentage}%</div>`
              : ""
          }
        </article>
      </a>`;
  });

  listContainer.innerHTML = markup;
}