
document.addEventListener('DOMContentLoaded', function () {
  const overlay   = document.getElementById('overlayMenu');
  const openBtn   = document.getElementById('openMenuBtn');
  const closeBtn  = document.getElementById('closeMenuBtn');

  // Open the overlay menu
  openBtn.addEventListener('click', () => {
    overlay.style.height = '100%';
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
  });

  // Close the overlay menu
  closeBtn.addEventListener('click', () => {
    overlay.style.height = '0';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'block';
  });
});
