
const validateForm = () => {
  const validateNombreResult = validateNombre();
  const validateCedulaResult = validateCedula();
  const validateCorreoResult = validateCorreo();
  const validateDireccionResult = validateDireccion();
  const validateTelefonoResult = validateTelefono();

    console.log("validate nombre " , validateNombre);

    if (validateNombreResult && validateCedulaResult && validateCorreoResult && validateDireccionResult && validateTelefonoResult) {
      registrar();
    }
  }
const validateNombre = () => {
    let nombre = document.getElementById('nombre').value;
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (nombre === null || nombre === '' || nombre.length === 0) {
     
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese su nombre</span>';
      document.getElementById('texto').innerHTML = texto;
      return false;
    } else if (nombre.length < 3) {
      
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Tiene que ser mayor o igual a 3 caracteres</span>';
      document.getElementById('texto').innerHTML = texto;
      return false;
    } else if (!expresion.test(nombre)) {
      
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo caracteres válidos(Letras)</span>';
      document.getElementById('texto').innerHTML = texto;
      return false;
    } else {
      
      document.getElementById('texto').innerHTML = '';
      return true;

    }
   
  }; 

  const validateCorreo = () => {
    let correo = document.getElementById('correo').value.trim();
    let texto;
    let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!correo) {
      
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, ingrese su dirección de correo electrónico.</span>';
        document.getElementById('texto3').innerHTML = texto;
        return false;
    } else if (!expresion.test(correo)) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una dirección de correo electrónico válida.</span>';
        document.getElementById('texto3').innerHTML = texto;
        return false;
    }else {
      document.getElementById('texto3').innerHTML = '';
      return true;

    }

  
};

const validateDireccion = () => {
    let direccion = document.getElementById('direccion').value.trim();
    let texto;
    let expresion = /^[a-zA-Z0-9\s'#,-]*$/;
  
    if (!direccion) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, ingrese su dirección de residencia.</span>';
        document.getElementById('texto4').innerHTML = texto;
        return false;
    } else if (direccion.length < 5) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Su dirección de residencia debe tener al menos 5 caracteres.</span>';
        document.getElementById('texto4').innerHTML = texto;
        return false;
    } else if (!expresion.test(direccion)) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una dirección de residencia válida.</span>';
        document.getElementById('texto4').innerHTML = texto;
        return false;
    }else{
      document.getElementById('texto4').innerHTML = '';
      return true;

    }
    
    
};

const validateTelefono = () => {
    let telefono = document.getElementById('telefono').value.trim();
    let texto;
    let expresion = /^[0-9]+$/;
  
    if (!telefono) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, ingrese su número de teléfono.</span>';
        document.getElementById('texto5').innerHTML = texto;
        return false;
    } else if (telefono.length < 10) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Su número de teléfono debe tener al menos 10 dígitos.</span>';
        document.getElementById('texto5').innerHTML = texto;
        return false;
    } else if (!expresion.test(telefono)) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo números en su número de teléfono.</span>';
        document.getElementById('texto5').innerHTML = texto;
        return false;
    }else{
      document.getElementById('texto5').innerHTML = '';
      return true;
    }
   
   
};


  const validateCedula = () => {
    let cedula = document.getElementById('cedula').value;
    let texto;
    let expresion = /[0-9]/;
  
    if (cedula === null || cedula === '' || cedula.length === 0) {
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese su cédula</span>';
      document.getElementById('texto2').innerHTML = texto;
      return false;
    } else if (!expresion.test(cedula)) {
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo caracteres válidos (números)</span>';
      document.getElementById('texto2').innerHTML = texto;
      return false;
    } else if (cedula.length < 3) {
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Tiene que ser mayor a 3 valores numericos</span>';
      document.getElementById('texto2').innerHTML = texto;
      return false;
    } else if (cedula.length > 10) {
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Su cédula tiene que ser menor a 10 numeros</span>';
      document.getElementById('texto2').innerHTML = texto;
      return false;
    
    }else{
      document.getElementById('texto2').innerHTML = '';
      return true;
    }
    
   
    
  };
  
  