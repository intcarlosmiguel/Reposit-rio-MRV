window.addEventListener("load",function(){
    document.getElementsByClassName("botao")[0].addEventListener("click",add);
    document.querySelectorAll('input[type=checkbox]').forEach( function(item){
        item.addEventListener('change', function(){
            Decorator(this.id)
        })
    })
})
function Decorator(number){
    local = document.getElementById(""+number)
    if(local.checked){
        document.querySelectorAll('label')[parseFloat(number-1)].style.textDecoration = "line-through"
    } else {
        document.querySelectorAll('label')[parseFloat(number-1)].style.textDecoration = "none"
    }
}
function add(){
    valor = document.getElementsByClassName("texto")[0].value;
    number = document.querySelectorAll("label").length;
    if(valor != ""){
        document.getElementById('texto').value = ''
        var label = document.createElement("label");
        label.innerHTML = valor;
        var check = document.createElement("input");
        check.type = "checkbox"
        check.id = number + 1 + ""
        var br = document.createElement("br");
        document.getElementById("form").appendChild(check);
        document.getElementById("form").appendChild(label);
        document.getElementById("form").appendChild(br);
        document.getElementById(check.id).addEventListener("change", function(){
            Decorator(check.id)
        })
    }
}