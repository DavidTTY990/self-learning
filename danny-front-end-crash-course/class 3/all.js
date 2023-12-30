const xhr = new XMLHttpRequest();

const method = "GET";
const url = "https://dog.ceo/api/breeds/image/random";

xhr.open(method, url);

xhr.onload = function () {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
  } else {
    console.error("Request failed. Status=", xhr.status);
  }
};

xhr.send();

// fetch

const fetchUrl = "https://dog.ceo/api/breeds/image/random";

fetch(fetchUrl)
  .then((response) => response.json())
  .then((data) => {
    const dogImg = document.querySelector("#dogImg");
    dogImg.src = data.message;
  });

function changeDoggy() {
  fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => {
      const dogImg = document.querySelector("#dogImg");
      dogImg.src = data.message;
    });
}
