import inicio from "./inicio.js"
import inimigo from "./enemy.js"
import carro from './carro.js'
var contador = 0
var pos = 0
function play(){
    if(contador==0){
        document.getElementsByClassName("regras")[0].style.display = "none"
        contador = 1;
        document.getElementById("resgate").style.display = "block"
    }
    else{
        document.getElementsByClassName("over")[0].style.display = "none"
        contador = 1;
    }
    inicio.movimento();
    background();
    carro();
    inimigo.enemy()
    //let tempo = setInterval(inimigo.enemy,2000)
}
function background(){
    pos -= 0.2
    document.getElementsByClassName('principal')[0].style.backgroundPosition = pos+'vw 0vw'
    let anima = requestAnimationFrame(background);
}
window.addEventListener('load',function(){
    document.getElementById("inicia").addEventListener('click', play)
    document.getElementById("reinicia").addEventListener('click', play)
})