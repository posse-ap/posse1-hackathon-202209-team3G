window.addEventListener("scroll", () => {
  const bottomBtn = document.getElementById("main_bottom");
  const scroll = window.pageYOffset;
  if (scroll > 2000) {
    bottomBtn.style.opacity = 0.5;
  } else {btn.style.opacity = 0;}
});