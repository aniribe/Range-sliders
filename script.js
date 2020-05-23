// const slider1 = document.getElementById("slider1");
// const fill = document.querySelector(".fill");

const slider2 = document.getElementById("slider2");
const slider3 = document.getElementById("slider3");

// slider1.oninput = function () {
//   fill.style.width = slider1.value + "%";
//   console.log(slider1.value);
// };

slider2.oninput = function () {
  let color = `linear-gradient(
  90deg,
  rgb(217, 125, 13) ${slider2.value}%,
  rgb(68, 68, 68) ${slider2.value}%
)`;

  slider2.style.background = color;
};

slider3.oninput = function () {
  let color = `linear-gradient(#f8dd36, #d88606) no-repeat 0% / ${slider3.value}%`;

  slider3.style.background = color;
};
