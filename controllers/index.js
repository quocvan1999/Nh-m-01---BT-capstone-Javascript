import { getApiDataAsync } from "../assets/util/method.js";

let url = "https://apistore.cybersoft.edu.vn/api/Product";

window.renderProducts = function (products) {
  let html = "";

  products.map((product) => {
    html += `
        <div class="col">
                <a href="./detail.html?productId=${product.id}">
                <div class="item-img">
                  <img src="${product.image}" alt="image product" />
                </div>
                <div class="item-content">
                  <div class="content">
                    <h3 class="item-name">${product.name}</h3>
                    <p class="item-describe">${product.shortDescription}</p>
                  </div>
                  <div class="item-action">
                    <button href="./detail.html?productId=${product.id}" class="btn-buy">Buy now</button>
                    <p class="item-price">${product.price}$</p>
                  </div>
                </div>
                </a>
              </div>
      `;
  });

  document.querySelector(".product-list .row").innerHTML = html;
};

window.getProducts = async function () {
  try {
    const data = await getApiDataAsync(url);

    renderProducts(data.content);
  } catch (e) {
    console.log(e);
  }
};

getProducts();