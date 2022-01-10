import inicio from "./inicio.js"
import inimigo from "./enemy.js"
import carro from './carro.js'
import militar from "./militar.js"
import view from "./view.js"
var contador = 0
var pos = 0
function play(){
    localStorage.setItem('vidas', 3)
    localStorage.setItem('pontuacao', 0)
    pos = 0
    document.getElementById('yourAudioTag').play();
    document.getElementById('yourAudioTag').volume = 0.2;
    if(contador==0) document.getElementsByClassName("regras")[0].style.display = "none"
    else document.getElementsByClassName("over")[0].style.display = "none"
    contador = 1;
    let soma = 0
    for (let i = 0; i < 3; i++){
        view.criaVida()
    }
    for (let i = 0; i < 3; i++) {
        document.getElementsByClassName('heart')[i].style.display = 'block'
        document.getElementsByClassName('heart')[i].style.left = soma + 'px'
        soma += 52
    }
    inicio.movimento();
    background();
    carro();
    militar();
    inimigo.enemy()
}
function background(){
    let life = localStorage.getItem('vidas')
    if(life>0){
        pos -= 0.2
        document.getElementsByClassName('principal')[0].style.backgroundPosition = pos+'vw 0vw'
        let anima = requestAnimationFrame(background);
    }
}
window.addEventListener('load',function(){
    localStorage.setItem('vidas', 3)
    document.getElementById("inicia").addEventListener('click', play)
    document.getElementById("reinicia").addEventListener('click', play)
})