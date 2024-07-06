import { getApiDataIDAsync } from "../assets/util/method.js";

let url = "https://shop.cyberlearn.vn/api/Product/getbyid?id=";

window.renderDetailProduct = function (product) {
  let html = "";

  html += `
    <div class="container">
        <div class="detail-img">
          <img src="${product.image}" alt="img product" />
        </div>
        <div class="detail-content">
          <h1 class="product-name">${product.name}</h1>
          <p class="product-describe">${product.description}</p>
          <div class="product-size">
            <h3>Available size</h3>
            <div class="list-size">
            ${product.size
              .map((size) => `<button class="btn-size">${size}</button>`)
              .join("")}
            </div>
          </div>
          <p class="product-price">${product.price}$<p>
          <div class="quantity">
            <button class="btn-quantity">+</button>
            <p class="number">1</p>
            <button class="btn-quantity">-</button>
          </div>
          <button class="btn-addToCard">Add to card</button>
        </div>
      </div>
    `;
  document.querySelector(".product-detail").innerHTML = html;
};

window.renderRelatedProducts = function (arrRelated) {
  let html = "";

  arrRelated.map((product) => {
    html += `
      <div class="col">
              <div class="item-img">
                <img src="${product.image}" alt="image product" />
              </div>
              <div class="item-content">
                <div class="content">
                  <h3 class="item-name">${product.name}</h3>
                  <p class="item-describe">${product.shortDescription}</p>
                </div>
                <div class="item-action">
                  <a href="./detail.html?productId=${product.id}" class="btn-buy">Buy now</a>
                  <p class="item-price">${product.price}$</p>
                </div>
              </div>
            </div>
    `;
  });

  document.querySelector(".product-list .row").innerHTML = html;
};

window.getProductId = async function () {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("productId");
    const data = await getApiDataIDAsync(url, id);

    renderDetailProduct(data.content);
    renderRelatedProducts(data.content.relatedProducts);
  } catch (e) {
    console.log(e);
  }
};

getProductId();
