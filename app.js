const texto_cifrado = document.querySelector("#texto-cifrado");
const texto_descifrado = document.querySelector("#texto-descifrado");

const matriz_code = [
  ["a", "ad"],
  ["e", "enter"],
  ["i", "imes"],
  ["o", "ober"],
  ["u", "ufat"],
];

function estadoBotonCopiar() {
  let btnCopiar = document.querySelector(".btnCopiar");
  if (texto_descifrado.value.trim() !== "") {
    btnCopiar.style.display = "block";
  } else {
    btnCopiar.style.display = "none";
  }
}

function btnEncriptar() {
  if (texto_cifrado.value.trim() !== "") {
    const texto = encriptar(texto_cifrado.value);
    texto_descifrado.value = texto;
    estadoBotonCopiar(); // Actualiza el estado del botón de copiar
  } else {
    alert("El texto está vacío. Por favor, ingresa un texto antes de encriptar.");
  }
}

function btnDesencriptar() {
  if (texto_cifrado.value.trim() !== "") {
    const texto2 = desencriptar(texto_cifrado.value);
    texto_descifrado.value = texto2;
    estadoBotonCopiar(); // Actualiza el estado del botón de copiar
  } else {
    alert("El texto está vacío. Por favor, ingresa un texto antes de desencriptar.");
  }
}

function encriptar(fraseEncriptada){
  for (let i = 0; i < matriz_code.length; i++) {
    if (fraseEncriptada.includes(matriz_code[i][0])) {
        fraseEncriptada = fraseEncriptada.replaceAll(
        matriz_code[i][0],  
        matriz_code[i][1],
        limpiarTextArea()
      )
    }
  }
  return fraseEncriptada;
};

function desencriptar(fraseDesencriptada){
  for (let i = 0; i < matriz_code.length; i++) {
    if (fraseDesencriptada.includes(matriz_code[i][0])){
        fraseDesencriptada = fraseDesencriptada.replaceAll(
        matriz_code[i][1],
        matriz_code[i][0],
        limpiarTextArea()
      )
    }
  }
  return fraseDesencriptada;
};

function eliminarBG() {
  texto_descifrado.style.backgroundImage = "none";
};

function reaparecerBG() {
  texto_descifrado.style.backgroundImage = "url(imagenes/1111.png)";
};

function copiarTexto() {
  texto_descifrado.select();
  document.execCommand("copy");
  alert("Texto copiado al portapapeles: " + texto_descifrado.value);
  limpiarResultado();
  estadoBotonCopiar();
  reaparecerBG();
};

function lowerCase() {
  let letras = texto_cifrado.value;
  // Reemplazar letras con acentos
  letras = letras.replace(/[áä]/g, "a")
                         .replace(/[éë]/g, "e")
                         .replace(/[íï]/g, "i")
                         .replace(/[óö]/g, "o")
                         .replace(/[úü]/g, "u");
   // Filtrar caracteres especiales
  letras = letras.replace(/[^a-zA-Z0-9\s]/g,"");
   // Transformar lestras MAYUSCULAS a letras
   texto_cifrado.value = letras.toLowerCase();
}

function limpiarTextArea() {
  const textArea = document.querySelector(".text-area");
  textArea.value = ""
}

function limpiarResultado() {
  const resultado = document.querySelector(".resultado");
  resultado.value = ""
}