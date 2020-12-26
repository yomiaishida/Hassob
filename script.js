const genderEl = document.getElementById("gender");
const positionEl = document.getElementById("question2");
const interestEl = document.getElementById("interest");
const emailEl = document.getElementById("email");
const subBtn = document
  .querySelector("#submit")
  .addEventListener("click", submit);
let radBtn = document.getElementsByClassName("rad");
let ckBoxes = document.getElementsByName("ck");

console.log(emailEl.type);

const question1 = genderEl.value;
const question2 = positionEl.value;
const question3 = interestEl.value;
const question4 = emailEl.type;

const newCard = {
  question1: null,
  question2: null,
  question3: [],
  question4: null,
};

function checkforblank() {
  var position = document.getElementById("position");
  var invalid = position.value == "Please Select";

  if (invalid) {
    alert("Please select position");
  } else {
    newCard.question2 = position.value;
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
      if (checkbox.checked) newCard.question3.push(checkbox.value);
    }
  }

  return valid;
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
    newCard.question1 = selectedVal.value;
  } else alert("please...");

  // Check for blank select dropdown
  checkforblank();

  // Validate that at least one checkbox is selected
  validate_form();

  console.log(newCard);
}
