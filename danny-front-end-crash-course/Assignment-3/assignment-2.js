// 1. Show a random activity suggestion with a button
const getActivityBtn = document.querySelector(".getActivityBtn");

let getActivityUrl = "https://www.boredapi.com/api/activity";

getActivityBtn.addEventListener("click", () => {
  getActivity();
});

function getActivity() {
  fetch(getActivityUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      alert(response.activity);
    });
}

// 2. Predict the age of a person’s name with a query string
const nameInput = document.querySelector(".name-input");
const predictAgeBtn = document.querySelector(".predict-age-btn");

predictAgeBtn.addEventListener("click", ()=> {
    predictAge();
})

function predictAge() {
  let name = nameInput.value;
  let predictAgeUrl = `https://api.agify.io/?name=${name}`;
  fetch(predictAgeUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      alert(`${name} is ${response.age} years old!`)
    });
}
