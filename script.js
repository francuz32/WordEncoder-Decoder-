//Obtain text from textarea and save on variable to be used later
document.getElementById("uno").onclick = function convertir() {
    var myName = document.getElementById("entrada").value;

    //Create an array to save the text split
    var cut = myName.split('');
    console.log(cut)

    //Check array elements one by one and replace depending on the letter
    for (let i = 0; i < cut.length; i++) {
        if (cut[i] == "a") {
            cut[i] = "ai";
        } else if (cut[i] == "e") {
            cut[i] = "enter";
        } else if (cut[i] == "i") {
            cut[i] = "imes";
        } else if (cut[i] == "o") {
            cut[i] = "ober";
        } else if (cut[i] == "u") {
            cut[i] = "ufat";
        }
    }
    console.log(cut);
    //Turn array back into string
    var end = cut.join("");
    console.log(end);

    //Show new string in the white textarea 
    document.getElementById("encriptado").innerHTML = end;
}

//Obtaining data from second button (same text but different js function)
document.getElementById("dos").onclick = function revertir() {
    var convertido = document.getElementById("entrada").value;
    console.log(convertido);

    //Replacing each letter combination for its respective vowel
    var convertir = convertido.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u")
    console.log(convertir);

    //Showing the result on the white textarea
    document.getElementById("encriptado").innerHTML = convertir;
}

//Function to copy text in clipboard
function copiar() {
    var copiarTexto = document.getElementById("encriptado");
    navigator.clipboard.writeText(copiarTexto.value)
    .then(() => {
        alert("Texto copiado");
    })
    .catch(() => {
        alert("Hubo un problema");
    });

}