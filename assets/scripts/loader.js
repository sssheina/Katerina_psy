export const loading = () => {
  const loader = document.querySelector(".loader");

  window.onload = () => {
    setTimeout(function () {
      loader.style.display = "none";
    }, 2000);
  };
};
