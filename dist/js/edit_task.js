// JavaScript Code for the edit task modal

document.addEventListener("DOMContentLoaded", function () {
  
  const openModalBtn = document.getElementById("openModalBtn");
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  const closeButton = document.querySelector(".close");

  const checkboxTextContainer = document.querySelector(".checkbox-text-cover");
  const addSubtaskBtn = document.getElementById("addSubtaskBtn");
  let checkboxCounter = 5;

 // For Opening Modal
  openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
    overlay.style.display = "block";
  });

  closeButton.addEventListener("click", function() {
    modal.style.display = "none";
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", function() {
    modal.style.display = "none";
    overlay.style.display = "none";
  });

  // For adding new SubTasks
  addSubtaskBtn.addEventListener("click", function() {
     const newDiv = document.createElement("div");
    newDiv.className = "checkbox-text";
    
    const label = document.createElement("label");
    label.htmlFor = "checkbox" + checkboxCounter;
    label.className = "checkbox-label";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.id = "checkbox" + checkboxCounter

    const textarea = document.createElement("textarea");

    newDiv.appendChild(checkbox);
    newDiv.appendChild(label);
    newDiv.appendChild(textarea);

    checkboxTextContainer.appendChild(newDiv);
    checkboxCounter++;

  });



});