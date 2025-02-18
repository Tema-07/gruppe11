console.log("mit productliste js");

const listContainer = document.querySelector(".productList");
const mycategory = new URLSearchParams(window.location.search).get("category");
console.log("category er", mycategory);

const categorySpan = document.querySelector(".categories");
if (mycategory) {
  categorySpan.textContent = mycategory;
} else {
  categorySpan.textContent = "Category Not Found";
}

fetch(`https://dummyjson.com/products/category/${mycategory}`)
  .then((response) => response.json())
  .then((data) => {
    let products = data.products;

    let markup = products
      .map((product) => {
        return `
        <a href="produkt.html?id=${product.id}" class="product-link">
        <div class"productList">
        <article class="card ${product.discountPercentage ? "onSale" : ""} ${product.stock === 0 ? "soldOut" : ""}">
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
        </div>
        </a>`;
      })
      .join("");

    listContainer.innerHTML = markup;
  })



// filter øvelser
// const frugtoggroent = [	
//     {navn: "æble", kategori: "frugt"},
//     {navn: "melon", kategori: "frugt"},
//     {navn: "peberfrugt", kategori: "groent"}

// ];

// const produkter =[	
// "makeup",
// "hovedtelefoner",
// "mikrofon"
// ];

// produkter.map((produkt)=> {
//     console.log("produkt", produkt);
// });

// frugtoggroent.map((element)=> element.kategori == "groent").map((element) =>{
//     console.log(element);
// })
// filter øvelser

