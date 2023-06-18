const url = 'http://localhost:8085/api/compra';


const listarDatos = async () => {
  console.log('Estoy en el listar compra');
  let respuesta = '';
  let body = document.getElementById('contenido');

  fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then((resp) => resp.json())
    .then(function (data) {
      let listacompras = data.compras;
      console.log(listacompras);
      if (listacompras && Array.isArray(listacompras)) {
        respuesta = listacompras.map(function (compra, index) {
          return `<tr>
                    <td>${index + 1}</td>
                    <td>${compra.numFactura}</td>
                    <td>${compra.proveedor}</td>
                    <td>${compra.fechaCompra}</td>
                    <td>${compra.fechaRegistro}</td>
                    <td>${compra.estado}</td>
                    <td>${compra.totalCompra}</td>
                    <td>
                      <button><i class="bi bi-pencil-square"  onclick='editar(${JSON.stringify(compra)})' style="font-size: 24px;")"></i></button>
                      <button><a class="bi bi-trash3-fill" style="font-size: 24px;" href='#' onclick='eliminar("${compra._id}")'></a></button>

                    </td>
                  </tr>`;
        }).join('');
      } else {
        respuesta = 'No se encontraron compras';
      }

      body.innerHTML = respuesta;


    });
};



// Función para agregar un producto a la tabla de detalle
function agregarProducto() {
  console.log('Estoy en el agregarProducto')
  var producto = document.getElementById('producto').value;
  var cantidad = document.getElementById('cantidad').value;// Puedes ajustar la cantidad según tus necesidades
  var precioCompra = document.getElementById('precioCompra').value;
  var precioVenta = document.getElementById('precioVenta').value;
  var categoria = document.getElementById('categoria').value;

  var fila =
    `<tr>
      <td>${producto}</td>
      <td>${cantidad}</td>
      <td>${precioCompra}</td>
      <td>${precioVenta}</td>
      <td>${categoria}</td>
      <td><button class="btn btn-danger btn-sm" onclick="eliminarProducto(this)">Eliminar</button>
      </td>
    </tr>`;

  document.getElementById('detalleProductos').insertAdjacentHTML('beforeend', fila);

  // Limpiar los campos del formulario
  document.getElementById('producto').value = '';
  document.getElementById('precioCompra').value = '';
  document.getElementById('precioVenta').value = '';
  document.getElementById('categoria').value = '';
  document.getElementById('cantidad').value = '';
}

// Función para eliminar un producto de la tabla de detalle
function eliminarProducto(btn) {
  var fila = btn.parentNode.parentNode;
  fila.parentNode.removeChild(fila);
}

