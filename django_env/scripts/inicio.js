function cambiarMegusta() {
  let elem = document.getElementById('imagen');
  var atrib = elem.getAttribute("src");

  if (atrib=="/img/megusta_activado.png"){
      elem.setAttribute("src", "/img/megusta_desactivado.png")
  } else{
      elem.setAttribute("src", "/img/megusta_activado.png")
  }
}