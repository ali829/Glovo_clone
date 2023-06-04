document.addEventListener("DOMContentLoaded", (e) => {
  // Add a scroll event listener to the body
  window.addEventListener("scroll", function (e) {
    const glv_text_mobile = document.querySelector(".glv-nav-text-mobile");
    const glv_text = document.querySelector(".glv-nav-text");
    const glv_adress_nav = document.querySelector(".glv-adress-nav");
    let scrollPosition = this.scrollY;
    if (scrollPosition >= 300) {
      glv_text.classList.add("scrolled");
      glv_text_mobile.classList.add("scrolled");
      glv_adress_nav.classList.add("scrolled");
    } else {
      glv_text.classList.remove("scrolled");
      glv_text_mobile.classList.remove("scrolled");
      glv_adress_nav.classList.remove("scrolled");
    }
  });
});
