function convertH(px) {
	return px * (100 / document.documentElement.clientHeight);
}
function convertW(px) {
	return px * (100 / document.documentElement.clientHeight);
}
function createAlgo(algoId,algoSrc,algoX,algoY,algoTop,cont,time){
    if(cont==0){
        let algo = document.createElement('img')
        algo.id = algoId
        algo.src = algoSrc
        algo.style.height = convertH(algoX) + 'vh'
        algo.style.width = convertW(algoY) + 'vh'
        algo.style.top = algoTop + 'vh'
        document.getElementsByClassName('principal')[0].appendChild(algo);
        clearTimeout(time);
        cont = 1
    }
    return cont
}
export default {createAlgo,convertW,convertH}