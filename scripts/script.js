
  
  window.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preLoader');
    const mainContent = document.querySelector('video');

    setTimeout(() => {
      preloader.style.display = 'none';
      mainContent.style.display = 'block';
    }, 5000); 
  });
