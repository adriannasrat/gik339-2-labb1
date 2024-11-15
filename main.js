let checkbox = document.querySelector("input[name=divStyle]");
const textFields = document.querySelectorAll(".textfield");
const divElement = document.getElementById("divElement");
const button = document.getElementById("button");

textFields.forEach(el => {
    el.addEventListener('input', e => {
      console.log(e.target);
    })
  })
  