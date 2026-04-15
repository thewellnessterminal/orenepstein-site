// Mobile nav toggle
function toggleNav() {
  document.querySelector('.nav').classList.toggle('nav-open');
}

// Sector tab switching (only used on sectors page)
function showSector(id, btn) {
  document.querySelectorAll('.sector-detail').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.snav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('s-' + id).classList.add('active');
  btn.classList.add('active');
}

// Close mobile nav when clicking a link
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      document.querySelector('.nav').classList.remove('nav-open');
    });
  });
});
