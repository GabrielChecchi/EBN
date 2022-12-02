function cambiarMegusta() {
  let elem = document.getElementById('imagen');
  var atrib = elem.getAttribute("src");

  if (atrib == "img/megusta_activado.png"){
      elem.setAttribute("src", "D:/Gabriel/Pycharm Projects/EBN/django_env/mainapp/static/img/megusta_desactivado.png")
  } else{
      elem.setAttribute("src", "D:/Gabriel/Pycharm Projects/EBN/django_env/mainapp/static/img/megusta_activado.png")
  }
}

function addPost(){
  
}