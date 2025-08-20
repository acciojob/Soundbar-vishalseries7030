//your JS code here. If required.
const sounds = ["sound1", "sound2", "sound3"]; 
// make sure you have sound1.mp3, sound2.mp3, sound3.mp3 in the "sounds" folder

const buttonsContainer = document.getElementById("buttons");

let currentAudio = null;

// Create a button for each sound
sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(`./sounds/${sound}.mp3`);
    currentAudio.play();
  });

  buttonsContainer.appendChild(btn);
});

// Create stop button
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "Stop";

stopBtn.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});

buttonsContainer.appendChild(stopBtn);
