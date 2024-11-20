let checkbox = document.querySelector("input[name=divStyle]");
const textFields = document.querySelectorAll(".textfield");
const divElement = document.getElementById("divElement");
const button = document.getElementById("button");

checkbox.addEventListener('change', () => {
  divElement.style.backgroundColor = textFields[0].value;
});

function handleInput(e) {
  console.log(e.target);
  if (e.target.name === 'content') {
    divElement.innerHTML = e.target.value;
  }
}

textFields.forEach(field => {
  field.addEventListener('input', handleInput);
});

button.addEventListener('click', () => {
  divElement.remove();
});