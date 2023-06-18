
const validateForm = () => {
  
  const validateproveedorResult = validateproveedor();
  const validateproductoResult = validateproducto();
  const validateprecioCompraResult = validateprecioCompra();
  const validateprecioVentaResult =  validateprecioVenta();
  
  const validatenumFacturaResult = validatenumFactura()

  
    if ( validateproveedorResult && 
      validateproductoResult && validateprecioCompraResult && validateprecioVentaResult && 
      validatenumFacturaResult) {
      registrar()
    }
  }
  const validateproveedor = () => {
    let proveedor = document.getElementById('proveedor').value.trim();
    let texto;
    let expresion = /^[a-zA-Z\s]+$/;
  
    if (proveedor === '') {
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
 if (!expresion.test(producto)) {
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
  let expresion = /^[0-9]*$/;

  if (precioCompra !== '' && !expresion.test(precioCompra)) {
    texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo caracteres válidos (números)</span>';
    document.getElementById('texto5').innerHTML = texto;
    return false;
  } else {
    document.getElementById('texto5').innerHTML = '';
    return true;
  }
};

const validateprecioVenta = () => {
  let precioVenta = document.getElementById('precioVenta').value.trim();
  let texto;
  let expresion = /^[0-9]*$/;

  if (precioVenta !== '' && !expresion.test(precioVenta)) {
    texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo caracteres válidos (números)</span>'+'<br>';
    document.getElementById('texto7').innerHTML = texto;
    return false;
  } else {
    document.getElementById('texto7').innerHTML = '';
    return true;
  }
};



const validatenumFactura = () => {
  let numFactura = document.getElementById('numFactura').value.trim();
  let texto;
  let expresion = /^[0-9]+$/;

  if (!numFactura) {
    texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el número de la compra.</span>';
    document.getElementById('textoF').innerHTML = texto;
    return false;
  } else if (!expresion.test(numFactura)) {
    texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo caracteres válidos (números).</span>';
    document.getElementById('textoF').innerHTML = texto;
    return false;   
  } else {
    document.getElementById('textoF').innerHTML = '';
    return true;
  }
};




  


