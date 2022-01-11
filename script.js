const rangeSlider = document.querySelector("input");
const valueEl = document.querySelector(".value");
valueEl.textContent = rangeSlider.value;

console.log(valueEl);

rangeSlider.oninput = function() {
    valueEl.textContent = this.value;
}