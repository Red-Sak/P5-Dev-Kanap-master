fetch("http://localhost:3000/api/products")
  .then((response) => {
    return response.json();
    //fetch veut dire cherche//
  })
  .then((products) => {
    const section = document.getElementById("items");
    console.log(section);
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      section.innerHTML += `
      <a href="./product.html?id=42">
            <article>
              <img
                src="${product.imageUrl}"
                alt="${product.altTxt}"
              />
              <h3 class="productName">${product.name}</h3>
              <p class="productDescription">${product.description}
                Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis
                enim malesuada risus sapien gravida nulla nisl arcu.
              </p>
            </article>
          </a>
      `;
    }
  });
