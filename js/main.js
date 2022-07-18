const menuItems = document.querySelectorAll(".menu-item");
const menuButton = document.querySelector("#menu-button");

menuButton.addEventListener("click", function () {
  document.body.classList.toggle("mobile-menu-active");
});

menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    document.body.classList.remove("mobile-menu-active");

    const currentItem = document.querySelector(".active");
    if (currentItem) {
      currentItem.classList.remove("active");
    }
    this.classList.add("active");
  });
});
