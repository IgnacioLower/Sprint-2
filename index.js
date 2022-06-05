const pagos = [];
const usuarios = [];
const listado = document.getElementById("list-group");
const cuadroResultado  = document.getElementById("total");
const usuario = document.getElementById("nombre");
const pago = document.getElementById("pago");



function dividirGastos() {
    agregarGastosAListas();
    ultimoAPantalla();
    mostrarPagoIndividualEnHTML();
    formulario.reset();
}

function agregarGastosAListas() {
    if (usuario.value == '' && pago.value == '') {
        swal({
            title: "¡Faltan datos!",
            text: "Debés ingresar los datos del gasto para poder continuar.",
            button: "Ingresar dato",
            icon: "error"
        });
        usuario.onfocus;
    } else if (usuario.value == '') {
        swal({
            title: "¡Faltan datos!",
            text: "Falta ingresar el nombre de la persona.",
            button: "Ingresar dato",
            icon: "warning"
        });
        usuario.autofocus;
    } else if (pago.value == ''){
        swal({
            title: "¡Faltan datos!",
            text: 'Falta ingresar el gasto realizado por '+usuario.value,
            button: "Ingresar dato",
            icon: "warning"
        });
        pago.focus();
    } else {
        usuarios.push(usuario.value);
        pagos.push(pago.value);
    }
}

function ultimoAPantalla() {
    if (usuario.value !== '' && pago.value !=='') {
        const li = document.createElement("li");
        const text = document.createTextNode(`${usuario.value}: Pagó $${pago.value}`);
        li.classList.add("list-group-item");
        li.appendChild(text);
        listado.appendChild(li);
    } else {
        agregarGastosAListas();
    }
    
}

function sumarValores() {
    let suma = 0;
    for (let cadaPago of pagos) {
        suma += parseInt(cadaPago);
    }
    return suma;
}

function mostrarPagoIndividualEnHTML() {
    const total = sumarValores(pagos);
    if (usuarios.length !== 0) {
        const aporteIndividual = total / usuarios.length;
        cuadroResultado.classList.add("resumen")
        cuadroResultado.innerText = `Total: $${total}
                                    A cada uno le toca aportar: $${aporteIndividual.toFixed(2)} (${usuarios.length} Persona/s)`; 
    }
    
}