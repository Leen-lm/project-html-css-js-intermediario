const inputText = document.querySelectorAll(".input-text")
const inputs = document.querySelectorAll(".inputs")
const botaoEnviar = document.getElementById("botao-enviar")

inputText.forEach(function (input, index) {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.add("campo-preenchido")
            inputs[index].classList.remove("nao-preenchido")

        } else {
            input.classList.remove("campo-preenchido")
            
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

        console.log(input.value)
    })
})