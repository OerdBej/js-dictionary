const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  let inpWord = document.getElementById("inp-word").value;
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
      <div class="word">
                <h3>${inpWord}</h3>

                <button onclick="playSound()">
                    <i class="fa-solid fa-volume-high"></i>
                </button>

            </div>

            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p> 
            </div>
            <p class="word-meaning">
        ${data[0].meanings[0].definitions[0].definition}
            </p>
            
            <div class="word-example">
            <p>${data[0].meanings[0].definitions[0].example || ""}</p>
<br/>
<p>${data[0].meanings[0].antonyms[0] || ""}</p>  
</div>`;

      // set song attribute

      sound.setAttribute("src", `${data[0].phonetics[1].audio}`);
      console.log(sound);
    });
});

function playSound() {
  console.log("Click here");
  sound.play();
}
