const carSpeed = document.querySelector(".carSpeed");
const speedButton = document.querySelector(".speedCalc");
const getSpeed = document.querySelector(".getSpeed");

function calculateCarSpeed() {
  const speedOfCar = parseFloat(carSpeed.value);
  let speed = "";

  let points = 1;
  // while (points <= 1 && speedOfCar >= 70) {
  //   points++;
  // }

  if (speedOfCar <= 70) {
    speed = "OK";
    getSpeed.innerHTML = `Speed = ${speed}`;
  } else if (speedOfCar >= 70 && speedOfCar <= 75) {
    points = 1;
    speed = getSpeed.innerHTML = `Speed = ${points} Demerit point`;
  } else if (speedOfCar >= 75 && speedOfCar <= 80) {
    points = 2;
    speed = getSpeed.innerHTML = `Speed = ${points} Demerit points`;
  } else if (speedOfCar >= 80 && speedOfCar <= 85) {
    points = 3;
    speed = getSpeed.innerHTML = `Speed = ${points} Demerit points`;
  } else if (speedOfCar >= 85 && speedOfCar <= 90) {
    points = 4;
    speed = getSpeed.innerHTML = `Speed = ${points} Demerit points`;
  } else if (speedOfCar >= 90 && speedOfCar <= 95) {
    points = 5;
    speed = getSpeed.innerHTML = `Speed = ${points} Demerit points`;
  } else if (speedOfCar >= 95 && speedOfCar <= 100) {
    points = 6;
    speed = getSpeed.innerHTML = `Speed = ${points} Demerit points`;
  } else if (speedOfCar >= 100 && speedOfCar <= 105) {
    points = 7;
    speed = getSpeed.innerHTML = `Speed = ${points} Demerit points`;
  } else if (speedOfCar >= 105 && speedOfCar <= 110) {
    points = 8;
    speed = getSpeed.innerHTML = `Speed = ${points} Demerit points`;
  } else if (speedOfCar >= 110 && speedOfCar <= 115) {
    points = 9;
    speed = getSpeed.innerHTML = `Speed = ${points} Demerit points`;
  } else if (speedOfCar >= 115 && speedOfCar <= 120) {
    points = 10;
    speed = getSpeed.innerHTML = `Speed = ${points} Demerit points`;
  } else if (speedOfCar >= 120 && speedOfCar <= 125) {
    points = 11;
    speed = getSpeed.innerHTML = `Speed = ${points} Demerit points`;
  } else if (speedOfCar >= 125 && speedOfCar <= 130) {
    points = 12;
    speed =
      getSpeed.innerHTML = `Speed = ${points} Demerit points. License suspended`;
  } else {
    getSpeed.innerHTML = "Speed = License suspended";
  }
}

speedButton.addEventListener("click", function () {
  calculateCarSpeed();
});
