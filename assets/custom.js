document.addEventListener("DOMContentLoaded", () => {
    console.log("hello")
    const stickyHeader = document.querySelector(".header-wrapper");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        stickyHeader.classList.add("scrolled");
      } else {
        stickyHeader.classList.remove("scrolled");
      }
    });
  });
  