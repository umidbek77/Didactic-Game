// Start button bosilganda animatsiya qo'shish
document.getElementById("start-btn").addEventListener("click", function () {
  document.getElementById("box-1").classList.add("animate");
  document.getElementById("box-2").classList.add("animate");
});

// Stop button bosilganda animatsiyani to'xtatish
document.getElementById("stop-btn").addEventListener("click", function () {
  document.getElementById("box-1").classList.remove("animate");
  document.getElementById("box-2").classList.remove("animate");
});

// Dynamic CSS qo'llash
document.getElementById("submit-btn").addEventListener("click", function () {
  let cssCode = document.getElementById("css-code").value;

  // CSS kodni qo'llash
  let styleElement = document.createElement("style");
  styleElement.innerHTML = cssCode;
  document.head.appendChild(styleElement);

  // Tekshiruv - foydalanuvchi to'g'ri kod yozganmi
  if (cssCode.includes("@keyframes") && cssCode.includes("animation")) {
    document.getElementById("result").textContent =
      "Great job! You've successfully controlled animations with JavaScript.";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent =
      "Make sure to include proper CSS animations and @keyframes.";
    document.getElementById("result").style.color = "red";
  }
});
