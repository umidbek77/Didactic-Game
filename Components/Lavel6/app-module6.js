document.getElementById("submit-btn").addEventListener("click", function () {
  let code = document.getElementById("html-code").value;

  // Tekshiruv - foydalanuvchi video va audio elementlarini ishlatganmi
  if (
    code.includes("<video") &&
    code.includes("controls") &&
    code.includes("<audio") &&
    code.includes("controls")
  ) {
    document.getElementById("result").textContent =
      "Great job! You've added both a video and an audio element with controls.";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent =
      "Oops! Make sure to add both <video> and <audio> elements with the 'controls' attribute.";
    document.getElementById("result").style.color = "red";
  }
});
