const validateForm = () => {


  const validateNombre = () => {
    let nombre = document.getElementById('nombre').value;
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (nombre === null || nombre === '' || nombre.length === 0) {
     
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese su nombre</span>';
      document.getElementById('texto1').innerHTML = texto;
      return false;
    } else if (nombre.length < 4) {
      
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Tiene que ser mayor o igual a 4 caracteres</span>';
      document.getElementById('texto1').innerHTML = texto;
      return false;
    } else if (!expresion.test(nombre)) {
      
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo caracteres válidos(Letras)</span>';
      document.getElementById('texto1').innerHTML = texto;
      return false;
    } else {
      
      document.getElementById('texto1').innerHTML = '';
      return true;

    }
   
  }; 

  const validateDescripcion = () => {
    let descripcion = document.getElementById('descripcion').value;
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (descripcion === null || descripcion === '' || descripcion.length === 0) {
     
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una descrición</span>';
      document.getElementById('texto2').innerHTML = texto;
      return false;
    } else if (descripcion.length < 10) {
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Tiene que ser mayor o igual a 10 caracteres</span>';
      document.getElementById('texto2').innerHTML = texto;
      return false;
    } else if (!expresion.test(descripcion)) {
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo caracteres válidos(Letras)</span>';
      document.getElementById('texto2').innerHTML = texto;
      return false;
    } else {
      document.getElementById('texto2').innerHTML = '';
      return true;
    }
  }; 


  
  validateNombre();
  validateDescripcion();

  let resultNombre = validateNombre();
  let resultDescripcion = validateDescripcion();

  if (resultNombre && resultDescripcion) {
    window.location.href = '/roles';
  }
}

exports.validateForm = validateForm;


