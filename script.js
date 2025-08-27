// Smooth scroll to contact section
function scrollToContact() {
  document.getElementById("contato").scrollIntoView({
    behavior: "smooth",
  });
}

// Open WhatsApp
function openWhatsApp() {
  // Replace with your actual WhatsApp number
  window.open(
    "https://wa.me/5534988565334?text=Olá! Gostaria de agendar um horário para extensão de cílios.",
    "_blank"
  );
}

// Open Instagram
function openInstagram() {
  // Replace with your actual Instagram profile
  window.open("https://instagram.com/stefanirezende_lash", "_blank");
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
}
