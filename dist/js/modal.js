// Add New Project Modal
const openModalButton = document.getElementById("project-modal-btn");
const closeModalButton = document.getElementById("close-modal");
// const projectModalContent = document.getElementById("project-modal-content");
const modal = document.getElementById("project-modal")

openModalButton.addEventListener("click", () => {
  modal.style.display = "block"
  //  projectModalOverlay.style.display = "block";
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


// Add New Folder Modal
const openNewFolderModalBtn = document.getElementById("add-new-folder")
const closeNewFolderModalBtn = document.getElementById("close-folder-modal")
const folderModalContent = document.getElementById("folder-modal-content")
const overlay = document.getElementById("overlay");
 
openNewFolderModalBtn.addEventListener("click", () => {
  folderModalContent.style.display = "block";
  overlay.style.display = "block";
});

closeNewFolderModalBtn.addEventListener("click", () => {
  folderModalContent.style.display = "none"
})

