document.body.style.background = "black";
document.body.style.color = "white";
document.body.style.fontSize = "3em";
document.body.style.fontFamily = '"Courier New", monospace';
function writeConsole(html = "") {
    document.body.innerHTML += html + "<br>";
}
function drawLine(html = "") {
    document.body.innerHTML += html + "<hr>";
}
function clearConsole() {
    document.body.innerHTML = "";
}