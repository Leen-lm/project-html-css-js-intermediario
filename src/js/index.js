const inputText = document.querySelectorAll(".input-text")
const inputs = document.querySelectorAll(".inputs")
const botaoEnviar = document.getElementById("botao-enviar")
console.log(botaoEnviar)


console.log(inputText)
console.log(inputs)


inputText.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.add("campo-preenchido")
            console.log(inputText)
        } else {
            input.classList.remove("campo-preenchido")
            console.log(inputText)
        }
    })
})

botaoEnviar.addEventListener("click", function(){
    inputText.forEach(function(input, index){
        if (input.value === ""){
            inputs[index].classList.add("nao-preenchido")
        } else {
            inputs[index].classList.remove("nao-preenchido")
        }

    })
})