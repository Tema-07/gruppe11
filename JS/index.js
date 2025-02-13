

// fetch(`https://dummyjson.com/products/${mycategory}`)
//   .then((response) => response.json())
//   .then((data) => showList(data));

//   function showList(products) {
//     const listContainer = document.querySelector(".editors_pick");
//     let markup = "";
  
//     products.forEach((product) => {
//       markup += `
//         <a href="produkt.html?id=${product.id}" class="product-link">
//           <article class="smallProduct ${product.discount ? "onSale" : ""} ${product.soldout ? "soldOut" : ""}">
//             <img src="https://dummyjson.com/products/${product.id}.webp" alt="${product.productdisplayname}">
//             <h3>${product.productdisplayname}</h3>
//             <p>${product.brandname}</p>
//             <p>${product.subcategory}</p>
//             <p class="price">
//               ${
//                 product.discount
//                   ? `<s>${product.price},-</s> ${(
//                       product.price -
//                       (product.discount * product.price) / 100
//                     ).toFixed(2)},-`
//                   : `${product.price},-`
//               }
//             </p>
//             ${
//               product.discount
//                 ? `<div class="discount">${product.discount}%</div>`
//                 : ""
//             }
//           </article>
//         </a>`;
//     });
  
//     listContainer.innerHTML = markup;
//   }



  fetch('https://dummyjson.com/products/category/beauty')
  .then((response) => response.json())
  .then((data) => showList(data.products));

function showList(products) {
  const listContainer = document.querySelector(".editors_pick");
  let markup = "";

  products.forEach((product) => {
    markup += `
      <a href="produkt.html?id=${product.id}" class="product-link" style="text-decoration: none; color: inherit;">
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