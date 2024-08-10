let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let seg = document.getElementById("segundos");

let relogio = setInterval(function time() {
    let dia = new Date();

    let hr = dia.getHours();
    let min = dia.getMinutes();
    let s = dia.getSeconds();

    if (hr < 10) hr = "0" + hr;

    if (min < 10) min = "0" + min;

    if (s < 10) s = "0" + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
});
