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

let boolVal = false;

let newCard = { [question3]: [] };

function radioBtnValidation() {
  let selectedVal;
  for (i = 0; i < radBtn.length; i++) {
    if (radBtn[i].checked) {
      selectedVal = radBtn[i];
      break;
    }
  }

  if (selectedVal) {
    newCard[question1] = selectedVal.value;
    boolVal = true;
  } else {
    boolVal = false;
    alert("please... Select a radio button");
  }
}

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function checkForBlankSelect() {
  let position = document.getElementById("position");
  let invalid = position.value == "Please Select";

  if (invalid) {
    boolVal = false;
    alert("Please select position");
  } else {
    newCard[question2] = position.value;
    boolVal = true;
  }

  return !invalid;
}

function validate_form() {
  valid = true;

  if ($("input[type=checkbox]:checked").length == 0) {
    alert("ERROR! Please select at least one checkbox");
    boolVal = false;
    valid = false;
  } else {
    for (let checkbox of ckBoxes) {
      if (checkbox.checked) {
        newCard[question3].push(checkbox.value);
        boolVal = true;
      }
    }
  }

  return valid;
}

function emailValidation(email) {
  email = emailEl.value;
  if (email === "" || !isValidEmail(email)) {
    alert("Please type in a valid email address");
    boolVal = false;
  } else {
    const emailValue = emailEl.value;
    console.log(emailValue);
    newCard[question4] = emailValue;
    boolVal = true;
  }
}

function formSubmition() {
  if (boolVal === true) {
    console.log(boolVal);
    // Display Success Message
    alert(`You've successfully filled the questionaire`);
    // Stringify Object
    const myObj = JSON.stringify(newCard);
    console.log(myObj);

    // Display on screen
    bodyEl.innerText = myObj;
    // Clear Card
    newCard = {};
  } else {
    console.log("wrong data");
  }
}

// Submit Event
function submit(e) {
  e.preventDefault();

  // Radio Button Validation
  radioBtnValidation();

  // Check for blank select dropdown
  checkForBlankSelect();

  // Validate that at least one checkbox is selected
  validate_form();

  // Email validation
  emailValidation();

  // Submission Action
  formSubmition();
}
