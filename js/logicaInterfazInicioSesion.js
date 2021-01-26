/*FUNCION BOTON INGRESAR*/
document.querySelector('#btnIngresar').addEventListener('click',
    inicioSesion);

    /*INICIAR SESION*/
function inicioSesion() {
    var sUsuario = '';
    var sContrasena = '';
    var bAcceso = false;

    sUsuario = document.querySelector('#txtUsuario').value;
    sContrasena = document.querySelector('#txtContrasena').value;

    bAcceso = validarCredenciales(sUsuario, sContrasena);
    if (bAcceso == true) {
        ingresar();
    }
}
/*REDIRECCIONAMIENTO A LA PAGINA DE LOS USUARIOS*/
function ingresar() {
    var rol = sessionStorage.getItem('rolUsuarioActivo');
    switch (rol) {
        case '1':
            window.location.href = 'views/administrador.html';
            break;
        case '2':
            window.location.href = 'views/coordinador.html';
            break;

        default:
            window.location.href = 'index.html';
            break;
    }
}