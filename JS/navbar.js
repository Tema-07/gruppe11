fetch(`https://dummyjson.com/products/categories`)
  .then((response) => response.json())
  .then(showCategori)
  .catch((error) => console.error('Error fetching categories:', error));

function showCategori(data) {
    const markup = data.map(element => `
      <li>
        <a href="produktliste.html?category=${element}">${element}</a>
      </li>
    `).join('');

    document.querySelector(".category_list_container ul").innerHTML = markup;
}


