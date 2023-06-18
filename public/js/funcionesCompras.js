
const validateForm = () => {
  const validatefechaCompraResult = validatefechaCompra();
  const validatefechaRegistroResult = validatefechaRegistro();
  const validateproveedorResult = validateproveedor();
  const validateproductoResult = validateproducto();
  const validateprecioCompraResult = validateprecioCompra();
  const validateprecioVentaResult =  validateprecioVenta();
  const validatetotalCompraResult = validatetotalCompra();


    console.log("validate fechaCompra " , validatefechaCompra);

    if (validatefechaCompraResult && validatefechaRegistroResult && validateproveedorResult && validateproductoResult && validateprecioCompraResult && validateprecioVentaResult && validatetotalCompraResult) {
      registrar()
    }
  }
const validatefechaCompra = () => {
    let fechaCompra = document.getElementById('fechaCompra').value;
    let texto;
    let expresion = /^(0[1-9]|[1-2]\d|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
  
    if (fechaCompra === null || fechaCompra === '' || fechaCompra.length === 0) {
     
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese su fechaCompra</span>';
      document.getElementById('textoc').innerHTML = texto;
      return false;
    } else if (fechaCompra.length < 3) {
      
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Tiene que ser mayor o igual a 3 caracteres</span>';
      document.getElementById('textoc').innerHTML = texto;
      return false;
    } else if (!expresion.test(fechaCompra)) {
      
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo caracteres válidos(DD/MES/AÑO)</span>';
      document.getElementById('textoc').innerHTML = texto;
      return false;
    } else {
      
      document.getElementById('texto').innerHTML = '';
      return true;

    }
   
  }; 
  const validateproveedor = () => {
    let proveedor = document.getElementById('proveedor').value.trim();
    let texto;
    let expresion = /^[a-zA-Z\s]+$/;
  
    if (!proveedor) {
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, ingrese el proveedor.</span>';
      document.getElementById('texto2').innerHTML = texto;
      return false;
    } else if (!expresion.test(proveedor)) {
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Este campo solo recibe letras y espacios en blanco.</span>';
      document.getElementById('texto2').innerHTML = texto;
      return false;
    } else {
      document.getElementById('texto2').innerHTML = '';
      return true;
    }
  };
  

const validateproducto = () => {
    let producto = document.getElementById('producto').value.trim();
    let texto;
    let expresion = /^[a-zA-Z0-9\s'#,-]*$/;
  
    if (!producto) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, el nombre del producto</span>';
        document.getElementById('texto3').innerHTML = texto;
        return false;
    } else if (producto.length < 5) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">el producto debe tener al menos 5 caracteres.</span>';
        document.getElementById('texto3').innerHTML = texto;
        return false;
    } else if (!expresion.test(producto)) {
        texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Este campo solo recibe letras o numeros</span>';
        document.getElementById('texto3').innerHTML = texto;
        return false;
    }else{
      document.getElementById('texto3').innerHTML = '';
      return true;

    }
    
    
};


const validateprecioCompra = () => {
  let precioCompra = document.getElementById('precioCompra').value.trim();
  let texto;
  let expresion = /[0-9]/;

if (precioCompra === null || precioCompra === '' || precioCompra.length === 0) {
  texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el precio de compra</span>';
  document.getElementById('texto5').innerHTML = texto;
  return false;
} else if (!expresion.test(precioCompra)) {
  texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo caracteres válidos (números)</span>';
  document.getElementById('texto5').innerHTML = texto;
  return false;   
}else{
  document.getElementById('texto5').innerHTML = '';
  return true;
}
 
 
};

  const validatefechaRegistro = () => {
    let fechaRegistro = document.getElementById('fechaRegistro').value;
    let texto;
    let expresion = /^(0[1-9]|[1-2]\d|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
  
    if (fechaRegistro === null || fechaRegistro === '' || fechaRegistro.length === 0) {
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">La fecha de registro</span>';
      document.getElementById('texto').innerHTML = texto;
      return false;
    } else if (!expresion.test(fechaRegistro)) {
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo caracteres válidos(DD/MES/AÑO)</span>';
      document.getElementById('texto').innerHTML = texto;
      return false;
    } else if (fechaRegistro.length < 3) {
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo caracteres válidos(DD/MES/AÑO)</span>';
      document.getElementById('texto').innerHTML = texto;
      return false;
    }else{
      document.getElementById('texto').innerHTML = '';
      return true;
    }
    
   
    
  };

  const validateprecioVenta = () => {
    let precioVenta = document.getElementById('precioVenta').value.trim();
    let texto;
    let expresion = /[0-9]/;
  
  if (precioVenta === null || precioVenta === '' || precioVenta.length === 0) {
    texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el precio de venta</span>'+'<br>';
    document.getElementById('texto7').innerHTML = texto;
    return false;
  } else if (!expresion.test(precioVenta)) {
    texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo caracteres válidos (números)</span>'+'<br>';
    document.getElementById('texto37').innerHTML = texto;
    return false;   
  }else{
    document.getElementById('texto7').innerHTML = '';
    return true;
  }
   
   
  };

  const validatetotalCompra = () => {
    let totalCompra = document.getElementById('totalCompra').value.trim();
    let texto;
    let expresion = /[0-9]/;
  
  if (totalCompra === null || totalCompra === '' || totalCompra.length === 0) {
    texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el valor de la compra</span>';
    document.getElementById('texto6').innerHTML = texto;
    return false;
  } else if (!expresion.test(totalCompra)) {
    texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo caracteres válidos (números)</span>';
    document.getElementById('texto6').innerHTML = texto;
    return false;   
  }else{
    document.getElementById('texto6').innerHTML = '';
    return true;
  }

  
   
   
  };


