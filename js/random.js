function uwu(){
var frase = ["Puro entretenimiento :)","Dale en <a href=\"https://github.com/tonicraft18\" style=\"text-decoration: none\">mi GitHub :D"+
"</a>","Junior Programmer","S&iacute;gueme tambi&eacute;n en twitter uwu","Buena m&uacute;sica&nbsp;&iquest;no bro?"]
var num = Math.random() * (5+1) - 1;
num = parseInt(num)
for (var i = 0; i < frase.length; i++) {
  if(num == i){
    document.getElementById("rand").innerHTML = frase[i];
    break;
  }
}
console.log(num)
}