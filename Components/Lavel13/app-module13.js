document.getElementById("submit-btn").addEventListener("click", function () {
  let cssCode = document.getElementById("css-code").value;

  // Dynamic CSS qo'llash
  let styleElement = document.createElement("style");
  styleElement.innerHTML = cssCode;
  document.head.appendChild(styleElement);

  // Tekshiruv - foydalanuvchi transition va animation atributlarini ishlatganmi
  if (cssCode.includes("transition") && cssCode.includes("animation")) {
    document.getElementById("result").textContent =
      "Great job! You've mastered transitions and animations.";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent =
      "Make sure to include both transitions and animations.";
    document.getElementById("result").style.color = "red";
  }
});
