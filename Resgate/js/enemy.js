import template from './movimentar.js'
import view from './view.js'
var velocidade = 0.4
var p = 75
var aviao
var tmp
var check = 0
var y
var tmp2
var Vida = localStorage.getItem('vidas')
var q_enemy = 1
function reduceLife(){
    Vida--
    let life = document.getElementsByClassName('heart')[Vida].remove()
    localStorage.setItem('vidas', Vida)
    if(Vida<=0){
        q_enemy = 1
        clearTimeout(tmp2);
        view.removeAll()
    }
}
function iniciaInimigo(){
    let algo = document.createElement('img')
    algo.id = 'enemy_h'
    algo.src = "./img/h2.gif"
    algo.style.height = template.convertH(135) + 'vh'
    algo.style.width = template.convertW(249) + 'vh'
    algo.style.top = y + 'vh'
    algo.style.left = p + 'vh'
    document.getElementsByClassName('principal')[0].appendChild(algo);
    check = 1
    aviao = document.getElementById('enemy_h')
    clearTimeout(tmp);
}
function colision(){
    document.getElementById('boom').play();
    aviao.remove()
    reduceLife()
    view.explosao(p,y,aviao)
    p = 75
    check = 0
    q_enemy ++
    clearTimeout(tmp);
    clearTimeout(tmp2);
    enemy()
}
function movimentar(){
    try{
        if(p>-30 && check==1){
            aviao = document.getElementById('enemy_h')
            if(aviao==null){
                iniciaInimigo()
            }
            if(q_enemy%5==0) velocidade += 0.001
            p = p - velocidade
            aviao.style.left = p +'vw'
            try{
                let balaLeft = parseFloat(document.getElementById('bullet').style.left)
                let resH = parseFloat(document.getElementById('bullet').style.top)
                let center = Math.abs(y - resH)
                let enemyH = parseFloat(aviao.style.height)
                if(balaLeft>=p && center<=15){
                    view.explosao(p,y,aviao)
                    p = 75
                    check = 0
                    q_enemy ++
                    clearTimeout(tmp);
                    clearTimeout(tmp2);
                    enemy()
                }
                center = Math.abs(resH - enemyH)
                if(center<=enemyH/2 && p<=0 && p>-10) colision();
            }
            catch(err){// Colisão com Inimigo
                let resH = parseFloat(document.getElementById('resgate').style.top)
                let enemyH = parseFloat(aviao.style.height)
                let center =  Math.abs(resH - y)
                if(center<=enemyH/2 && p<=7) colision();
            }
        }
        if(p<=-30 && check==1){
            p = 75
            aviao.remove();
            q_enemy ++
            check = 0
            clearTimeout(tmp);
            clearTimeout(tmp2);
            enemy()
        }
    }
    catch(err){
        clearTimeout(tmp);
        clearTimeout(tmp2);
        enemy()
    }

}

function enemy(){
    Vida = localStorage.getItem('vidas')
    if(q_enemy<=50 && Vida>0){
        p = 75
        y = Math.floor(Math.random() * 63) - 8
        clearTimeout(tmp);
        tmp = setInterval(iniciaInimigo,1850)
        clearTimeout(tmp2);
        tmp2 = setInterval(movimentar,20)
    }
}
export default {enemy}