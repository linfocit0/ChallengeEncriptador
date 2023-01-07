let verInput = document.getElementById("areatextInput");
let verOutput = document.getElementById("areatextOutput");
let botonEncriptar = document.getElementById("encriptar");
let botonDesencriptar = document.getElementById("desencriptar");

function encriptar(){
    document.getElementById("hacerDesaparecer").style.display="none";
    document.getElementById("campoOculto").style.display="flex";
    
    let elTexto = verInput.value.trimStart();
    elTexto=elTexto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

        verOutput.innerHTML = elTexto;
}
botonEncriptar.onclick = encriptar;

function desencriptar(){
    document.getElementById("hacerDesaparecer").style.display="none";
    document.getElementById("campoOculto").style.display="flex";

    let textoEncriptado = verInput.value.trimStart();
        textoEncriptado = textoEncriptado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

        verOutput.innerHTML = textoEncriptado;
    
}
botonDesencriptar.onclick = desencriptar;