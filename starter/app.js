import { products } from "./products.js";
import { showImages, get } from "./function.js";
const url = "https://course-api.com/javascript-store-products";

const imageContainer = get(".image-container");
const companyBtns = document.querySelectorAll(".btn");
const search = get(".search");

// ========== display products as company clicked =======/


companyBtns.forEach((each) => {
  each.addEventListener("click", (e) => {
    const companyName = e.target.dataset.id;

    if (companyName === "all") {
      showImages(products, imageContainer);
    } else {
      const product = products.filter((each) => {
        return each.company === companyName;
      });
      showImages(product, imageContainer);
    }
  });
});
// ==================================================//
// console.log(search);
search.addEventListener("keyup", (e) => {
  const key = e.target.value;
  const product = products.filter((each) => {
    return each.title.includes(key)
  })
  console.log(product);
  showImages(product,imageContainer)

});
