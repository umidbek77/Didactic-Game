// Foydalanuvchini ro'yxatdan o'tkazish
async function registerUser() {
  const username = document.getElementById("register-username").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  try {
    const response = await fetch("https://your-server.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const result = await response.json();
    console.log(result); // Javobni konsolga chiqarish

    document.getElementById("message").innerText = result.message;

    // Agar ro'yxatdan o'tish muvaffaqiyatli bo'lsa, login formasiga o'tish
    if (result.success) {
      showLoginForm();
    }
  } catch (error) {
    console.error("Error:", error); // Xato haqida xabar
    document.getElementById("message").innerText =
      "Ro'yxatdan o'tishda xato yuz berdi.";
  }
}

// Foydalanuvchini tizimga kiritish
async function loginUser() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const response = await fetch("https://your-server.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const result = await response.json();
  if (result.success) {
    document.getElementById("message").innerText = "Login successful!";
  } else {
    document.getElementById("message").innerText = "Invalid login credentials.";
  }
}

// Ro'yxatdan o'tish formasi ko'rsatish
function showRegisterForm() {
  document.getElementById("login").style.display = "none";
  document.getElementById("register").style.display = "block";
  document.getElementById("message").innerText = "";
}

// Login formasi ko'rsatish
function showLoginForm() {
  document.getElementById("register").style.display = "none";
  document.getElementById("login").style.display = "block";
  document.getElementById("message").innerText = "";
}

function loginUser() {
  // Foydalanuvchi ma'lumotlarini olish
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Foydalanuvchi ma'lumotlarini tekshirish (o'zingizning tekshiruvingizni qo'shishingiz mumkin)
  if (email === "test@example.com" && password === "password123") {
    // Agar foydalanuvchi ma'lumotlari to'g'ri bo'lsa, keyingi sahifaga o'tkazish
    window.location.href = "../index.html"; // bu yerda "nextpage.html" ni kerakli sahifangizga o'zgartiring
  } else {
    // Xato haqida xabar berish
    document.getElementById("message").innerText =
      "Email yoki parol noto'g'ri!";
  }
}

function showRegisterForm() {
  document.getElementById("login").style.display = "none";
  document.getElementById("register").style.display = "block";
}

function showLoginForm() {
  document.getElementById("login").style.display = "block";
  document.getElementById("register").style.display = "none";
}

function registerUser() {
  // Ro'yxatdan o'tish funksiyasi
  // Bu yerda ro'yxatdan o'tish kodini qo'shishingiz mumkin
  alert("Ro'yxatdan o'tish funksiyasi hali yaratilmagan!");
}
