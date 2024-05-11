import "./styles.css";

const hoverBtn = document.getElementById("hoverBtn");

hoverBtn.addEventListener("click", () => {
  const getHidden = document.querySelectorAll("a");
  getHidden.forEach((key) => {
    if (key.classList.contains("hidden")) {
      key.classList.remove("hidden");
    }
     else if (key.className === '') {
      key.classList.add("hidden");
    }
  });
});
