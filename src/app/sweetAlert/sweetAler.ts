import Swal from "sweetalert2";

export  class sweetalert{
    agregar(){

        Swal.fire(
            'Agrgado Correctamente!',
            'You clicked the button!',
            'success'
          )
    }

    actualizar(){

        Swal.fire(
            'Actualizado Correctamente!',
            'You clicked the button!',
            'success'
          )
    }

    error(){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    errorLogin(){
        Swal.fire({
            icon: 'error',
            title: 'Oops, Usuario o contraseña incorrecta.',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
} 