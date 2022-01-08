import template from './movimentar.js'
var velocidade = 0.4
var p = 75
var aviao
var tmp
var check = 0
var remocao
var y
var tmp2
var q_enemy = 1
function remover() {
    document.getElementById('explosion').remove()
    clearTimeout(remocao);
}
function explosao(){
    let explosion = document.createElement("img");
    explosion.id = "explosion"
    explosion.src = "explosion.gif"
    document.getElementsByClassName('principal')[0].appendChild(explosion);
    explosion = document.getElementById('explosion')
    explosion.style.left = p + 'vw'
    explosion.style.top = y + 'vh'
    remocao = setInterval(remover,855);
    
}
function movimentar(){
    if(p>-30 && check==1){
        console.log(velocidade + ',' + q_enemy)
        aviao = document.getElementById('enemy_h')
        p = p - velocidade
        aviao.style.left = p +'vw'
        try{
            let balaLeft = parseFloat(document.getElementById('bullet').style.left)
            let resH = parseFloat(document.getElementById('resgate').style.top)
            let center = Math.abs(y - resH)
            let enemyH = parseFloat(aviao.style.height)
            console.log(velocidade + ',' + q_enemy)
            if(balaLeft>=p && center<=enemyH/2){
                explosao()
                aviao.remove()
                p = 75
                document.getElementById('bullet').remove();
                check = 0
                q_enemy ++
                clearTimeout(tmp);
                clearTimeout(tmp2);
                enemy()
            }
        }
        catch(err){
            
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

function enemy(){
    if(q_enemy<=25){
        tmp = setInterval(function(){
            y = Math.floor(Math.random() * 63) - 8
            check = template.createAlgo('enemy_h',"h2.gif",135,240,y,check,tmp)
        },1850)
        tmp2 = setInterval(movimentar,20)
    }
}
export default {enemy}