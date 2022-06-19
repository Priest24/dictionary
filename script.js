const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result")

const sound = document.getElementById("sound");

const btn = document.getElementById("search-btn"); btn.addEventListener("click", () => {var inpWord = document.getElementById("inp-word").value; fetch(`${url}${inpWord}`).then((response) => {return response.json();
})
.then((data) => {result.innerHTML = `<div class="word"><h3>${inpWord}</h3>
<button onClick="playSound()"> <i class=fas fa-volume-up"></i></button>
</div>
<div class="details">
<p>${data[0].meanings[0].partOfSpeech}</p></div>
<p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
<p class="word-example">${data[0].meanings[0].definitions[0].example||""}</p>
`;
var val = 'https://'+'${data[0].phonetics[0].audio}';
sound.src = '${val}'; 
})
.catch(err =>{if(inpWord==""){result.innerHTML=`<h3 class="error"
style="color:red;">please enter a valid word by filling the search bar!</h3>`;
navigator.vibrate(200)}
else{result.innerHTML = '<h3 class = "error" style="color:red;">Could not find the word!</h3>';navigator.vibrate(200)
}
});
});
function playSound() {
    sound.play();
}
