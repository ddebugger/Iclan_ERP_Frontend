const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");
const modal = document.getElementById("modal");

openModalButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Optional: Close modal on Escape key press
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});
