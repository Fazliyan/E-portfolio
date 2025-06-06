document.addEventListener('DOMContentLoaded', function () {

  // Smooth scroll for sidebar links
  document.querySelectorAll('aside.sidebar a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Section reveal on scroll
  document.querySelectorAll('section').forEach(sec => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) sec.classList.add('visible');
    }, { threshold: 0.3 });
    obs.observe(sec);
  });

  // Recommendations modal
  const recBtn2 = document.getElementById('recBtn2'); // Correct reference to 'View Recommendations' button
  const modal = document.getElementById('recModal');
  const closeModal = document.getElementById('closeModal');
  
  // Open modal when clicking 'View Recommendations' button
  recBtn2.addEventListener('click', e => {
    e.preventDefault();
    modal.classList.add('active'); // Show modal
  });
  
  // Close modal when clicking the '✕' close button
  closeModal.addEventListener('click', () => modal.classList.remove('active')); // Close modal

  // Close modal if clicked outside of modal content
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // Back to top button functionality
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('show', window.scrollY > 300); // Show button when scrolled down
  });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' })); // Scroll to top when clicked

  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode'); // Toggle between light and dark mode
  });
});
