let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)

});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    // closeBtn.outerHTML = menu;
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
    // closeBtn.outerHTML = menu;
  }
}

function openTab(evt, tabTitle) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabTitle).style.display = "block";
  evt.currentTarget.className += " active";
}

function checkTask(task) {
  let checkbox1 = document.querySelector("#check-task1");
  let checkbox2 = document.querySelector("#check-task2");
  let checkbox3 = document.querySelector("#check-task3");

  if (task === 'task1') {
    if (checkbox1.checked) {
      document.getElementById(task).className += "line-through";
    } else {
      document.getElementById(task).className = "";
    }
  } else if (task === 'task2') {
    if (checkbox2.checked) {
      document.getElementById(task).className += "line-through";
    } else {
      document.getElementById(task).className = "";
    }
  } else if (task === 'task3') {
    if (checkbox3.checked) {
      document.getElementById(task).className += "line-through";
    } else {
      document.getElementById(task).className = "";
    }
  }


}
