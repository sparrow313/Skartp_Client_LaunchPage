const emailArray = [];

const Button = document.getElementById("inputButton");

function emailFunction() {
  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value;
  emailArray.push(emailValue);
  console.log(emailArray);
  return false;
}

Button.addEventListener("click", emailFunction);
