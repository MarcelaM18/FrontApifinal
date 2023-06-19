const validateForm = () => {
  const validatecategoriaResult = validatecategoria();

      
  console.log("validate categoria ", validatecategoriaResult);

  return validatecategoriaResult;

  


};


const validatecategoria = () => {
  let categoria = document.getElementById('nombrecat').value;
  let texto;
  let expresion = /[a-zA-Z]/;

  if (categoria === null || categoria === '' || categoria.length === 0) {
    texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la categoría</span>';
    document.getElementById('texton').innerHTML = texto;
    return false;
  } else if (categoria.length < 3) {
    texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Tiene que ser mayor o igual a 3 caracteres</span>';
    document.getElementById('texton').innerHTML = texto;
    return false;
  } else if (!expresion.test(categoria)) {
    texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo caracteres válidos (Letras)</span>';
    document.getElementById('texton').innerHTML = texto;
    return false;
  } else {
    document.getElementById('texton').innerHTML = '';
    return true;
  }
};

