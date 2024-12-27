window.addEventListener('DOMContentLoaded', () => {
  const preloader = document.querySelector('.preLoader');
  const video = document.querySelector('.preLoader video');

  // Function to set the video source based on screen width
  const setVideoSource = () => {
    if (window.innerWidth < 1000) {
      video.src = 'videos/loaderMobile.webm'; // Mobile version of the video
      console.log('Mobile video source set');
    } else {
      video.src = 'videos/loaderFinal.webm'; // Desktop version of the video
      console.log('Desktop video source set');
    }
    video.load(); // Force the video to reload with the new source
  };

  // Set the initial video source
  setVideoSource();

  // Update the video source on window resize
  window.addEventListener('resize', setVideoSource);

  setTimeout(() => {
    preloader.style.display = 'none';
    video.style.display = 'block';
  }, 5000); 
});