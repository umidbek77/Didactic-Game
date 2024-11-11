document.getElementById("submit-btn").addEventListener("click", function () {
  let code = document.getElementById("html-code").value;

  // Tekshiruv - foydalanuvchi form, input va button elementlarini ishlatganmi
  if (
    code.includes("<form>") &&
    code.includes("</form>") &&
    code.includes('type="text"') &&
    code.includes('type="email"') &&
    code.includes('type="password"') &&
    code.includes("<button")
  ) {
    document.getElementById("result").textContent =
      "Excellent! You've created a form with the correct inputs and a submit button.";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent =
      "Oops! Make sure your form includes text, email, and password inputs, along with a submit button.";
    document.getElementById("result").style.color = "red";
  }
});
