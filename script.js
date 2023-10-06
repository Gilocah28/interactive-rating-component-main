const mainContiner = document.querySelector(".rateStart_form");
const thanksContainer = document.querySelector(".rateResult");
const submitBtn = document.getElementById("btn_submit");
const sumitAgain = document.getElementById("submit_again");
const rating = document.getElementById("number_rate");
const ratesNumber = document.querySelectorAll(".btn_Number");

// Modify the Css of form to show form 2 and hide form 1
submitBtn.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden")
  mainContiner.style.display = "none"
})

// Modify the Css of form to show form 1 and hide form 2
sumitAgain.addEventListener("click", () => {
  thanksContainer.classList.add("hidden")
  mainContiner.style.display = "block"
  rating.innerHTML = "0"
})


// Get the the value of button number and pass to in another form using ID
ratesNumber.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
    
  })
})
















