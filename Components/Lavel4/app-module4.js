document.getElementById("submit-btn").addEventListener("click", function () {
  let code = document.getElementById("html-code").value;

  // Tekshiruv - foydalanuvchi ol, ul va li elementlarini ishlatganmi
  if (
    code.includes("<ol>") &&
    code.includes("</ol>") &&
    code.includes("<ul>") &&
    code.includes("</ul>") &&
    code.includes("<li>") &&
    code.includes("</li>")
  ) {
    document.getElementById("result").textContent =
      "Great job! You've created both ordered and unordered lists correctly.";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent =
      "Oops! Make sure to use both <ol> and <ul> tags, and include <li> items inside them.";
    document.getElementById("result").style.color = "red";
  }
});
