
const validateForm = () => {
    const validateNombreResult = validateNombre();
    const validateTotalVentaResult = validateTotalVenta();
    const validateFechaResult = validateFecha();
    const validatePorcentajeResult = validatePorcentaje();

   
    
  
      console.log("validate nombre " , validateNombre);
  
      if (validateNombreResult && validateFechaResult && validateTotalVentaResult && validatePorcentajeResult) {
        window.location.href = "/comisiones";
      }
    }
  const validateNombre = () => {
      let nombre = document.getElementById('nombre').value;
      let texto;
      let expresion = /[a-zA-Z]/;
    
      if (nombre === null || nombre === '' || nombre.length === 0) {
       
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">El nombre no puede estar vacio</span>';
        document.getElementById('texto').innerHTML = texto;
        return false;
      } else if (nombre.length < 3) {
        
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">El nombre debe tener mas de dos caracteres</span>';
        document.getElementById('texto').innerHTML = texto;
        return false;
      } else if (!expresion.test(nombre)) {
        
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">El nombre solo puede contener letras</span>';
        document.getElementById('texto').innerHTML = texto;
        return false;
      } else {
        
        document.getElementById('texto').innerHTML = '';
        return true;
  
      }
    }; 

    const validateTotalVenta = () => {
        let venta = document.getElementById('total_ventas').value;
        let texto;
        let expresion = /[0-9]/;
      
        
        if (venta === 0 || venta === '' || venta === null) {
          texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un valor</span>';
          document.getElementById('texto2').innerHTML = texto;
          return false;
        }else if (venta < 0) {
          texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Solo se admiten numeros positivos</span>';
          document.getElementById('texto2').innerHTML = texto;
          return false;
        } else if (!expresion.test(venta)) {
          texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo caracteres válidos (números)</span>';
          document.getElementById('texto2').innerHTML = texto;
          return false;
        } else if (venta.length > 50) {
          texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Debe ser menor a 50 caracteres</span>';
          document.getElementById('texto2').innerHTML = texto;
          return false;    
        }else{
          document.getElementById('texto2').innerHTML = '';
          return true;
        }  
      }; 

      const validateFecha = () => {
        let fecha = document.getElementById('fecha_comi').value;
        let texto;
        let expresion = /^\d{4}-\d{2}-\d{2}$/;
      
        if (fecha === null || fecha === '' || fecha.length === 0) {
          texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">La fecha no puede estar vacía</span>';
          document.getElementById('texto4').innerHTML = texto;
          return false;
        } else if (!expresion.test(fecha)) {
          texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">El formato de fecha debe ser año-mes-día</span>';
          document.getElementById('texto4').innerHTML = texto;
          return false;
        } else {
          document.getElementById('texto4').innerHTML = '';
          return true;
        }
      };

      const validatePorcentaje = () => {
        let porcentaje = document.getElementById('porcentaje').value;
        let texto;
        let expresion = /^[0-5](\.[0-9]+)?$/;
      
        if (porcentaje === null || porcentaje === '') {
          texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Debe agregar un porcentaje</span>';
          document.getElementById('texto3').innerHTML = texto;
          return false;
        } else if (!expresion.test(porcentaje)) {
          texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">El porcentaje debe ser un valor numérico entre 0 y 5</span>';
          document.getElementById('texto3').innerHTML = texto;
          return false;
        } else {
          document.getElementById('texto3').innerHTML = '';
          return true;
        }
      };
  
    exports.validateForm = validateForm;