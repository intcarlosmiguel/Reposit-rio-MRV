import template from './movimentar.js'
var car
var carTmp
var carMov
var checagem = 0
var x_car = 75
var vel_car = 0.4
function movCar(){
    if(x_car>-30 && checagem==1){
        car = document.getElementById('carro')
        x_car = x_car - vel_car
        car.style.left = x_car +'vw'
    }
    if(x_car<=-30 && checagem==1){
        x_car = 75
        car.remove();
        checagem = 0
        clearTimeout(carMov);
    }

}
function carro(){
    carTmp = setInterval(function(){
        checagem = template.createAlgo('carro','car.gif',200,200,50,checagem,carTmp)
    },850)
    carMov = setInterval(movCar,20)
}
export default carro