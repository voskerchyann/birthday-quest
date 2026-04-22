let password = "smetan";

function check() {
    let input = document.getElementById("input").value;
    let result = document.getElementById("result");

    if (input === password) {
        result.innerText = "ДА ВЫ ГЕНИЙ!!!! \n smetan kutes?";
        result.style.color = "lightgreen";
    } else {
        result.innerText = "che aziz jan sxal es, hushum: paroly " + password.length + " taric a";
        result.style.color = "red";
    }
}
