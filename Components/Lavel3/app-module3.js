document.getElementById("submit-btn").addEventListener("click", function () {
  let code = document.getElementById("html-code").value;

  // Tekshiruv - foydalanuvchi img tagi va kerakli atributlarni ishlatganmi
  if (code.includes("<img") && code.includes("src=") && code.includes("alt=")) {
    document.getElementById("result").textContent =
      "Well done! You've successfully added an image with the correct attributes.";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent =
      "Oops! Make sure to include an <img> tag with both src and alt attributes.";
    document.getElementById("result").style.color = "red";
  }
});
