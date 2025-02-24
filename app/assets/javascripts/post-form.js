const titleInput = document.querySelector("#post_title");
const bodyInput = document.querySelector("#post_body");

const titleLength = document.querySelector("#title-length");
const bodyLength = document.querySelector("#body-length");

document.addEventListener("DOMContentLoaded", (_e) => {
  titleLength.textContent = `${titleInput.value.length}/${titleInput.maxLength}`;
  bodyLength.textContent = `${bodyInput.value.length}/${bodyInput.maxLength}`;
})

titleInput.addEventListener("input", (e) => {
  titleLength.textContent = `${e.target.value.length}/${e.target.maxLength}`;
});

bodyInput.addEventListener("input", (e) => {
  bodyLength.textContent = `${e.target.value.length}/${e.target.maxLength}`;
});
