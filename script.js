const genderEl = document.getElementById("gender");
const positionEl = document.getElementById("question2");
const interestEl = document.getElementById("interest");
const emailEl = document.getElementById("email");
const subBtn = document
  .querySelector("#submit")
  .addEventListener("click", submit);
let radBtn = document.getElementsByClassName("rad");
let ckBoxes = document.getElementsByName("ck");
const bodyEl = document.querySelector("body");

const question1 = document.getElementById("gender").innerText;
const question2 = document.getElementById("question2").innerText;
const question3 = document.getElementById("interest").innerText;
const question4 = document.getElementById("question4").innerText;

const newCard = {};

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function checkforblank() {
  var position = document.getElementById("position");
  var invalid = position.value == "Please Select";

  if (invalid) {
    alert("Please select position");
  } else {
    newCard[question2] = position.value;
  }

  return !invalid;
}

function validate_form() {
  valid = true;

  if ($("input[type=checkbox]:checked").length == 0) {
    alert("ERROR! Please select at least one checkbox");
    valid = false;
  } else {
    for (let checkbox of ckBoxes) {
      if (checkbox.checked) {
        newCard[question3] = [];
        newCard[question3].push(checkbox.value);
      }
    }
  }

  return valid;
}

function emailValidation(email) {
  email = emailEl.value;
  if (email === "" || !isValidEmail(email)) {
    alert("Please type in a valid email address");
  } else {
    const emailValue = emailEl.value;
    console.log(emailValue);
    newCard[question4] = emailValue;
  }
}

function submit(e) {
  e.preventDefault();

  let selectedVal;
  for (i = 0; i < radBtn.length; i++) {
    if (radBtn[i].checked) {
      selectedVal = radBtn[i];
      break;
    }
  }

  if (selectedVal) {
    newCard[question1] = selectedVal.value;
  } else alert("please...");

  // Check for blank select dropdown
  checkforblank();

  // Validate that at least one checkbox is selected
  validate_form();

  emailValidation();

  // Display Success Message
  alert(`You've successfully filled the questionaire`);

  // Stringify Object
  const myObj = JSON.stringify(newCard);

  // Display on screen
  bodyEl.innerText = myObj;
  // Clear Card
  newCard = {};
}
