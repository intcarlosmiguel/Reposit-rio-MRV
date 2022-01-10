import template from './movimentar.js'
import view from './view.js'
var car
var carTmp
var carMov
var checagem = 0
var x_car = 75
var vel_car = 0.2
function iniciaCarro(){
    let life = localStorage.getItem('vidas')
    if(life>0){
        let algo = document.createElement('img')
        algo.id = 'carro'
        algo.src = './img/car.gif'
        algo.style.height = template.convertH(200) + 'vh'
        algo.style.width = template.convertW(200) + 'vh'
        algo.style.top = 50 + 'vh'
        algo.style.left = x_car + 'vh'
        document.getElementsByClassName('principal')[0].appendChild(algo);
        checagem = 1
        clearTimeout(carTmp);
    }
}
function movCar(){
    try{
        if(x_car>-30 && checagem==1){
            car = document.getElementById('carro')
            if(car == null){
                x_car = 75
                clearTimeout(carTmp);
                clearTimeout(carMov);
                carro()
            }
            x_car = x_car - vel_car
            car.style.left = x_car +'vw'
            try{
                let balaLeft = parseFloat(document.getElementById('bullet').style.left)
                let resH = parseFloat(document.getElementById('bullet').style.top)
                let center = Math.abs(25 - resH)
                if(balaLeft>=x_car && center>=20){
                    view.explosao(x_car,50,car)
                    x_car = 75
                    checagem = 0
                    clearTimeout(carTmp);
                    clearTimeout(carMov);
                    carro()
                }
            }
            catch(err){
            }
        }
        if(x_car<=-30 && checagem==1){
            x_car = 75
            car.remove();
            checagem = 0
            clearTimeout(carTmp);
            clearTimeout(carMov);
            carro();
        }
    }
    catch(err){

    }

}
function carro(){
    x_car = 75
    carTmp = setInterval(iniciaCarro)
    carMov = setInterval(movCar,20)
}
export default carro