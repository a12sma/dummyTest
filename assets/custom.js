document.addEventListener("DOMContentLoaded", () => {
    const stickyHeader = document.querySelector(".header-wrapper");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        stickyHeader.classList.add("scrolled");
      } else {
        stickyHeader.classList.remove("scrolled");
      }
    });

    const details = document.querySelectorAll(".header__submenu details");
    details.forEach((detail)=>{
        detail.addEventListener('click', ()=>{

            details.forEach((secDetail)=>{
                if (secDetail != detail && secDetail.hasAttribute('open')) {
                    secDetail.removeAttribute('open')
                }
            })

        });
    })
  });

  