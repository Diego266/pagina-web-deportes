/*USUARIOS*/

function obtenerListaUsuarios() {
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));

    if (listaUsuarios == null) {
        listaUsuarios =
            [   /*Id      Nombre          Usuario         Contraseña       Rol */
                ['1','Andres Castro', 'administrador', 'administrador123', '1'],
                ['2', 'Camila Andrea', 'coordinador', 'coordinador123', '2']
            ]
    }
    return listaUsuarios;
}

function validarCredenciales(pUsuario, pContrasena) {
    var listaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;

    for (var i = 0; i < listaUsuarios.length; i++) {
        if (pUsuario == listaUsuarios[i][2] && pContrasena ==
        listaUsuarios[i][3]) {
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1]);
            sessionStorage.setItem('rolUsuarioActivo' ,listaUsuarios[i][4]);
        }
    }
    return bAcceso;
}
