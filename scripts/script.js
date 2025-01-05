window.addEventListener('load', () => {
    const preloader = document.querySelector('.preLoader');
    const mainContent = document.querySelectorAll('header, footer, main');
    const video = document.querySelector('video');

    // Check if the video source is 'videos/loaderFinal.webm'
    if (video.src.includes('videos/loaderFinal.webm')) {
        // Add background and display classes after 2000 milliseconds
        setTimeout(() => {
            document.body.classList.add('background');
            mainContent.forEach(element => element.classList.add('display'));
        }, 2000);

        // Hide preloader after 5000 milliseconds
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 5000);
    } else {
        // Detect if the user is on a mobile device
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            video.src = 'https://lukaspelberg.github.io/portfolio/videos/loader2final.mp4';
        }

        // Add background and display classes after 2000 milliseconds
        setTimeout(() => {
            document.body.classList.add('background');
            mainContent.forEach(element => element.classList.add('display'));
        }, 2000);

        // Hide preloader after 5000 milliseconds
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 5000);
    }
})
