document.getElementById("submit-btn").addEventListener("click", function () {
  let cssCode = document.getElementById("css-code").value;

  // Dynamic CSS qo'llash
  let styleElement = document.createElement("style");
  styleElement.innerHTML = cssCode;
  document.head.appendChild(styleElement);

  // Tekshiruv - foydalanuvchi position, float, display yoki flex atributlarini ishlatganmi
  if (
    cssCode.includes("position") ||
    cssCode.includes("float") ||
    cssCode.includes("display") ||
    cssCode.includes("flex")
  ) {
    document.getElementById("result").textContent =
      "Great job! You've positioned the elements correctly.";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent =
      "Oops! Make sure to include position, float, display, or flex properties.";
    document.getElementById("result").style.color = "red";
  }
});
