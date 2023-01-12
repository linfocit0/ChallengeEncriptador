let verInput = document.getElementById("areatextInput");
let verOutput = document.getElementById("areatextOutput");
let botonEncriptar = document.getElementById("encriptar");
let botonDesencriptar = document.getElementById("desencriptar");
let botonDeCopiar = document.getElementById("botonCopiar")

//LA FUNCION DE VALIDACION Y ENCRIPTACION
function validacionYEncriptacion(){
    const noPermitidos = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?=><:"`;.,áéíóúàèìòù'1-9]/g;
    let paraValidar = verInput.value;    
    if (paraValidar.match(noPermitidos) != null) {
        ambienteDeAlerta();        
    }else{
        ambienteNormal();
        encriptar();
    }
}
//FUNCION AMBIENTE DE ALERTA Y NORMAL
function ambienteDeAlerta(){
	document.getElementById("textoDisclaimer").style.color = "red";
        document.getElementById("textoDisclaimer").style.fontWeight = "bolder";
        document.getElementById("textoDisclaimer").style.fontSize = "30px";
        verInput.style.borderColor="red";
        verInput.style.color="white";
        verInput.style.borderWidth="thick";
        verInput.style.backgroundColor="red";
        document.getElementById("hacerDesaparecer").style.display="flex";
        document.getElementById("campoOculto").style.display="none";
}

function ambienteNormal(){
    document.getElementById("textoDisclaimer").style.color = "#000000";
        document.getElementById("textoDisclaimer").style.fontWeight = "auto";
        document.getElementById("textoDisclaimer").style.fontSize = "16px";
        verInput.style.borderColor="#767676";
        verInput.style.color="#000000";
        verInput.style.borderWidth="1px";
        verInput.style.backgroundColor="#FFFFFF";
}
botonEncriptar.addEventListener("click", validacionYEncriptacion);

//LA FUNCION ENCRIPTAR
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


//LA FUNCION DE VALIDACION Y DESENCRIPTACION
function validacionYDesencriptacion(){
    const noPermitidos = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?=><:"`;.,áéíóúàèìòù'1-9]/g;
    let paraValidar = verInput.value;    
    if (paraValidar.match(noPermitidos) != null) {
        ambienteDeAlerta();        
    }else{
        ambienteNormal();
        desencriptar();
    }
}
botonDesencriptar.addEventListener("click", validacionYDesencriptacion);


//LA FUNCION DESENCRIPTAR
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

//FUNCION COPIAR
function copiar(){
    let textoParaCopiar = verOutput.value;
    navigator.clipboard.writeText(textoParaCopiar);
    alert("Mensaje Copiado");    
}
botonDeCopiar.addEventListener("click", copiar);
