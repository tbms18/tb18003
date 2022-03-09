console.error("HTTPS error, given by matrenas@tcd.org")

window.addEventListener("load",() => {
  var frase = ["Puro entretenimiento :)","Dale en <a href=\"https://github.com/tonicraft18\" style=\"text-decoration: none\">mi GitHub :D"+
  "</a>","Junior Programmer","S&iacute;gueme tambi&eacute;n en twitter uwu","Buena m&uacute;sica&nbsp;&iquest;no bro?","Web Deevelopeeer",
  "Música: Casin - glue70","Ingeniero en camino :D","Periodic Hour?","uwu","Energy = Much * Coffe^2","idk what put here","git commit -m "+
  "\"añadiendo bugs y novedades :P\"","Pulsa algún botón de aquí abajo :P","Frases random, no está mal eh?","¿Copia de Minecraft?, sip",
  "programmer like a lifestyle","pensando demasiado ;:u","Beatles y Queen, the best of music","git commit -m \"adding more interesting thing\"",
  "drugs? nop, programming is better","demasiado aburrido para ser cierto xd","escrito en el primo de java","Gracias a GitHub por esto :')",
  "a&uacute;n no busco trabajo :P","Also try my other website!","Made by a wab developar","Escrito a mano 99%","+1 contribution on GitHub",
  "all u need is love &lt;3","empirical contrastation","Having a Filosophy degree on Life University","Thinking out loud","Me cost&oacute; "+
  "una tarde desarrollar esta web y esto","despu&eacute;s de esto, viene un juego","hi! welcome to home!","para cuando un GTA?","just fool things",
  "Increible que siga escribiendo cosas","rAnDoM nUmBeEeEeEr","status: playgramming","ALT+F4 para abrir una ventana chula ;)","Linux forever"]
  var num = Math.random() * (frase.length+1) - 1;
  num = parseInt(num)
  document.getElementById("rand").innerHTML = frase[num];
  console.log(frase.length + " / " + num)
})
