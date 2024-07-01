// javascript for link section navigation
var linkContainer = document.getElementById("links"); //getting the entire ul by id
var linkItem = linkContainer.getElementsByClassName("link-item"); //passing the navContainer to each linkitem

// looping through it linkitem
for (var i = 0; i < linkItem.length; i++) {
  linkItem[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active-link");
    current[0].className = current[0].className.replace("active-link");
    this.className += " active-link";
  });
}

// javascript for tabs navigation
var navContainer = document.getElementById("menu"); //getting the entire ul by id
var navItem = navContainer.getElementsByClassName("tabs-item"); //passing the navContainer to each Navitem

// looping through it navitem
for (var i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active-item");
    current[0].className = current[0].className.replace("active-item");
    this.className += " active-item";
  });
}

function openTabs(event, tabName) {
  var i, tabcontent, tablinks;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the "active" class from all tab buttons
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active-item", "");
  }

  // Show the selected tab content
  document.getElementById(tabName).style.display = "grid";

  // Add the "active" class to the button that opened the tab
  event.currentTarget.className += " active-item";
}

// javascript for drag and drop a board element

let boardElements = document.getElementsByClassName("board-element");
let todoBoard = document.getElementById("todo");
let progressBoard = document.getElementById("progress");
let reviewBoard = document.getElementById("review");
let completedBoard = document.getElementById("completed");

for (boardElement of boardElements) {
  boardElement.addEventListener("dragstart", function (e) {
    let selected = e.target;

    progressBoard.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    progressBoard.addEventListener("drop", function (e) {
      progressBoard.appendChild(selected);
      selected = null;
    });
    todoBoard.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    todoBoard.addEventListener("drop", function (e) {
      todoBoard.appendChild(selected);
      selected = null;
    });
  });

  boardElement.addEventListener("dragstart", function (e) {
    let selected = e.target;

    reviewBoard.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    reviewBoard.addEventListener("drop", function (e) {
      reviewBoard.appendChild(selected);
      selected = null;
    });
    completedBoard.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    completedBoard.addEventListener("drop", function (e) {
      completedBoard.appendChild(selected);
      selected = null;
    });
  });
}
