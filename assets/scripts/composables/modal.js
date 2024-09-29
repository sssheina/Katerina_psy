export const overlay = document.querySelector(".overlay");
export const modal = document.querySelector(".modal");
export const modalContent = document.querySelector(".modal-content");
export const buttonsClose = document.querySelector(".button-close");

export const openModal = () => {
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

export const closeModal = () => {
  overlay.classList.add("hidden");
  document.body.style.overflow = "";
};

buttonsClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !overlay.classList.contains("hidden")) {
    closeModal();
  }
});
