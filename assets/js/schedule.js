const inagural = document.querySelector("#inagural");
const sidebarCards = document.querySelectorAll("#sidebar-card");

inagural.addEventListener("click", () => {
  sidebarCards[0].classList.add("hidden");
});
