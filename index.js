document.addEventListener("DOMContentLoaded", () => {
  let myButton = document.getElementById("btn");
  let rectangleDiv = document.querySelector(".rectangle");

  let moveLeft = true; // alternate left/right
  let isYellow = false; // color toggle

  const moveRectangle = (directionClass) => {
    rectangleDiv.classList.remove("addTransitionLeft", "addTransitionRight");

    setTimeout(() => {
      rectangleDiv.classList.add(directionClass);

      setTimeout(() => {
        rectangleDiv.classList.remove(directionClass);
      }, 2000);
    }, 20);
  };

  rectangleDiv.addEventListener("mouseenter", () => {
    if (moveLeft) {
      moveRectangle("addTransitionLeft");
    } else {
      moveRectangle("addTransitionRight");
    }
    // color flip every movement
    rectangleDiv.style.background = isYellow ? "#000" : "#f5ee62";
    isYellow = !isYellow;

    //after 2 second flip the color
    setTimeout(() => {
      rectangleDiv.style.background = isYellow ? "#000" : "#f5ee62";
      isYellow = !isYellow;
    }, 2000);

    moveLeft = !moveLeft;
  });

  // Button click → toggle between black & yellow
  myButton.addEventListener("click", () => {
    if (isYellow) {
      rectangleDiv.style.backgroundColor = "#000";
    } else {
      rectangleDiv.style.backgroundColor = "#f5ee62";
    }
    isYellow = !isYellow;
  });
});
