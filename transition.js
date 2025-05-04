function transition(s) {
    const screen = document.getElementById("transition-screen");
    const video = document.getElementById("transition-video");
  
    screen.classList.add("show");
    video.currentTime = 0; 
    video.play();
  
    setTimeout(() => {
      window.location.href = s;
    }, 200); 
  }