function toggle() {
  let currentStatus = window.getComputedStyle(toggleElement, null).display;
  console.log(currentStatus);
  if (currentStatus === "none") {
    console.log("inIf");
    toggleElement.style.display = "flex";
  } else {
    console.log(currentStatus);
    console.log("inElse");
    toggleElement.style.display = "none";
  }

  console.log(toggleElement);
}

let toggleElement = document.getElementById("clicked");

let toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", toggle);
let hide = document.getElementById('hide');

hide.addEventListener('click',toggle)