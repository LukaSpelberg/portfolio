const video = document.querySelector('video')
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

if (isMobile) {
    video.src = 'https://lukaspelberg.github.io/portfolio/videos/loader2Mobiel.mp4'
}

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preLoader')
    const mainContent = document.querySelectorAll('header, footer, main')

    let backgroundTimeout = 500
    let preloaderTimeout = 2000

    const path = document.location.pathname
    if (path === '/' || path === '/portfolio/' || path.endsWith('index.html')) {
        backgroundTimeout = 2000
        preloaderTimeout = 5000

        if (isMobile) {
            video.src = 'https://lukaspelberg.github.io/portfolio/videos/loaderMobiel.webm'
        }
    }

    setTimeout(() => {
        document.body.classList.add('background')
        mainContent.forEach(element => element.classList.add('display'))
    }, backgroundTimeout)

    setTimeout(() => {
        preloader.style.display = 'none'
    }, preloaderTimeout)
})
