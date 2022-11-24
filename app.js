// const emailArray = [];

// const emailValue = emailInput.value;
// const Button = document.getElementById("inputButton");

// function emailFunction() {
//   const emailInput = document.getElementById("email");
//   const emailValue = emailInput.value;
//   Button.innerHTML = "Thank you";
//   emailArray.push(emailValue);
//   console.log(emailArray);

//   return false;
// }

// Button.addEventListener("click", emailFunction);
const notifyBtn = document.getElementById("notify");
const check = document.getElementById("check");
const emailInput = document.getElementById("email");
const Button = document.getElementById("inputButton");
const response = document.getElementById("response");

Button.addEventListener("click", function () {
  const email = emailInput.value;
  if (validateEmail(email)) {
    response.innerHTML = "Hiya Cowboy, this email will work for us 🤠";
    Button.innerHTML = "Thank you";
  } else {
    response.innerHTML = "Sorry, this email is not cool enough 😩";
  }
});

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

notifyBtn.addEventListener("click", function () {
  if (emailInput.value) {
    notifyBtn.innerHTML = "You will be notified";
  }
});
