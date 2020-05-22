const slider1 = document.getElementById("slider1");
const fill = document.querySelector(".fill");

slider1.oninput = function () {
  fill.style.width = slider1.value + "%";
  console.log(slider1.value);
};
