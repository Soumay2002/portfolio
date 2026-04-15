// Scroll Fade Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 400;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show");
    }
  });
});


// Contact Form → Opens Email Client
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let receiver = "Soumayg2002@gmail.com";

  let mailtoLink =
    `mailto:${receiver}?subject=Portfolio Contact from ${name}` +
    `&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

  window.open(mailtoLink, "_blank");

  this.reset();
});
