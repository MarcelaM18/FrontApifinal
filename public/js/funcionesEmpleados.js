
 
 const url = 'http://localhost:8082/api/empleado';

 const listarDatos = async () => {
   let respuesta = '';
   let body = document.getElementById('contenido');
   
   fetch(url, {
     method: 'GET',
     mode: 'cors',
     headers: {"Content-type": "application/json; charset=UTF-8"}
   })
   .then((resp) => resp.json())
   .then(function(data) {
     let listaEmpleados = data.empleados;
     datos = listaEmpleados.map(function(empleado) {
       respuesta += `<tr><td>${empleado.cedula}</td>` +
       `<td>${empleado.nombre}</td>` +
         `<td>${empleado.correo}</td>` +
         `<td>${empleado.direccion}</td>` +
         `<td>${empleado.telefono}</td>` +
         `<td>${empleado.estado}</td>` +
         `<td>${empleado.observacion}</td>` +
         `<td><a class="fa-solid fa-pen-to-square" href="/editarEmpleados" onclick='editar(${JSON.stringify(empleado)})' ></a> 
         <a class="fa-solid fa-toggle-on" href='#' onclick='eliminar("${empleado._id}")'></a>
         <a class="fa-solid fa-eye"" href='#' onclick='estado("${empleado.estado}")'></a></td>` +        
         `</tr>`;
       body.innerHTML = respuesta;
     });
   
   });
 };
 
 function registrar() {
   // Obtener los valores de los campos
   let cedula = document.getElementById('cedula').value;
   let nombre = document.getElementById('nombre').value;
   let correo = document.getElementById('correo').value;
   let direccion = document.getElementById('direccion').value;
   let telefono = document.getElementById('telefono').value;
   let estado = document.getElementById('estado').value;
   let observacion = document.getElementById('observacion').value;
 
   // Crear el objeto empleado
   let empleado = {
     cedula: cedula,
     nombre: nombre,
     correo: correo,
     direccion: direccion,
     telefono: telefono,
     estado: estado,
     observacion: observacion
   };
 
   // Realizar la solicitud de registro
   fetch(url, {
     method: 'POST',
     mode: 'cors',
     body: JSON.stringify(empleado),
     headers: { "Content-type": "application/json; charset=UTF-8" }
   })
     .then((resp) => resp.json())
     .then(json => {
       if (json.msg) {
         // Mensaje de éxito (opcional)
         console.log(json.msg);
 
         // Redirigir después del registro exitoso
         window.location.href = "/empleados";
       }
     });
 }
 
 
 
 const editar = (empleado) => {
  document.getElementById('id').value = empleado._id;
  document.getElementById('cedula').value = empleado.cedula;
  document.getElementById('nombre').value = empleado.nombre;
  document.getElementById('correo').value = empleado.correo;
  document.getElementById('direccion').value = empleado.direccion;
  document.getElementById('telefono').value = empleado.telefono;
  document.getElementById('estado').value = empleado.estado;
  document.getElementById('observacion').value = empleado.observacion;
};

const actualizar = async () => {
  let id = document.getElementById('id').value;
  let cedula = document.getElementById('cedula').value;
  let nombre = document.getElementById('nombre').value;
  let correo = document.getElementById('correo').value;
  let direccion = document.getElementById('direccion').value;
  let telefono = document.getElementById('telefono').value;
  let estado = document.getElementById('estado').value;
  let observacion = document.getElementById('observacion').value;

  let empleado = {
    cedula: cedula,
    nombre: nombre,
    correo: correo,
    direccion: direccion,
    telefono: telefono,
    estado: estado,
    observacion: observacion
  };

  fetch(url + `?id=${id}`, {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(empleado),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then((resp) => resp.json())
  .then(json => {
    alert(json.msg);
  });
};

 
 const eliminar = (id) => {
  if (confirm('¿Está seguro de realizar la eliminación?') == true) {
    let usuario = {
      _id: id
    };
    fetch(url, {
      method: 'DELETE',
      mode: 'cors',
      body: JSON.stringify(usuario),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((resp) => resp.json())
    .then(json => {
      alert(json.msg);
      location.reload(); // Refrescar la página
    });
  }
};

 
 
 if (document.querySelector('#btnRegistrar')) {
   document.querySelector('#btnRegistrar').addEventListener('click', registrar);
 }
 
 if (document.querySelector('#btnActualizar')) {
   document.querySelector('#btnActualizar').addEventListener('click', actualizar);
 }
 
 
 
 
 
 