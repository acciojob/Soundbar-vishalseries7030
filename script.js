// List of sounds (कम से कम 6 sounds Cypress test ke liye)
const sounds = ["sound1", "sound2", "sound3", "sound4", "sound5", "sound6"];

// Buttons container create karo
const container = document.createElement("section");
container.id = "buttons";
document.body.appendChild(container);

let currentAudio = null;

// Har sound ke liye button banao
sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.className = "btn";
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

  container.appendChild(btn);
});

// Stop button banao
const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.innerText = "Stop";

stopBtn.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});

container.appendChild(stopBtn);
