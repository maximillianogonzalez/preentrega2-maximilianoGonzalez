let productos = [];
let total = 0;

// Funciones
function agregarProducto() {
  const productoInput = prompt('Ingresa el nombre del producto:');
  const cantidadInput = prompt('Ingresa la cantidad:');
  const precioInput = prompt('Ingresa el precio:');
  
  if (productoInput && cantidadInput && precioInput) {
    const producto = {
      nombre: productoInput,
      cantidad: Number(cantidadInput),
      precio: Number(precioInput)
    };
    productos.push(producto);
    actualizarLista();
    actualizarTotal();
  }
}

function buscarProducto() {
    const productoBuscado = prompt('Ingresa el nombre del producto que deseas buscar:');
    const productoEncontrado = productos.find(producto => producto.nombre === productoBuscado);
    if (productoEncontrado) {
      alert(`${productoEncontrado.nombre} x ${productoEncontrado.cantidad} = $${productoEncontrado.cantidad * productoEncontrado.precio}`);
    } else {
      alert(`El producto ${productoBuscado} no se encontró en la lista.`);
    }
  }

function actualizarLista() {
  console.log('Lista de productos:');
  productos.forEach(producto => {
    console.log(`${producto.nombre} x ${producto.cantidad} = $${producto.cantidad * producto.precio}`);
  });
}

function actualizarTotal() {
  total = productos.reduce((acumulador, producto) => acumulador + producto.cantidad * producto.precio, 0);
  console.log(`Total: $${total}`);
}

// Agregar productos y buscar un producto en la lista
while (true) {
  const opcion = prompt('Selecciona una opción:\n1. Agregar un producto\n2. Buscar un producto\n3. Salir');
  
  if (opcion === '1') {
    agregarProducto();
  } else if (opcion === '2') {
    buscarProducto();
  } else if (opcion === '3') {
    break;
  } else {
    console.log('Opción inválida');
  }
}
