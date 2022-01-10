import template from "./movimentar.js";
var nMilitar = 0
var soldier
var x_soldier = -15
var vel_soldier = 0.1
var soldierMov
var militarTmp
function iniciaMilitar(){
    let algo = document.createElement('img')
    algo.id = 'militar'
    algo.src = './img/militar.gif'
    algo.style.height = template.convertH(100) + 'vh'
    algo.style.width = template.convertW(130) + 'vh'
    algo.style.top = 60 + 'vh'
    algo.style.left = x_soldier + 'vh'
    document.getElementsByClassName('principal')[0].appendChild(algo);
    soldier = document.getElementById('militar')
    nMilitar = 1
    clearTimeout(militarTmp);
}
function movMilitar(){
    let life = localStorage.getItem('vidas')
    if(life>=0 && nMilitar==1){
        try{
            if(x_soldier<75){
                soldier = document.getElementById('militar')
                x_soldier = x_soldier + vel_soldier
                soldier.style.left = x_soldier +'vw'
                try{
                    let carLeft = parseFloat(document.getElementById('carro').style.left)
                    let distance = x_soldier-carLeft
                    if(distance>=0){
                        x_soldier = -30
                        document.getElementById('carro').left = 75
                        document.getElementById('carro').remove()
                        document.getElementById('pain').play();
                        soldier.remove()
                        nMilitar = 0
                        clearTimeout(soldierMov);
                        militar()
                    }
                }
                catch(err){
    
                }
            }
            if(x_soldier>=75){
                x_soldier = -30
                soldier.remove();
                nMilitar = 0
                clearTimeout(soldierMov);
                militar()
            }
            let resH = parseFloat(document.getElementById('resgate').style.top)
            let H = Math.abs(resH - 60)
            if(H>=10 && x_soldier>=10 && H<=23 && x_soldier<=11 ){
                let pontos = parseInt(localStorage.getItem('pontuacao'))
                pontos += 50
                nMilitar = 0
                localStorage.setItem('pontuacao', pontos)
                document.getElementById('tank').play();
                document.getElementById('tank').volume = 0.2;
                soldier.remove();
                clearTimeout(soldierMov);
                militar()
            }
        }
        catch(err){

        }
    }
}
function militar(){
    try {
        x_soldier = -15
        militarTmp = setInterval(iniciaMilitar,850)
        /*let militarTmp = setInterval(function(){
            nMilitar = template.createAlgo('militar','militar.gif',100,130,60,x_soldier,nMilitar,militarTmp)
        },850)*/
        soldierMov = setInterval(movMilitar,20)
    } catch (error) {
        nMilitar = 0
    }
    
}
export default militar