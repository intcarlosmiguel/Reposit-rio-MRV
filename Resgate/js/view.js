var remocao
function removeAll(){
    document.getElementById('pontos').innerHTML = localStorage.getItem('pontuacao')
    const listId = ["militar", "enemy_h", "carro",'bullet','resgate'];
    for (let i of listId) {
        try{
            document.getElementById(i).remove()
        }
        catch(err){continue}
    }
    document.getElementsByClassName("over")[0].style.display = "block"
    document.getElementById('yourAudioTag').pause();
    document.getElementById('yourAudioTag').currentTime = 0;
}
function criaVida(){
    let algo = document.createElement('img')
    algo.classList.add('heart');
    algo.src = "./img/heart.png"
    algo.style.height = 50 + 'px'
    algo.style.width = 50 + 'px'
    document.getElementsByClassName('principal')[0].appendChild(algo);
}
function remover() {
    document.getElementById('explosion').remove()
    clearTimeout(remocao);
}
function criaExplosao(left,top){
    let explosion = document.createElement("img");
    explosion.id = "explosion"
    explosion.src = "./img/explosion.gif"
    document.getElementsByClassName('principal')[0].appendChild(explosion);
    explosion = document.getElementById('explosion')
    explosion.style.left = left + 'vw'
    explosion.style.top = top + 'vh'
    clearTimeout(remocao);
    remocao = setInterval(remover,855);
    
}
function explosao(left,top,obj){
    let pontos = parseInt(localStorage.getItem('pontuacao'))
    pontos += 10
    localStorage.setItem('pontuacao', pontos)
    criaExplosao(left,top)
    document.getElementById('boom').play();
    obj.remove()
    document.getElementById('bullet').remove();
}
export default {removeAll,criaVida,explosao}