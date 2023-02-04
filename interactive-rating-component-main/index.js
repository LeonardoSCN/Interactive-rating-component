const mainContainer = document.getElementById("container")
const submitButton = document.getElementById("submit");
const thanks = document.querySelector(".container-thanks")
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");



submitButton.addEventListener("click", () => {
  thanks.classList.remove("thankYou");
  mainContainer.style.display = "none"
})

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  })
})