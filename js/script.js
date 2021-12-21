function openNav() {
  document.getElementById("mySidenav").style.width = "30%";
  document.getElementById("sidenav-button").style.width = "0px";
  document.getElementById("sidenavclose").style.width = "70%";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("sidenav-button").style.width = "70px";
}