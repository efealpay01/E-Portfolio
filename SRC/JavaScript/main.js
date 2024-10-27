const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_kztkhbd", // Service ID
      "template_3anrw8q", // Template ID
      "#contact-form", // Form ID
      "RA4d3gdqwd3hNjSzw" // Public key
    )
    .then(() => {
      contactMessage.textContent = "Message sent successfully";

      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000); // Clear message after 5 seconds

      contactForm.reset();
    })
    .catch((error) => {
      contactMessage.textContent = "Message failed to send!";
      console.error("EmailJS error:", error);
    });
};

// Add event listener to the form submit event
contactForm.addEventListener("submit", sendEmail);

//scrollup
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

//scroll section active link

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__list a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

//scroll reveal animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1200,
  delay: 400,
  reset: true,
});

sr.reveal(".perfil, .contact__form");
sr.reveal(".info", { origin: "left", delay: 800 });
sr.reveal(".skills", { origin: "left", delay: 1000 });
sr.reveal(".about", { origin: "right", delay: 1200 });
sr.reveal(".projects__card , .services__card, .experience__card", {
  interval: 100,
});
