// Mobile menu display control
function openNav() {
  document.getElementById("menu").style.margin = "0";
  document.getElementById("menu-icon-open").style.display = "none";
  document.getElementById("menu-icon-close").style.display = "block";
}

function closeNav() {
  document.getElementById("menu").style.margin = "-100vh 0";
  document.getElementById("menu-icon-close").style.display = "none";
  document.getElementById("menu-icon-open").style.display = "block";
}

// Desktop menu hover border
const menuItems = document.querySelectorAll('.nav-item');
const activeBorder = document.createElement('div');
activeBorder.classList.add('active-border');
document.querySelector('#nav-menu').appendChild(activeBorder);

function updateBorder(item) {
    const { offsetLeft, offsetWidth } = item;
    activeBorder.style.width = `${offsetWidth}px`;
    activeBorder.style.left = `${offsetLeft}px`;
}

activeBorder.style.width = '0'; // Ensure the border is hidden initially

menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        activeBorder.style.width = '0'; // Hide the border initially
        updateBorder(item);
        activeBorder.style.width = `${item.offsetWidth}px`; // Show the border
    });
});

document.querySelector('#nav-menu').addEventListener('mouseleave', () => {
    activeBorder.style.width = '0'; // Hide the border when not hovering
});
