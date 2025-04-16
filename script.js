function openLetter() {
  document.querySelector(".letter-container").style.display = "none";
  document.getElementById("popup1").classList.remove("hidden");
}

function nextPopup(n) {
  document.getElementById("popup" + (n - 1)).classList.add("hidden");
  document.getElementById("popup" + n).classList.remove("hidden");
}

function finalPopup() {
  document.getElementById("popup3").classList.add("hidden");
  document.getElementById("popup-final").classList.remove("hidden");
}

function replay() {
  location.reload();
}
