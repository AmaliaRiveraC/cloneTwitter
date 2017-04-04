var contadorCaracteres = document.getElementById("limite");
var cajaTexto = document.getElementById("comentarioAEscribir");
var contador = 0;
var tweetsPublicados = document.getElementById("comentariosPublicados");
var botonEnviar = document.getElementById("enviar");
var seccionComentariosPublicados = document.getElementById("comentariosPublicados");
var usuario = document.getElementById("nombre");

cajaTexto.addEventListener("keypress", fContador);
botonEnviar.addEventListener("click",agregarTweet);

function fContador(){

  if(contador < 140){
    contador +=1;
    var contadorCaracteres = document.getElementById("limite");
    contadorCaracteres.innerText = contador;
  }else{
    alert("No puedes pasar el límite de caracteres")
  }
}

function agregarTweet(){
  var nuevaSeccion = document.createElement("p");
  nuevaSeccion.innerText = cajaTexto.value;
  seccionComentariosPublicados.appendChild(nuevaSeccion);
  var espacio = document.createElement("br");
  nuevaSeccion.appendChild(espacio);
  var etiqueta = document.createElement("span");
  etiqueta.innerText = "De:";
  nuevaSeccion.appendChild(etiqueta);
  var nombreUsuario = document.createElement("span");
  nombreUsuario.innerText = usuario.value;
  nuevaSeccion.appendChild(nombreUsuario);
  var lineaSeparadora = document.createElement("hr");
  nuevaSeccion.appendChild(lineaSeparadora);
  
  cajaTexto.value = "";
  usuario.value = "";
  contador = 0;
  contadorCaracteres.innerText = 0;
}