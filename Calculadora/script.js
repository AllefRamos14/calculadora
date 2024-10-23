
const button = document.querySelector("button")

function adicionarvalue(valor) {

    const input = document.querySelector(".display").value

    document.querySelector(".display").value = input + valor


  
}
function limpatela(){
  
    document.querySelector(".display").value = ''
}

function calcular(){

    const input = document.querySelector(".display").value

    document.querySelector(".display").value = eval(input)

    
}
function invester(){
    const input = document.querySelector(".display").value

    document.querySelector(".display").value = input * -1

}

