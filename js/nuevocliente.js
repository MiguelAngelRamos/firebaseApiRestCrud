import { nuevoCliente } from './api.js';
import { validar, mostrarAlerta } from './funciones.js';
(() =>{
  const formulario = document.querySelector('#formulario');
  formulario.addEventListener('submit', validarCliente);

  function validarCliente(event) {
    event.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    // const cliente = {
    //   nombre : nombre,
    //   email: email,
    //   telefono: telefono,
    //   empresa: empresa
    // }

    const cliente = {
      nombre,
      email,
      telefono,
      empresa
    }

    if(validar(cliente)) {
      mostrarAlerta('Todos los campos son obligatorios')
      return;
    }
    console.log('pase la validación');
    nuevoCliente(cliente)
    
    

  }
})();