// Función para registrar una compra
function registrar() {
  console.log('Estoy en registar Compra')
  var proveedor = document.getElementById('proveedor').value;
  var numFactura = document.getElementById('numFactura').value;
  var fechaCompra = document.getElementById('fechaCompra').value;
  var fechaRegistro = document.getElementById('fechaRegistro').value;
  var estado = document.getElementById('estado').value; // Puedes ajustar el valor del estado según tus necesidades

  var detalleCompra = [];
  var tablaDetalle = document.getElementById('detalleTabla');
  var filas = tablaDetalle.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
  for (var i = 0; i < filas.length; i++) {
    var celdas = filas[i].getElementsByTagName('td');
    var producto = celdas[0].innerHTML;
    var cantidad = parseInt(celdas[1].innerHTML);
    var precioCompra = parseFloat(celdas[2].innerHTML);
    var precioVenta = parseFloat(celdas[3].innerHTML);
    var categoria = celdas[4].innerHTML;

    detalleCompra.push({
      producto: producto,
      cantidad: cantidad,
      precioCompra: precioCompra,
      precioVenta: precioVenta,
      categoria: categoria
    });
  }

  var totalCompra = 0;
  for (var j = 0; j < detalleCompra.length; j++) {
    totalCompra += detalleCompra[j].precioCompra;
  }

  var compra = {
    proveedor: proveedor,
    numFactura: numFactura,
    fechaCompra: fechaCompra,
    fechaRegistro: fechaRegistro,
    estado: estado,
    detalleCompra: detalleCompra,
    totalCompra: totalCompra
  };
  fetch(url, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(compra),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then((resp) => resp.json())
    .then(json => {
      if (json.msg) {
        // Mensaje de éxito (opcional)
        console.log(json.msg);
  
        // Redirigir después del registro exitoso
        window.location.href = "/compras";
      }
    })
    .catch(error => {
      console.error("Error en la solicitud de registro:", error);
    });
  }  



const eliminar = (id) => {
  if (confirm('¿Está seguro de realizar la eliminación?') == true) {
    let compra = {
      _id: id
    };
    fetch(url, {
      method: 'DELETE',
      mode: 'cors',
      body: JSON.stringify(compra),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((resp) => resp.json())
    .then(json => {
      alert(json.msg);
      location.reload(); // Refrescar la página
    });
  }
};
// Resto del código
const editar = (compra) => {
  var url = "/editarCompra?compra=" + encodeURIComponent(compra._id);
  window.location.href = url;
}



const consultarCompra = (compra) => {
  console.log('Estoy en el consultar');
  if (!compra) {
    console.log('No se ha proporcionado el ID de la compra');
    return;
  }
  const url2 = url + '?id=' + compra.toString();
  fetch(url2 + "", {
    method: 'GET',
    mode: 'cors',
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then((resp) => resp.json())
    .then(function (data) {
      console.log('Respuesta JSON:', data);

      let datosCompra = data.compras;
      if (!datosCompra || !datosCompra.detalleCompra) {
        console.log('La respuesta JSON no contiene los datos de compra esperados');
        return;
      }

      let compraDetalle = datosCompra.detalleCompra;
      console.log('Compra:', compraDetalle);
      document.getElementById('id').value = datosCompra._id
      document.getElementById('proveedor').value = datosCompra.proveedor;
      document.getElementById('fechaCompra').value = datosCompra.fechaCompra;
      document.getElementById('fechaRegistro').value = datosCompra.fechaRegistro;
      document.getElementById('estado').value = datosCompra.estado;
      document.getElementById('numFactura').value = datosCompra.numFactura;

      // Actualizar detalle de la compra
      let detalleCompra = document.getElementById('detalleProductos');
      detalleCompra.innerHTML = ""; // Limpiar tabla de detalle de compra

      // Recorrer los productos del detalle y agregarlos a la tabla
      for (let i = 0; i < compraDetalle.length; i++) {
        let producto = compraDetalle[i];
        let fila = document.createElement('tr');

        let celdaIdProducto = document.createElement('td');
        celdaIdProducto.textContent = producto._id; // Obtener el ID del producto
        fila.appendChild(celdaIdProducto);

        let celdaProducto = document.createElement('td');
        celdaProducto.textContent = producto.producto;
        fila.appendChild(celdaProducto);

        let celdaCantidad = document.createElement('td');
        celdaCantidad.textContent = producto.cantidad;
        fila.appendChild(celdaCantidad);

        let celdaPrecioCompra = document.createElement('td');
        celdaPrecioCompra.textContent = producto.precioCompra;
        fila.appendChild(celdaPrecioCompra);

        let celdaPrecioVenta = document.createElement('td');
        celdaPrecioVenta.textContent = producto.precioVenta;
        fila.appendChild(celdaPrecioVenta);

        let celdaCategoria = document.createElement('td');
        celdaCategoria.textContent = producto.categoria;
        fila.appendChild(celdaCategoria);

        let celdaAcciones = document.createElement('td');
        let botonEditar = document.createElement('button');
        botonEditar.textContent = 'Editar';
        botonEditar.addEventListener('click', () => {
          editarProducto(producto);
        });
        celdaAcciones.appendChild(botonEditar);

        let botonEliminar = document.createElement('button');
          botonEliminar.textContent = 'Eliminar';
          botonEliminar.addEventListener('click', () => {
            eliminarProducto(producto._id);
          });

  celdaAcciones.appendChild(botonEliminar);


        fila.appendChild(celdaAcciones);

        detalleCompra.appendChild(fila);
      }
    });

  
}

const actualizar = () => {
  console.log('Estoy en el actualizar');
  let id = document.getElementById('id').value;
  let _proveedor = document.getElementById('proveedor').value;
  let _fechaCompra = document.getElementById('fechaCompra').value;
  let _fechaRegistro = document.getElementById('fechaRegistro').value;
  let _numFactura = document.getElementById('numFactura').value;
  let _estado = document.getElementById('estado').value;
  // Actualizar detalle de la compra
  let detalleCompra = [];
  let filas = document.getElementById('detalleProductos').getElementsByTagName('tr');
  for (let i = 0; i < filas.length; i++) {
    let fila = filas[i];
    let celdas = fila.getElementsByTagName('td');

    let producto = {
      producto: celdas[0].textContent,
      cantidad: celdas[1].textContent,
      precioCompra: celdas[2].textContent,
      precioVenta: celdas[3].textContent,
      categoria: celdas[4].textContent
    };

    detalleCompra.push(producto);
  }

  let compra = {
    proveedor: _proveedor,
    numFactura: _numFactura,
    fechaCompra: _fechaCompra,
    fechaRegistro: _fechaRegistro,
    estado: _estado,
    detalleCompra: detalleCompra
  };

  console.log('Estoy antes del fetch');
  fetch(url + `?id=${id}`, {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(compra),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then((resp) => resp.json())
    .then(json => {
      if (json.msg) {
        // Volver a la página de compras
        alert(json.msg);
        window.location.href = "/compras";
        console.log('Estoy adentro del then');

        // Calcular el nuevo total de la compra
        let total = 0;
        detalleCompra.forEach(producto => {
          let cantidad = parseInt(producto.cantidad);
          let precioCompra = parseFloat(producto.precioCompra);
          total += cantidad * precioCompra;
        });
        // Actualizar el valor del total en el HTML
        document.getElementById('totalCompra').textContent = total;
      }
    });
};
function guardarProducto() {
  // Obtén los valores actualizados de los campos de edición
  var productoId = producto._id.value;
  var producto = document.getElementById("producto").value;
  var cantidad = document.getElementById("cantidad").value;
  var precioCompra = document.getElementById("precioCompra").value;
  var precioVenta = document.getElementById("precioVenta").value;
  var categoria = document.getElementById("categoria").value;

  // Buscar el producto en la matriz o colección de productos por su ID
  var productoEncontrado = null;
  for (var i = 0; i < productos.length; i++) {
    if (productos[i].id === productoId) {
      productoEncontrado = productos[i];
      break;
    }
  }
  // Si se encuentra el producto, actualizar sus propiedades
  if (productoEncontrado) {
    productoEncontrado.producto = producto;
    productoEncontrado.cantidad = cantidad;
    productoEncontrado.precioCompra = precioCompra;
    productoEncontrado.precioVenta = precioVenta;
    productoEncontrado.categoria = categoria;

    // Lógica para guardar los cambios del producto
    // Puedes implementar aquí la funcionalidad que necesites
    // Por ejemplo, podrías hacer una solicitud al servidor para actualizar los datos en la base de datos

    // Limpiar los campos de edición después de guardar los cambios
    document.getElementById("productoId").value = "";
    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precioCompra").value = "";
    document.getElementById("precioVenta").value = "";
    document.getElementById("categoria").value = "";

    // Mostrar mensaje de éxito o realizar acciones adicionales si es necesario
    console.log("Cambios guardados con éxito.");
  } else {
    console.log("No se encontró el producto con el ID proporcionado.");
  }
}


const editarProducto = (producto) => {
  // Obtener referencias a los elementos del formulario
  const productoInput = document.getElementById('producto');
  const cantidadInput = document.getElementById('cantidad');
  const precioCompraInput = document.getElementById('precioCompra');
  const precioVentaInput = document.getElementById('precioVenta');

  // Asignar los valores del producto seleccionado a los campos del formulario
  productoInput.value = producto.producto;
  cantidadInput.value = producto.cantidad;
  precioCompraInput.value = producto.precioCompra;
  precioVentaInput.value = producto.precioVenta;

  // Agregar botones de "Guardar" y "Eliminar" al formulario
  const accionesContainer = document.getElementById('acciones');
  if (accionesContainer) {
    accionesContainer.innerHTML = '';
  } else {
    console.error('El elemento con el id "acciones" no se encontró en el documento.');
    return;
  }

  const guardarBoton = document.createElement('button');
  guardarBoton.textContent = 'Guardar';
  guardarBoton.addEventListener('click', () => {
    // Obtener los valores actualizados del formulario
    const nuevoProducto = productoInput.value;
    const nuevaCantidad = cantidadInput.value;
    const nuevoPrecioCompra = precioCompraInput.value;
    const nuevoPrecioVenta = precioVentaInput.value;

    // Actualizar los valores del producto seleccionado
    producto.producto = nuevoProducto;
    producto.cantidad = nuevaCantidad;
    producto.precioCompra = nuevoPrecioCompra;
    producto.precioVenta = nuevoPrecioVenta;

    // Lógica para guardar los cambios del producto
    // Puedes implementar aquí la funcionalidad que necesites
    // Por ejemplo, podrías hacer una solicitud al servidor para actualizar los datos en la base de datos

    // Limpiar los campos del formulario
    productoInput.value = '';
    cantidadInput.value = '';
    precioCompraInput.value = '';
    precioVentaInput.value = '';

    // Restaurar los botones de "Editar" y "Eliminar"
    accionesContainer.innerHTML = '';
    const editarBoton = document.createElement('button');
    editarBoton.textContent = 'Editar';
    editarBoton.addEventListener('click', () => {
      editarProducto(producto);
    });
    accionesContainer.appendChild(editarBoton);

    const eliminarBoton = document.createElement('button');
    eliminarBoton.textContent = 'Eliminar';
    eliminarBoton.addEventListener('click', () => {
      // Realizar la lógica para eliminar el producto
      const index = producto.detalleCompra.findIndex((detalle) => detalle._id === producto._id);
      if (index !== -1) {
        producto.detalleCompra.splice(index, 1);
      }
      // Puedes implementar aquí la funcionalidad adicional que necesites, como actualizar la base de datos

      // Limpiar los campos del formulario
      productoInput.value = '';
      cantidadInput.value = '';
      precioCompraInput.value = '';
      precioVentaInput.value = '';

      // Restaurar los botones de "Editar" y "Eliminar"
      accionesContainer.innerHTML = '';
      const editarBoton = document.createElement('button');
      editarBoton.textContent = 'Editar';
      editarBoton.addEventListener('click', () => {
        editarProducto(producto);
      });
      accionesContainer.appendChild(editarBoton);
    });

    accionesContainer.appendChild(eliminarBoton);
  });

  accionesContainer.appendChild(guardarBoton);
};



document.addEventListener("DOMContentLoaded", function () {
  var url = window.location.href;

  if (url.includes("/editarCompra")) {
    var queryString = url.split('?')[1];
    var params = new URLSearchParams(queryString);
    var compra = params.get('compra');
    consultarCompra(compra);
  }
});
