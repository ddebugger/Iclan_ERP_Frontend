// Get the drop area element
const dropArea = document.getElementById("drop-area");

// Prevent default drag behaviors
["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, preventDefaults, false);
  document.body.addEventListener(eventName, preventDefaults, false);
});

// Highlight the drop area when a file is dragged over it
["dragenter", "dragover"].forEach((eventName) => {
  dropArea.addEventListener(eventName, highlight, false);
});

// Unhighlight the drop area when a file is dragged out of it
["dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, unhighlight, false);
});

// Handle file drop
dropArea.addEventListener("drop", handleDrop, false);

// Handle file select by clicking "SELECT FILE"
const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", handleFileSelect, false);

// Handle file drop or select
function handleFiles(files) {
  // Check if any files were selected or dropped
  if (files.length > 0) {
    const file = files[0];

    // Check the file size
    const fileSize = file.size / (1024 * 1024); // Convert bytes to megabytes
    if (fileSize > 10) {
      alert("File size exceeds the limit of 10MB.");
      return;
    }

    // Display file name and size
    const uploadName = document.querySelector(".upload-name");
    const uploadSize = document.querySelector(".upload-size");
    uploadName.textContent = file.name;
    uploadSize.textContent = `${fileSize.toFixed(2)} MB`;

    // Perform the file upload
    uploadFile(file);
  }
}

// Handle file drop event
function handleDrop(event) {
  const files = event.dataTransfer.files;
  handleFiles(files);
}

// Handle file select event
function handleFileSelect(event) {
  const files = event.target.files;
  handleFiles(files);
}

// Prevent default drag behaviors
function preventDefaults(event) {
  event.preventDefault();
  event.stopPropagation();
}

// Highlight the drop area
function highlight() {
  dropArea.classList.add("highlight");
}

// Unhighlight the drop area
function unhighlight() {
  dropArea.classList.remove("highlight");
}

// Upload the file
function uploadFile(file) {
  const progressBar = document.getElementById("progress-bar");
  const uploadInfo = document.getElementById("upload-info");

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/upload", true);

  // Update progress bar while uploading
  xhr.upload.onprogress = function (event) {
    const percent = (event.loaded / event.total) * 100;
    progressBar.value = percent;
    uploadInfo.textContent = `${percent.toFixed(2)}%`;
  };

  // Upload complete
  xhr.onload = function () {
    if (xhr.status === 200) {
      // File upload successful
      progressBar.value = 100;
      uploadInfo.textContent = "Upload Complete";
    } else {
      // File upload failed
      uploadInfo.textContent = `Upload Failed: ${xhr.status} - ${xhr.responseText}`;
    }
  };

  // Upload error
  xhr.onerror = function () {
    uploadInfo.textContent = `Upload Failed: ${xhr.status} - ${xhr.responseText}`;
  };

  // Send the request
  const formData = new FormData();
  formData.append("file", file);
  xhr.send(formData);
}
