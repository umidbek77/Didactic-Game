document.getElementById("submit-btn").addEventListener("click", function () {
  let cssCode = document.getElementById("css-code").value;

  // Dynamic CSS qo'llash
  let styleElement = document.createElement("style");
  styleElement.innerHTML = cssCode;
  document.head.appendChild(styleElement);

  // Tekshiruv - foydalanuvchi margin, padding, border, width va height atributlarini ishlatganmi
  if (
    cssCode.includes("margin") &&
    cssCode.includes("padding") &&
    cssCode.includes("border") &&
    cssCode.includes("width") &&
    cssCode.includes("height")
  ) {
    document.getElementById("result").textContent =
      "Awesome! You've successfully styled the boxes with proper spacing and borders.";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent =
      "Oops! Make sure to include margin, padding, border, width, and height properties.";
    document.getElementById("result").style.color = "red";
  }
});
