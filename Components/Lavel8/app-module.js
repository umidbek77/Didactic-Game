document.getElementById("submit-btn").addEventListener("click", function () {
  let cssCode = document.getElementById("css-code").value;

  // Dynamic CSS qo'llash
  let styleElement = document.createElement("style");
  styleElement.innerHTML = cssCode;
  document.head.appendChild(styleElement);

  // Tekshiruv - foydalanuvchi rang, shrift hajmi va orqa fonni sozlaganmi
  if (
    cssCode.includes("color") &&
    cssCode.includes("font-size") &&
    cssCode.includes("background-color")
  ) {
    document.getElementById("result").textContent =
      "Great! You've successfully styled the text.";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent =
      "Oops! Make sure to include color, font-size, and background-color properties.";
    document.getElementById("result").style.color = "red";
  }
});
