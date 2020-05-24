const slider2 = document.getElementById("slider2");
const slider3 = document.getElementById("slider3");
const slider5 = document.getElementById("slider5");
const slider6 = document.getElementById("slider6");

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

slider5.oninput = function () {
  let color = `linear-gradient(rgb(235, 19, 3, 0.8), rgb(179, 15, 3, 0.8)) no-repeat 0% / ${slider5.value}%`;

  slider5.style.background = color;
};

slider6.oninput = function () {
  let color = `linear-gradient(rgb(3, 181, 235, 0.8), rgb(3, 137, 179, 0.8))
  no-repeat 0% /${slider6.value}%`;

  slider6.style.background = color;
};
