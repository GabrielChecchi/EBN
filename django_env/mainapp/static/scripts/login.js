function register(){

    //form header
  
    var sign_in = document.getElementById('sign-title');
    sign_in.setAttribute('class', 'inactive-tab underline-hover title-signin-signup');
  
    var sign_up = document.getElementById('signup-title');
    sign_up.setAttribute('class', 'active-tab title-signin-signup');
  
    //form body

    document.getElementById('input-mail').hidden=false;
    document.getElementById('input-username').hidden=false;

    document.getElementById('input-name').placeholder = 'Nombre';
    document.getElementById('input-password').placeholder = 'Apellido';

    document.getElementById('input-repeat-password').hidden=false;
    document.getElementById('input-signup-password').hidden=false;

    document.getElementById('input-signup-pais').hidden=false;
    document.getElementById('input-signup-localidad').hidden=false;
    
    document.getElementById('input-button-signup').hidden=false;
    document.getElementById('input-button-sigin').hidden=true;

    document.getElementById("avisoError").hidden = true;
    
    //form footer
  
    var form_footer = document.getElementById('form-footer-a');
    form_footer.textContent = '¿Ya estás registrado? Inicia sesión';
  }
  
function login(){
  
    //form header
  
    var sign_up = document.getElementById('sign-title');
    sign_up.setAttribute('class', 'active-tab title-signin-signup');
  
    var sign_in = document.getElementById('signup-title');
    sign_in.setAttribute('class', 'inactive-tab underline-hover title-signin-signup');
  
    
    //form body

    document.getElementById('input-name').placeholder = 'Nombre de Usuario ó Correo Electrónico';
    document.getElementById('input-password').placeholder = 'Contraseña';
  
    document.getElementById('input-mail').hidden=true;
    document.getElementById('input-username').hidden=true;
    document.getElementById('input-repeat-password').hidden=true;
    document.getElementById('input-button-signup').hidden=true;
    document.getElementById('input-signup-password').hidden=true;
    document.getElementById("avisoError").hidden = true;
    document.getElementById('input-button-sigin').hidden=false;  

    document.getElementById('input-signup-pais').hidden=true;
    document.getElementById('input-signup-localidad').hidden=true;
  
    //form footer
  
    var form_footer = document.getElementById('form-footer-a');
    form_footer.textContent = '¿Olvidaste tu contraseña?';
}

function avisarError(){
  document.getElementById("avisoError").hidden = false;

}