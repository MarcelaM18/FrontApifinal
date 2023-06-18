const validateForm = () => {


  const validateCliente = () => {
    let cliente = document.getElementById('cliente').value;
    let texto;

    if (cliente === '') {
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, seleccione el cliente</span><br><br>';
      document.getElementById('texto1').innerHTML = texto;
      return false;
    } else {
      document.getElementById('texto1').innerHTML = '';
      return true;
    }
  };

  const validateVendedor = () => {
    let empleado = document.getElementById('empleado').value;
    let texto;

    if (empleado === '') {
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, seleccione el vendedor</span><br><br>';
      document.getElementById('texto2').innerHTML = texto;
      return false;
    } else {
      document.getElementById('texto2').innerHTML = '';
      return true;
    }
  };

  const validateFecha = () => {
    let fecha = new Date(document.getElementById('fecha_pedido').value);
    let fecha_actual = new Date();
    let fecha_limite = new Date();
    fecha_limite.setFullYear(fecha_actual.getFullYear() + 2);
    let texto;

    if (isNaN(fecha)) {
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, ingrese la fecha del pedido.</span><br><br>';
      document.getElementById('texto3').innerHTML = texto;
      return false;
    } else if (fecha < fecha_actual) {
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">La fecha ingresada debe ser mayor o igual a la fecha actual.</span><br><br>';
      return false;
    } else if (fecha > fecha_limite) {
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">La fecha ingresada debe ser menor a la fecha límite.</span><br><br>';
      return false;
    } else {
      document.getElementById('texto3').innerHTML = '';
      return true;
    }
  };

  const validateTipoPago = () => {
    let tipo_pago = document.getElementById('tipo_pago').value;
    let texto;

    if (tipo_pago === '') {
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, seleccione el tipo de pago</span><br><br>';
      document.getElementById('texto4').innerHTML = texto;
      return false;
    } else {
      document.getElementById('texto4').innerHTML = '';
      return true;
    }
  };

  const validateNum = () => {
    let cantidad = document.getElementById('cantidad').value.trim();
    let texto;
    let expresion = /^[0-9]+$/;

    if (!cantidad) {
      texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, ingrese la cantidad de productos.</span>';
      document.getElementById('texto5').innerHTML = texto;
      return false;
    } else {
      document.getElementById('texto5').innerHTML = '';
      return true;
    }
  }
  validateCliente();
  validateVendedor();
  validateFecha();
  validateTipoPago();
  validateNum();

  let resultCliente = validateCliente();
  let resultVendedor = validateVendedor();
  let resultFecha = validateFecha();
  let resultTipoPago = validateTipoPago();
  let resultNum = validateNum();

  if (resultCliente && resultVendedor && resultFecha && resultTipoPago && resultNum) {
    window.location.href = '/pedidos';
  }
}

exports.validateForm = validateForm;


