window.addEventListener("scroll", function() {
  const elements = document.querySelectorAll(".scroll-element");
  const scrollPosition = window.scrollY;

  elements.forEach(element => {
      if (scrollPosition >= 80) {
          element.style.opacity = "0";
      } else {
          element.style.opacity = "1";
      }
  });
});