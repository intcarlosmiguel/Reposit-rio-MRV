import template from './movimentar.js'
var dy
var vel
var py
var obj
var rot
var deg
var px = 20
var w
var bullet
var exist = 0
var tmp
function iniciaResgate(){
    let algo = document.createElement('img')
    algo.id = 'resgate'
    algo.src = './img/h1.gif'
    algo.style.height = template.convertH(172) + 'vh'
    algo.style.width = template.convertW(350) + 'vh'
    algo.style.top = 0 + 'vh'
    algo.style.left = 0 + 'vh'
    document.getElementsByClassName('principal')[0].appendChild(algo);
    obj = document.getElementById('resgate')
}
function tiro(){
    if(px<75){
        px += 1
        bullet.style.left = px + 'vw'
        let anima = requestAnimationFrame(tiro);
        exist = 1
    }
    else{
        px = 20
        bullet.remove();
        exist = 0
    }
}
function KD(){
    //console.log('Testanto numero1: '+deg + "," + rot+ "," + w)
    let tecla = event.keyCode;
    switch (tecla){
        case 40:
            if(py+1<55){
                dy = 1
                vel = 0.7
            }
            if(deg<=20){
                rot = 1
                w = 1
            }
            break;
        case 38:
            if(py+1>-8){
                dy = -1
                vel = 0.7
            }
            if(deg<=20){
                rot = 1
                w = 1
            }
            break;
        case 32:
            if(px==20){
                let btn = document.createElement("img");
                btn.id = "bullet"
                btn.src = "./img/bullet.png"
                document.getElementsByClassName('principal')[0].appendChild(btn);
                bullet = document.getElementById('bullet')
                bullet.style.display = 'block'
                let a = parseInt(obj.style.top) + 15
                bullet.style.top = a + 'vh'
                bullet.style.left = '20vw'
                let anima = requestAnimationFrame(tiro);
            }
    }
   
}
function KU(){
    dy = 0;
    rot = -1
}
function adiciona(){
    py += dy*vel
    deg += rot*w 
    if(py+1<55){
        obj.style.top = py + "vh"
    }
    else{
        vel = 0
    }
    if(py+1>-8){
        obj.style.top = py + "vh"
    }
    else{
        vel = 0
    }
    if(deg<=20){
        //console.log('Testanto numero2: '+deg + "," + rot+ "," + w)
        obj.style.transform = "rotate("+deg+"deg)"

    }
    else{
        w = 0
    }
    if(deg>0){
        //console.log('Testanto numero3: '+deg + "," + rot + "," + w)
        obj.style.transform = "rotate("+deg+"deg)"
    }
    else{
        w = 0
    }
}
function movimento(){
    dy = 0
    vel = 0.7
    py = 0
    rot = 0
    w = 1
    deg = 0
    //boo = template.createAlgo('resgate','h1.gif',172,350,0,0,boo,tempo)
    clearTimeout(tmp);
    iniciaResgate()
    document.addEventListener('keydown',KD)
    document.addEventListener('keyup',KU)
    tmp = setInterval(adiciona,20)
}
export default {movimento,exist}