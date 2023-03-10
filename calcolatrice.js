function n(dato) {
     document.getElementById("operazioni").value +=dato;
}

function cancella() {
    document.getElementById("operazioni").value ="";
}

function operazione() {
    document.getElementById("operazioni").value=eval(document.getElementById("operazioni").value);
}