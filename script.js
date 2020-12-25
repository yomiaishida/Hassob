const subBtn = document
  .querySelector("#submit")
  .addEventListener("click", submit);

function submit(e) {
  let radBtn = document.getElementsByClassName("rad");

  e.preventDefault;

  let sel;
  for (i = 0; i < radBtn.length; i++) {
    if (radBtn[i].checked) {
      sel = radBtn[i];
      break;
    }
  }

  if (sel) {
    console.log(sel.value);
  } else alert("please...");
}
