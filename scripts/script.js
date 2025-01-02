window.addEventListener('load', () => {
    const preloader = document.querySelector('.preLoader')
    const mainContent = document.querySelectorAll('header, footer, main')
    const video = document.querySelector('video')


    // Detect if the user is on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (isMobile) {
      video.src = 'https://lukaspelberg.github.io/portfolio/videos/loaderMobiel.webm';
    }

    setTimeout(() => {
      document.body.classList.add('background');
      mainContent.forEach(element => element.classList.add('display'));
      preloader.style.display = 'none'
      
    }, 5000)
})
