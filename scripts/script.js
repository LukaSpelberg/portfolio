window.addEventListener('load', () => {
    const preloader = document.querySelector('.preLoader');
    const mainContent = document.querySelectorAll('header, footer, main');
    const video = document.querySelector('video');

    // Detect if the user is on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        video.src = 'https://lukaspelberg.github.io/portfolio/videos/loader2Mobiel.mp4';
    }

    // Determine the timeout durations based on the document
    let backgroundTimeout = 1000;
    let preloaderTimeout = 2000;

    console.log('document.location.pathname:', document.location.pathname);

    if (document.location.pathname === '/' || document.location.pathname.endsWith('index.html')) {
        backgroundTimeout = 2000; 
        preloaderTimeout = 5000;  

        if (isMobile) {
            video.src = 'https://lukaspelberg.github.io/portfolio/videos/loaderMobiel.webm';
        }
    }

    // Add background and display classes after the specified background timeout
    setTimeout(() => {
        document.body.classList.add('background');
        mainContent.forEach(element => element.classList.add('display'));
    }, backgroundTimeout);

    // Hide preloader after the specified preloader timeout
    setTimeout(() => {
        preloader.style.display = 'none';
    }, preloaderTimeout);
});
