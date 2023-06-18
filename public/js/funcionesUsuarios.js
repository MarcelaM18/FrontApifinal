
const validateForm = () => {
    const validateNombreResult = validateNombre();
    const validateCorreoResult = validateCorreo();

  
      console.log("validate nombre " , validateNombre);
  
      if (validateNombreResult &&  validateCorreoResult ) {
        window.location.href = "/usuarios";
      }
    }


  const validateNombre = () => {
      let nombre = document.getElementById('nombre_Usuario').value;
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


  const validateClave = () => {
    let nombre = document.getElementById('clave').value;
    let texto;
    let expresion = /[a-zA-Z-0-9]/;
  
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
  
 exports.validateForm = validateForm;