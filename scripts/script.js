window.addEventListener('load', () => {
    const preloader = document.querySelector('.preLoader');
    const mainContent = document.querySelectorAll('header, footer, main');
    const video = document.querySelector('video');

    // Detect if the user is on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

 
    if (isMobile) {
        if (path.includes('Persona.html')) {
            video.src = '..videos/loader2Mobiel.mp4';
        } else if (path.includes('dynamo.html')) {
            video.src = '..videos/loader2Mobiel.mp4';
        } else if (path.includes('PublicCityJazz.html')) {
            video.src = '..videos/loader2Mobiel.mp4';
        } else if (path.includes('cases.html')) {
            video.src = '..videos/loader2Mobiel.mp4';
        } else {
            video.src = 'https://lukaspelberg.github.io/portfolio/videos/loaderMobiel.webm';
        }
    }

    // Determine the timeout durations based on the document
    let backgroundTimeout = 2000;
    let preloaderTimeout = 5000;

    if (document.location.pathname.includes('Persona.html') || 
        document.location.pathname.includes('dynamo.html') || 
        document.location.pathname.includes('PublicCityJazz.html') || 
        document.location.pathname.includes('cases.html')) {
        backgroundTimeout = 500; 
        preloaderTimeout = 3000;  
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
