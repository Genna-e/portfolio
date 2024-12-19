const skillCards = document.querySelectorAll('.skill-card');
const aboutSection = document.getElementById('about');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Stop observing once shown
    }
  });
}, { threshold: 0.5 }); // Start animation when 50% of the section is visible

skillCards.forEach(card => {
  card.classList.add('hide'); // Initially hide the cards
  observer.observe(card);
});
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
// In your script.js
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Simulate a successful submission (replace with actual form handling logic)
    setTimeout(() => {
        alert('Your message has been sent! Thank you for contacting me.');
        contactForm.reset(); // Clear the form
    }, 1000); // Delay for 1 second to simulate processing
});
// ... (previous code for skill card animation and smooth scrolling) ...

// Project Card Animations
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)'; // Enlarge on hover
    card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; // Add a more prominent shadow
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)'; // Reset to original size
    card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'; // Reset to original shadow
  });
});
