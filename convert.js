function kelvin() {
    var t = document.getElementById("temp").value;
    var o= t-273.15;
    document.getElementById("out").innerHTML = o.toFixed(2) + " Grados Kelvin";
}

function cel(){
    var t = document.getElementById("temp1").value
    var o = t+273.15;
    document.getElementById("out").innerHTML = o.toFixed(2) + " Grados Celsius"
}

function Euro(){
    var t = document.getElementById("temp").value
    var o = t*1.13;
    document.getElementById("out").innerHTML = o.toFixed(2) + " Euros"
}

function Dolares(){
    var t = document.getElementById("temp").value
    var o = t*.89;
    document.getElementById("out").innerHTML = o.toFixed(2) + " Dolares"
}

function km(){
    var t = document.getElementById("temp").value
    var o = t*0.621371;
    document.getElementById("out").innerHTML = o.toFixed(2) + " km"
}

function millas(){
    var t = document.getElementById("temp").value
    var o = t*1.60934;
    document.getElementById("out").innerHTML = o.toFixed(2) + " millas"
}
