// script.js

// Espera a que todo el contenido de la página se cargue
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene los elementos del DOM (Document Object Model)
    const texto = document.getElementById("texto"); // Textarea donde el usuario ingresa el texto
    const resultado = document.getElementById("resultado"); // Parrafo donde se mostrará el resultado
    const encriptarBtn = document.getElementById("encriptar"); // Botón de encriptar
    const desencriptarBtn = document.getElementById("desencriptar"); // Botón de desencriptar

    // Función para encriptar el texto
    const encriptar = (str) => {
        const reglas = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };
        // Reemplaza cada letra según las reglas de encriptación
        return str.split('').map(char => reglas[char] || char).join('');
    };

    // Función para desencriptar el texto
    const desencriptar = (str) => {
        const reglas = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };
        let desencriptado = str;
        // Reemplaza cada cadena encriptada según las reglas de desencriptación
        for (let [key, value] of Object.entries(reglas)) {
            desencriptado = desencriptado.split(key).join(value);
        }
        return desencriptado;
    };

    // Añade un evento al botón de encriptar
    encriptarBtn.addEventListener("click", () => {
        const textoIngresado = texto.value;
        // Verifica que solo se ingresen letras minúsculas y sin acentos
        if (/^[a-z\s]*$/.test(textoIngresado)) {
            resultado.textContent = encriptar(textoIngresado); // Muestra el resultado encriptado
        } else {
            alert("Por favor, ingrese solo letras minúsculas y sin acentos.");
        }
    });

    // Añade un evento al botón de desencriptar
    desencriptarBtn.addEventListener("click", () => {
        const textoIngresado = texto.value;
        // Verifica que solo se ingresen letras minúsculas y sin acentos
        if (/^[a-z\s]*$/.test(textoIngresado)) {
            resultado.textContent = desencriptar(textoIngresado); // Muestra el resultado desencriptado
        } else {
            alert("Por favor, ingrese solo letras minúsculas y sin acentos.");
        }
    });
});
