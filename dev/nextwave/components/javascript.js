function openNav() {
  document.getElementById("menu").style.margin = "0";
  document.getElementById("menu-icon-open").style.display = "none";
  document.getElementById("menu-icon-close").style.display = "block";
}

function closeNav() {
  document.getElementById("menu").style.margin = "-600px 0";
  document.getElementById("menu-icon-close").style.display = "none";
  document.getElementById("menu-icon-open").style.display = "block";
}