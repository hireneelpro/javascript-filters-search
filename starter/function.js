export function get(selection) {
  let element;
  if ((element = document.querySelector(selection))) {
    return element;
  } else throw Error(" selected element does not exit");
}

export function showImages(data,imageContainer) {
  imageContainer.innerHTML = data
    .map((each) => {
      return `<div data-id="${each.company}" class="single-image">
        <img src="${each.image}" class="image" alt="">
        <h4 class="image-title">${each.title}</h4>
         <h5 class="image-price">${each.price} </h5>
       </div>`;
    })
    .join("");
}