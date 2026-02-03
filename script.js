const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
const demoButton = document.getElementById("demoButton");
const demoModal = document.getElementById("demoModal");
const modalClose = document.getElementById("modalClose");
const signupForm = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

demoButton.addEventListener("click", () => {
  demoModal.classList.add("active");
  demoModal.setAttribute("aria-hidden", "false");
});

const closeModal = () => {
  demoModal.classList.remove("active");
  demoModal.setAttribute("aria-hidden", "true");
};

modalClose.addEventListener("click", closeModal);

demoModal.addEventListener("click", (event) => {
  if (event.target === demoModal) {
    closeModal();
  }
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(signupForm).get("email");
  formMessage.textContent = `${email} で無料トライアルを開始しました！`;
  signupForm.reset();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    nav.classList.remove("active");
  }
});
