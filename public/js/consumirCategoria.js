const url = 'https://backendapifinal.onrender.com/api/categoria';

const listarDatos = async () => {
  console.log('Estoy en el listar');
  let respuesta = '';
  let body = document.getElementById('contenido');

  fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then((resp) => resp.json())
    .then(function (data) {
      let listacategorias = data.categorias;
      console.log(listacategorias)
      if (listacategorias && Array.isArray(listacategorias)) {
        respuesta = listacategorias.map(function (categoria, index) {
          return `<tr>
                    <td>${index + 1}</td>
                    <td>${categoria.nombre}</td>
                    <td>${categoria.estado}</td>
                    <td>${categoria.observacion}</td>
                    <td>
                      <button><i class="bi bi-pencil-square" style="font-size: 24px;" onclick='editar(${JSON.stringify(categoria)})'></i></button>
                      <button><a class="bi bi-trash3-fill" style="font-size: 24px;" href='#' onclick='eliminar("${categoria._id}")'></a></button>
                    </td>
                  </tr>`;
        }).join('');
      } else {
        respuesta = 'No se encontraron categorías';
      }

      body.innerHTML = respuesta;
    });
};


function registrar() {
  // Obtener los valores de los campos
  let _nombrecat = document.getElementById('nombrecat').value;
  let _estado = document.getElementById('estado').value;
  let _observacion = document.getElementById('observacion').value;

  // Crear el objeto categoria
  let categoria = {
    nombre: _nombrecat,
    estado: _estado,
    observacion: _observacion
  };

  const validatecategoriaResult = validateForm();
  if (validatecategoriaResult) {
    // Realizar la solicitud de registro
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(categoria),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then((resp) => resp.json())
      .then(json => {
        if (json.msg) {
          alert(json.msg);
          // Mensaje de éxito (opcional)
          console.log(json.msg);

          // Redirigir después del registro exitoso
          window.location.href = "/categorias";
        }
      })
      .catch(error => {
        console.error('Error en la solicitud de registro:', error);
      });
  }
}



// Resto del código
const editar = (categoria) => {
  var url = "/editarCategoria?categoria=" + encodeURIComponent(categoria._id)
  window.location.href = url
}

const consultarCategoria = (categoria) => {
  console.log('Estoy en el consultar')
  const url2 = url + '?id=' + categoria.toString()
  fetch(url2 + "", {
    method: 'GET',
    mode: 'cors',
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then((resp) => resp.json())
    .then(function (data) {
      let categoria = data.categorias
      document.getElementById('id').value = categoria._id
      document.getElementById('nombrecat').value = categoria.nombre
      document.getElementById('estado').value = categoria.estado
      document.getElementById('observacion').value = categoria.observacion
    })
}

const actualizar = () => {
  console.log('Estoy en el actualizar')
  let id = document.getElementById('id').value
  let _nombre = document.getElementById('nombrecat').value
  let _estado = document.getElementById('estado').value
  let _observacion = document.getElementById('observac_observacion').value

  let categoria = {
    nombre: _nombre,
    estado: _estado,
    observacion: _observacion
  }
console.log('estoy antes del fetch')
const validatecategoriaResult = validateForm();
  if (validatecategoriaResult) {
  fetch(url + `?id=${id}`, {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(categoria),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then((resp) => resp.json())
    .then(json => {
      if (json.msg) {
        //volver a categorias
        alert(json.msg);
        window.location.href = "/categorias"
        console.log('estoy estoy adentro del then')
      }
    })
}
}


const eliminar = (id) => {
  if (confirm('¿Está seguro de realizar la eliminación?') == true) {
    let categoria = {
      _id: id
    };
    fetch(url, {
      method: 'DELETE',
      mode: 'cors',
      body: JSON.stringify(categoria),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then((resp) => resp.json())
      .then(json => {
        alert(json.msg);
        location.reload(); // Refrescar la página
      });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var url = window.location.href

  if (url.includes("/editarCategoria")) {
    var queryString = url.split('?')[1]
    var params = new URLSearchParams(queryString)
    var categoria = params.get('categoria')
    consultarCategoria(categoria)
  }
});
