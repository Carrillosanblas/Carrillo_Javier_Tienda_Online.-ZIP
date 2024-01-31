document.addEventListener('DOMContentLoaded', function () {
    const agregarCarritoButtons = document.querySelectorAll('.agregar-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');

    agregarCarritoButtons.forEach(button => {
        button.addEventListener('click', agregarAlCarrito);
    });

    function agregarAlCarrito(event) {
        const producto = event.target.parentElement;
        const productoId = producto.dataset.id;
        const productoNombre = producto.querySelector('p').textContent;
        const productoPrecio = parseFloat(producto.querySelector('.price').textContent.replace('€', ''));

        const nuevoItem = document.createElement('li');
        nuevoItem.innerHTML = `
            <span>${productoNombre} - ${productoPrecio}€</span>
            <button class="eliminar-item"> Eliminar</button>
        `;

        listaCarrito.appendChild(nuevoItem);

        actualizarTotal(productoPrecio);

        const eliminarBotones = document.querySelectorAll('.eliminar-item');
        eliminarBotones.forEach(boton => {
            boton.addEventListener('click', eliminarItem);
        });
    }

    function actualizarTotal(precio) {
        let total = parseFloat(totalElement.textContent);
        total += precio;
        totalElement.textContent = total.toFixed(2);
    }

    function eliminarItem(event) {
        const itemId = event.target.dataset.id;
        const item = document.querySelector(`[data-id="${itemId}"]`);

        const precioItem = parseFloat(item.querySelector('span').textContent.split('€')[1]);
        actualizarTotal(-precioItem);

        item.remove();
    }
});
