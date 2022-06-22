const menuContainer = document.querySelector(".menu-container");
const menuItemsContainer = document.querySelector(".menu-items-container");

menuContainer.addEventListener("click", () => {
  menuContainer.classList.toggle("active");

  if (menuContainer.classList.contains("active")) {
    menuItemsContainer.classList.add("active");
  } else {
    menuItemsContainer.classList.remove("active");
  }
});
