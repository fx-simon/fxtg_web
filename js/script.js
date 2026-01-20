let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonValue = e.target.value;

    if (buttonValue === "AC") {
      input.value = "";
    } else if (buttonValue === "DE") {
      input.value = string.substring(0, string.length - 1);
    } else if (buttonValue === "=") {
      try {
        input.value = eval(input.value);
      } catch (error) {
        input.value = "Error";
      }
    } else {
      input.value += buttonValue;
    }
  });
});
