const sounds = ["sound1", "sound2", "sound3", "sound4", "sound5", "sound6"];
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
    currentAudio.play().catch(err => {
      console.warn("Audio play failed:", err);
    });
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
