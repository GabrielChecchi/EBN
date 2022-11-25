var usuario_iniciado = 'false';   // si el usuario inicio sesion


function cambiarMegusta() {
  let elem = document.getElementById('imagen');
  var atrib = elem.getAttribute("src");

  if (atrib=="img/megusta_activado.png"){
      elem.setAttribute("src", "img/megusta_desactivado.png")
  } else{
      elem.setAttribute("src", "img/megusta_activado.png")
  }
}

function cambiarNombreUsuario(usuario, img_path){

  //console.log('Holi');

  //obtenemos los elementos 
  var btn_iniciar_sesion = document.getElementById('btn-iniciar-sesion');
  var btn_registrarse = document.getElementById('btn-registrarse');
  var nav_div_derecho = document.getElementById('nav-div-derecho');

  //creacion del label de usuario
  var label_usuario = document.createElement('h6');
  label_usuario.innerHTML = '<h6>'+usuario+'</h6>';

  var img_usuario = document.createElement('img');
  img_usuario.src = img_path;

  var parrafo_info_usuario = document.createElement('p');

  parrafo_info_usuario.appendChild(label_usuario);
  parrafo_info_usuario.appendChild(img_usuario);

  //console.log('usuario_iniciado ' + usuario_iniciado);

  if(usuario_iniciado == true){

    //nav_div_derecho.remove();

    btn_iniciar_sesion.hidden = true;
    btn_registrarse.hidden = true;

    //nav_div_derecho.appendChild(parrafo_info_usuario);
  }
}