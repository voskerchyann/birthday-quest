
window.onload = function () {
    let btn = document.getElementById("secret");

    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);

    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
};

function win() {
    document.getElementById("result").innerText = "Du gtar indz!";
    document.getElementById("result").style.fontSize = "20";
    document.getElementById("result").style.color = "green";
}
