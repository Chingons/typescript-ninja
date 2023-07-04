
const enum ERROR_TYPES  {
    NOT_FOUND,
    UNAUTHORIZED,
    FORDBIDDEN}

function mostrarMensaje (tipoDeError: ERROR_TYPES) {
    if (tipoDeError = ERROR_TYPES.NOT_FOUND){
        console.log('No se encuentra el recurso')
    }
    else if (tipoDeError = ERROR_TYPES.UNAUTHORIZED){
        console.log('No tienes permisos para acceder')
    }
    else if (tipoDeError = ERROR_TYPES.FORDBIDDEN){
        console.log('No tienes permisos para acceder')
    }
}

