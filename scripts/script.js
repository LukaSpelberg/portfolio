window.addEventListener('load', () => {
    const preloader = document.querySelector('.preLoader');
    const mainContent = document.querySelector('header footer main');
    const video = document.querySelector('.preLoader video');


    // Detect if the user is on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        video.src = '/videos/loaderMobiel.webm'; 
    }

    setTimeout(() => {
      preloader.style.display = 'none';
      mainContent.style.display = 'block';
    }, 5000); 
});
