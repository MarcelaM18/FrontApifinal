
const validateForm = () => {
    const validateNombreResult = validateNombre();
    const validateFacturaResult = validateFactura();
    const validateFechaResult = validateFecha();
    const validateCantidadPagoResult = validateCantidadPago();
    const validateCantidadRestanteResult = validateCantidadRestante();
    const validateTotalVentaResult = validateTotalVenta();
  
      console.log("validate nombre " , validateNombre);
  
      if (validateNombreResult && validateFacturaResult && validateFechaResult && validateCantidadPagoResult && validateCantidadRestanteResult && validateTotalVentaResult ) {
        window.location.href = "/pagos";
      }
    }
  const validateNombre = () => {
      let nombre = document.getElementById('nombrecli').value;
      let texto;
      let expresion = /[a-zA-Z]/;
    
      if (nombre === null || nombre === '' || nombre.length === 0) {
       
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">El nombre no puede estar vacio</span>';
        document.getElementById('texto2').innerHTML = texto;
        return false;
      } else if (nombre.length < 3) {
        
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">El nombre debe tener mas de dos caracteres</span>';
        document.getElementById('texto2').innerHTML = texto;
        return false;
      } else if (!expresion.test(nombre)) {
        
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">El nombre solo puede contener letras</span>';
        document.getElementById('texto2').innerHTML = texto;
        return false;
      } else {
        
        document.getElementById('texto2').innerHTML = '';
        return true;
  
      }
     
    }; 
  
    const validateFactura = () => {
      let factura = document.getElementById('factura').value.trim();
      let texto;
      let expresion = /^\d+$/;
    
      if (factura === null || factura === '' || factura.lengt === 0) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">El número de factura no puede estar vacío</span>';
        document.getElementById('texto3').innerHTML = texto;
        return false;
      } else if (!expresion.test(factura) || factura.length >= 6) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">El número de factura debe ser un número positivo de menos de 6 dígitos</span>';
        document.getElementById('texto3').innerHTML = texto;
        return false;
      } else {
        document.getElementById('texto3').innerHTML = '';
        return true;
      }
    };
  
    const validateFecha = () => {
      let fecha = document.getElementById('fecha').value;
      let texto;
      let expresion = /^\d{4}-\d{2}-\d{2}$/;
    
      if (fecha === null || fecha === '' || fecha.length === 0) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">La fecha no puede estar vacía</span>';
        document.getElementById('texto').innerHTML = texto;
        return false;
      } else if (!expresion.test(fecha)) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">El formato de fecha debe ser año-mes-día</span>';
        document.getElementById('texto').innerHTML = texto;
        return false;
      } else {
        document.getElementById('texto').innerHTML = '';
        return true;
      }
    };
  
    const validateCantidadPago = () => {
      let pago = document.getElementById('cantidad_pago').value;
      let texto;
      let expresion = /[0-9]/;
    
      
      if (pago === 0 || pago === '' || pago === null) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un valor</span>';
        document.getElementById('texto4').innerHTML = texto;
        return false;
      }else if (pago < 0) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Solo se admiten numeros positivos</span>';
        document.getElementById('texto4').innerHTML = texto;
        return false;
      } else if (!expresion.test(pago)) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo caracteres válidos (números)</span>';
        document.getElementById('texto4').innerHTML = texto;
        return false;
      } else if (pago.length > 50) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Debe ser menor a 10 caracteres</span>';
        document.getElementById('texto4').innerHTML = texto;
        return false;
      }
      else if(pago >= document.getElementById('venta').value){
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">La cantidad a pagar debe ser menor al total de la venta</span>';
        document.getElementById('texto4').innerHTML = texto;
        return false;
      }else{
        document.getElementById('texto4').innerHTML = '';
        return true;
      }  
    };

    const validateCantidadRestante = () => {
      let resto = document.getElementById('cantidad_restante').value;
      let texto;
      let expresion = /[0-9]/;
    
      
      if (resto === 0 || resto === '' || resto === null) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un valor</span>';
        document.getElementById('texto5').innerHTML = texto;
        return false;
      }else if (resto < 0) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Solo se admiten numeros positivos</span>';
        document.getElementById('texto5').innerHTML = texto;
        return false;
      } else if (!expresion.test(resto)) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo caracteres válidos (números)</span>';
        document.getElementById('texto5').innerHTML = texto;
        return false;
      } else if (resto.length > 50) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Debe ser menor a 10 caracteres</span>';
        document.getElementById('texto5').innerHTML = texto;
        return false;
      }else if(resto >= document.getElementById('venta').value){
          texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">La cantidad restante debe ser menor al total de la venta</span>';
          document.getElementById('texto5').innerHTML = texto;
          return false;
      }else{
        document.getElementById('texto5').innerHTML = '';
        return true;
      }  
    };

    const validateTotalVenta = () => {
      let venta = document.getElementById('venta').value;
      let texto;
      let expresion = /[0-9]/;
    
      
      if (venta === 0 || venta === '' || venta === null) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un valor</span>';
        document.getElementById('texto6').innerHTML = texto;
        return false;
      }else if (venta < 0) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Solo se admiten numeros positivos</span>';
        document.getElementById('texto6').innerHTML = texto;
        return false;
      } else if (!expresion.test(venta)) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo caracteres válidos (números)</span>';
        document.getElementById('texto6').innerHTML = texto;
        return false;
      } else if (venta.length > 50) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Debe ser menor a 50 caracteres</span>';
        document.getElementById('texto6').innerHTML = texto;
        return false;
      }else if(venta < document.getElementById('cantidad_pago').value || venta < document.getElementById('cantidad_restante').value){
          texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">El total de la venta debe ser mayor al pago y al restante</span>';
          document.getElementById('texto6').innerHTML = texto;
          return false;
        
      }else{
        document.getElementById('texto6').innerHTML = '';
        return true;
      }  
    };
    
    exports.validateForm = validateForm;


    
