// 8a7761ae06924877b08922d7851c64b6

const audioEl = document.querySelector("audio");
const btn = document.querySelector("button");

function getVoice(joke) {
  VoiceRSS.speech({
    key: "8a7761ae06924877b08922d7851c64b6",
    src: joke,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

async function getJoke() {
  let joke = "";
  const url =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
  const data = await fetch(url).then((res) => res.json());

  if (data.type == "twopart") {
    joke = `${data["setup"]} ... ${data["delivery"]} `;
  } else {
    joke = `${data["joke"]} `;
  }
  getVoice(joke);
}
btn.addEventListener("click", () => {
  btn.disabled = true;
  getJoke();
});
audioEl.addEventListener("ended", () => {
  btn.disabled = false;
});
