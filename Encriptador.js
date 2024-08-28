
function encriptarTexto(text){
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptarTexto(text){
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function verifyText(text) {
    if (text === "") {
        alert("Por favor, ingresa el texto que deseas encriptar o desencriptar.");
        return false;
    }

    const regex = /^[a-z\s]+$/;

    if (!regex.test(text)) {
        alert("Por favor, solo ingresa letras minusculas y sin acentos.");
        return false;
    }

    return true;
}

document.getElementById("btn-encriptar").addEventListener("click", function(){
    const textarea = document.getElementById("text-area");
    if (verifyText(textarea.value)) {
        const textOriginal = textarea.value;
        const textEncriptado = encriptarTexto(textOriginal);

        showMessage(textEncriptado);
        console.log(textEncriptado);
    }
});

document.getElementById("btn-desencriptar").addEventListener("click", function(){
    const textarea = document.getElementById("text-area");
    if(verifyText(textarea.value)) {
        const textoEncriptado = textarea.value;
        const textDesencriptado = desencriptarTexto(textoEncriptado);

        showMessage(textDesencriptado);
        console.log(textDesencriptado);
    }

});

function showMessage(message) {
    const containerMessage = document.querySelector(".container-message");
    containerMessage.innerHTML = `
        <h2>${message}</h2>
        <button class="btn-copy">Copiar</button>
    `;

    const copyButton = containerMessage.querySelector(".btn-copy");

    copyButton.style.display = "block";

    copyButton.addEventListener("click", function() {
        copyToClipboard(message);
    });
}

function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Texto copiado al portapapeles");
}
