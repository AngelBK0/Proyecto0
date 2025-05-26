document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('hotel-audio');
  const btn = document.getElementById('audio-btn');
  const icon = btn.querySelector('i');

  btn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      icon.classList.remove('fa-play');
      icon.classList.add('fa-pause');
    } else {
      audio.pause();
      icon.classList.remove('fa-pause');
      icon.classList.add('fa-play');
    }
  });

  audio.addEventListener('ended', () => {
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  });
});
