
  
  window.addEventListener('load', () => {
    const preloader = document.querySelector('.preLoader');
    const mainContent = document.querySelector('video');

    // Remove the preloader after 5 seconds or when the video ends
    setTimeout(() => {
      preloader.style.display = 'none';
      mainContent.style.display = 'block';
    }, 5000); // Adjust timing based on your animation length
  });
