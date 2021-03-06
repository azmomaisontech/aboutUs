// Photo Animation
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

// NAV
function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu li");

  burger.addEventListener("click", navbutton);

  function navbutton(e) {
    e.preventDefault();
    nav.classList.toggle("nav-active");

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade .5s ease-in-out forwards ${index / 7 + 1}s`;
      }
    });

    // Animate Burger

    burger.classList.toggle("toggle");
  }
}

navSlide();
