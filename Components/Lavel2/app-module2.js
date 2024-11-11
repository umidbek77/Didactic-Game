document.getElementById("submit-btn").addEventListener("click", function () {
  let code = document.getElementById("html-code").value;

  // Tekshiruv - foydalanuvchi h1 va p elementlarini ishlatganmi
  if (
    code.includes("<h1>") &&
    code.includes("</h1>") &&
    code.includes("<p>") &&
    code.includes("</p>")
  ) {
    document.getElementById("result").textContent =
      "Great! You've successfully added a heading and a paragraph.";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent =
      "Oops! Make sure to include both <h1> and <p> tags.";
    document.getElementById("result").style.color = "red";
  }
});
