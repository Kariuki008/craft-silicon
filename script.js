// Countdown Timer
const countdown = () => {
    const matchDate = new Date('July 31, 2024 01:00:00').getTime();
    const now = new Date().getTime();
    const difference = matchDate - now;
  
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    document.getElementById('countdown').innerText = `${hours}h ${minutes}m ${seconds}s`;
  
    if (difference < 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdown').innerText = "MATCH STARTED";
    }
  };
  
  const countdownInterval = setInterval(countdown, 1000);

  // Auto-scroll players carousel
const playersCarousel = document.querySelector('.no-scrollbar');
let scrollAmount = 0;

setInterval(() => {
  playersCarousel.scrollBy(1, 0);
  scrollAmount += 1;
  if (scrollAmount >= playersCarousel.scrollWidth - playersCarousel.clientWidth) {
    playersCarousel.scrollTo(0, 0);
    scrollAmount = 0;
  }
}, 30);


  