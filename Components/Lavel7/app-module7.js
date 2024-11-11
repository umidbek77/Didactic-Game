document.getElementById("submit-btn").addEventListener("click", function () {
  let code = document.getElementById("html-code").value;

  // Tekshiruv - foydalanuvchi table, tr, th va td elementlarini ishlatganmi
  if (
    code.includes("<table") &&
    code.includes("<tr>") &&
    code.includes("<th>") &&
    code.includes("<td>")
  ) {
    document.getElementById("result").textContent =
      "Excellent! You've created a table with the correct structure.";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent =
      "Oops! Make sure to include <table>, <tr>, <th>, and <td> tags to build your table.";
    document.getElementById("result").style.color = "red";
  }
});
