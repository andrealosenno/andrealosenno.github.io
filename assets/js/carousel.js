var words = ["Benvenutə!", "Welcome!", "Willkommen!", "Merhba!", "Welkom!", "Bem-vinda!", "Croeso!", "Fáilte!"];
var counter = 0;
var word = document.getElementById("carousel-words");
setInterval(update_carousel_words, 1000);
function update_carousel_words(){
  word.innerHTML = words[counter];
  counter++;
  if(counter >= 8){
    counter = 0;
  }
}