document.getElementById("submit-btn").addEventListener("click", function () {
  let cssCode = document.getElementById("css-code").value;

  // Dynamic CSS qo'llash
  let styleElement = document.createElement("style");
  styleElement.innerHTML = cssCode;
  document.head.appendChild(styleElement);

  // Tekshiruv - foydalanuvchi @keyframes va animation atributlarini ishlatganmi
  if (cssCode.includes("@keyframes") && cssCode.includes("animation")) {
    document.getElementById("result").textContent =
      "Well done! You've mastered animations.";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent =
      "Make sure to use @keyframes and animation properties.";
    document.getElementById("result").style.color = "red";
  }
});
