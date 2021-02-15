/* Put your javascript in here */


const carousel = document.getElementById("carousel");
let position = 0;
let width = 130; // image width
let count = 3; // visible images count

function moveCarousel(event) {
  if (event.target.classList.contains("nabContainer__arrow_right")) {
    position = position - width * count;
    event.currentTarget.querySelector(
      ".slidesContainer__ul"
    ).style.transform = `translateX(${position}px)`;
  }
  if (event.target.classList.contains("nabContainer__arrow_left")) {
    position = position + width * count;
    event.currentTarget.querySelector(
      ".slidesContainer__ul"
    ).style.transform = `translateX(${position}px)`;
  }

  console.log(position);
}

carousel.addEventListener("click", moveCarousel);
