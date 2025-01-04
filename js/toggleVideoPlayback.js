function toggleVideoPlayback() {
  // Select the video element
  const video = document.querySelector("#hero-2219 video");

  // Add a click event listener to the video
  video.addEventListener("click", () => {
    // Check if the video is paused
    if (video.paused) {
      video.play(); // Play the video if it is paused
    } else {
      video.pause(); // Pause the video if it is playing
    }
  });
}
// Call the function to activate the event listener
toggleVideoPlayback();
