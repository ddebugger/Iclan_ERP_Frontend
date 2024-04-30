let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

let menu = "<svg id='btn' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M4.01221 5.75586H18.2368M4.01221 11.0901H18.2368M4.01221 16.4243H18.2368' stroke='#545F71' stroke-width='1.77808' stroke-linecap='round' stroke-linejoin='round'/> </svg>";
let closeMenu = "<svg id='btn' width='23' height='15' viewBox='0 0 23 15' fill='none' xmlns='http://www.w3.org/2000/svg'> <rect x='0.599609' y='0.5' width='21.6633' height='2' fill='#004F71'/> <rect x='5.17383' y='6.5' width='17.0916' height='2' fill='#004F71'/> <rect x='10.9414' y='12.5' width='11.3233' height='2' fill='#004F71'/> </svg>"

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
