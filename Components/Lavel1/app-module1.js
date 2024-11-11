document.getElementById("submit-btn").addEventListener("click", function () {
  let code = document.getElementById("html-code").value;

  // Oddiy tekshirish - foydalanuvchi to'g'ri elementlarni ishlatganmi
  if (
    code.includes("<html>") &&
    code.includes("</html>") &&
    code.includes("<head>") &&
    code.includes("</head>") &&
    code.includes("<title>") &&
    code.includes("</title>")
  ) {
    document.getElementById("result").textContent =
      "Well done! You've correctly structured the HTML document.";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent =
      "Oops! Please make sure you include <html>, <head>, and <title> tags.";
    document.getElementById("result").style.color = "red";
  }
});
