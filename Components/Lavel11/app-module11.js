document.getElementById("submit-btn").addEventListener("click", function () {
  let cssCode = document.getElementById("css-code").value;

  // Dynamic CSS qo'llash
  let styleElement = document.createElement("style");
  styleElement.innerHTML = cssCode;
  document.head.appendChild(styleElement);

  // Tekshiruv - foydalanuvchi @keyframes yoki transform atributlarini ishlatganmi
  if (cssCode.includes("@keyframes") || cssCode.includes("transform")) {
    document.getElementById("result").textContent =
      "Great job! You've successfully created animations.";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent =
      "Oops! Make sure to include @keyframes and transform properties.";
    document.getElementById("result").style.color = "red";
  }
});
