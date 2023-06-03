window.addEventListener("keydown", (event) => {
  const audio = document.querySelector(`audio.${event.code}`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();

  const key = document.querySelector(`div.${event.code}`);
  key.classList.add("playing");

  function removeTransition(event) {
    if (event.propertyName !== "transform") {
      return;
      }
      this.classList.remove('playing')
  }

  const keys = document.querySelectorAll("div.key");
  keys.forEach((key) => {
    key.addEventListener("transitionend", removeTransition);
  });
});
