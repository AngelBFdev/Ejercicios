function carac(){
    let t=document.getElementById("textarea").value;
    document.getElementById("cara").innerHTML=t.length;
}

function palab(){
    let t=document.getElementById("textarea").value;
    document.getElementById("pala").innerHTML=t.split(" ").length;
}
