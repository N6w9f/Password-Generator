/* ===== All Variables ===== */
const password = document.querySelector(".password");
const generate = document.querySelector(".generate");
const length = document.querySelector(".length-input");
const lowerCheck = document.querySelector(".lowercase");
const upperCheck = document.querySelector(".uppercase");
const numbersCheck = document.querySelector(".numbers");
const symbolsCheck = document.querySelector(".symbols");
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "123456789";
const symbols = "!@#$%&";
const settings = Array.from(
  document.querySelectorAll(".settings ul li .check")
);
/* ===== Events & Functions ===== */
window.onload = () => {
  passwordGen();
};
length.addEventListener("input", () => {
  const lengthNumber = document.querySelector(".length-number");
  lengthNumber.textContent = length.value;
  passwordGen();
});
generate.addEventListener("click", () => {
  passwordGen();
});
// === Set Active Class
settings.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    ele.classList.toggle("active");
    passwordGen();
  });
});
//  === Functions
function passwordGen() {
  password.textContent = "";
  let checkedCharacter = "";
  if (lowerCheck.classList.contains("active")) {
    checkedCharacter += lowercase;
  }
  if (upperCheck.classList.contains("active")) {
    checkedCharacter += uppercase;
  }
  if (numbersCheck.classList.contains("active")) {
    checkedCharacter += numbers;
  }
  if (symbolsCheck.classList.contains("active")) {
    checkedCharacter += symbols;
  }
  if (
    !lowerCheck.classList.contains("active") &&
    !upperCheck.classList.contains("active") &&
    !numbersCheck.classList.contains("active") &&
    !symbolsCheck.classList.contains("active")
  ) {
    password.textContent = "Please Check One Of The Options";
  } else {
    for (let i = 0; i < length.value; i++) {
      password.textContent +=
        checkedCharacter[Math.floor(Math.random() * checkedCharacter.length)];
    }
  }
}
