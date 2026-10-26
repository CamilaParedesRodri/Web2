function saludar() {
    const nombre = prompt("Ingrese su nombre:");
    if (nombre === null) {
        return;
    }

    const mensaje = `HOLA, ${nombre} Bienvenido al laboratorio de JavaScript`;
    document.getElementById("resultado").innerText = mensaje;
}

const persona = {
    nombre: "Jaime",
    saludar: function() {
        return "Hola, " + this.nombre + "!";
    }
};

document.getElementById("dato").textContent = "mensaje: " + persona.saludar();
document.getElementById("boton-saludar").addEventListener("click", saludar);