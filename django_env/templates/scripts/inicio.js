var id_me_gusta = 0;
var clicked = 'false';

function escribirComentario(){

}

function comentar(){

}

function addPost(p_usuario, p_titulo, p_descripcion, p_fecha){
  
  if (p_titulo !== ""){

    if(p_descripcion !== ""){

      var fecha;
      if(p_fecha == ""){

        p_fecha = new Date();
      }
      var fecha = calcularTiempo(p_fecha);
      
      var container_publicaciones = document.getElementById('columna-medio-inicio');
      
      var nueva_publicacion = document.createElement('div');
      nueva_publicacion.className = 'publicacion';

      //metemos los datos del usuario

      var datos_usuario = document.createElement('div');
      datos_usuario.className = 'user-profile';

      var usuario_publicacion = document.createElement('p');
      usuario_publicacion.innerText = p_usuario;
      var fecha_publicacion = document.createElement('span');
      fecha_publicacion.innerText = fecha;

      datos_usuario.appendChild(usuario_publicacion);
      datos_usuario.appendChild(fecha_publicacion);

      //titulo publicacion
      var titulo_publicacion = document.createElement('h1');
      titulo_publicacion.innerHTML = p_titulo;

      //contenido publicacion
      var contenido_publicacion = document.createElement('p');
      contenido_publicacion.className = 'texto';
      contenido_publicacion.innerHTML = p_descripcion;

      //agregamos los elementos a la nueva publicacion
      nueva_publicacion.appendChild(datos_usuario);
      nueva_publicacion.appendChild(titulo_publicacion);
      nueva_publicacion.appendChild(contenido_publicacion);

      var interacciones_publicacion = document.createElement('div');
      interacciones_publicacion.className = 'post-interactions';

      var icons_interacciones = document.createElement('div');
      icons_interacciones.className = 'post-icons'; 

      var interacciones = document.createElement('ul');
      interacciones.className = 'nav';

      var me_gusta_item = document.createElement('li');
      var me_gusta_boton = document.createElement('i');
      me_gusta_boton.innerHTML = '<i onclick="darLike(this)" class="fa fa-thumbs-up"><span class="post-interactions-text">Me gusta</span></i>';
      me_gusta_item.appendChild(me_gusta_boton);

      var comentar_item = document.createElement('li');
      var comentar_boton = document.createElement('button');
      comentar_boton.innerHTML = '<button type="button" onclick=""> <img src="img/comentar.png" alt="Imagen" class="img_interacciones fa"><span class="post-interactions-text">Comentar</span></button>';
      comentar_item.appendChild(comentar_boton);

      //agregamos los apartados 'me gusta' y 'comentar'

      interacciones.appendChild(me_gusta_item);
      interacciones.appendChild(comentar_item);

      icons_interacciones.appendChild(interacciones);
      interacciones_publicacion.appendChild(icons_interacciones);

      nueva_publicacion.appendChild(interacciones_publicacion);

      var horizonal_line = document.createElement('hr');

      nueva_publicacion.appendChild(horizonal_line);

      //comentarios 

      var container_comentarios = document.createElement('div');
      container_comentarios.className = 'box_comment';
      //container_comentarios.hidden = 'true';

      var container_nuevo_comentario = document.createElement('div')
      container_nuevo_comentario.className = 'new-comment';

      var usuario_info_comentario = document.createElement('div');
      usuario_info_comentario.className = 'user-comment';
      var nombre_usuario = document.createElement('h4');
      nombre_usuario.className = 'texto-body-comments';
      usuario_info_comentario.appendChild(nombre_usuario);

      var contenido_comentario = document.createElement('div');
      contenido_comentario.className = 'content-comment';
      var textarea_comentario = document.createElement('textarea');
      textarea_comentario.innerHTML = '<textarea class="comment" placeholder="Escribe un Comentario"></textarea>';
      contenido_comentario.appendChild(textarea_comentario);

      var footer_comentario = document.createElement('div');
      footer_comentario.className = 'footer-comment';
      var btn_publicar_comentario = document.createElement('button');
      btn_publicar_comentario.innerHTML = '<button class="btn-postear" type="button" value="1">Comentar</button>';
      footer_comentario.appendChild(btn_publicar_comentario);

      container_nuevo_comentario.appendChild(usuario_info_comentario);
      container_nuevo_comentario.appendChild(contenido_comentario);
      container_nuevo_comentario.appendChild(footer_comentario);
      container_comentarios.appendChild(container_nuevo_comentario);

      nueva_publicacion.appendChild(container_comentarios);

      //agregamos todos los elementos al div principal
      container_publicaciones.appendChild(nueva_publicacion);

    }
    else{
      
      return 3;
    }
  }
  else{

    return 2; //el titulo esta vacio
  }
}

function calcularTiempo(p_date){

  var p_formatted_date = new Date(p_date);
  p_minutes = p_formatted_date.getMinutes();
  p_hour = p_formatted_date.getHours();
  p_day = p_formatted_date.getDate()+1;
  p_month = p_formatted_date.getMonth()+1;
  p_year = p_formatted_date.getFullYear();

  var today = new Date();

  var max;
  var min;
  var year = today.getFullYear();
  if(year != p_year){
    
    max = Math.max(p_year, year);
    min = Math.min(p_year, year);

    var years_published = max - min; 

    return "Hace " + years_published + " años ";

  }else{

    var month = today.getMonth()+1;
    if(month != p_month){

      max = Math.max(p_month, month);
      min = Math.min(p_month, month);

      var monts_published = max - min; 

      return "Hace " + monts_published + " meses";
    }
    else{

      var day = today.getDate()+1;
      if(day != p_day){
        
        max = Math.max(p_day, day);
        min = Math.min(p_day, day);

        var days_published = max - min; 

        return "Hace " + days_published + " días";
      }
      else{

        var hour = today.getHours();
        if(hour != p_hour){

          max = Math.max(p_hour, hour);
          min = Math.min(p_hour, hour);
  
          var hours_published = max - min; 
  
          return "Hace " + hours_published + " horas";
        }
        else{
          
          var minutes = today.getMinutes();
          
          max = Math.max(p_minutes, minutes);
          min = Math.min(p_minutes, minutes);
  
          var minutes_published = max - min; 
  
          return "Hace " + minutes_published + " minutos";
        }
      }
    }
  }
}

function darLike(x) {
  x.classList.toggle("fa-thumbs-down");
}
/*
function comentar(x){

  if(!clicked){
    x.
  }
}*/