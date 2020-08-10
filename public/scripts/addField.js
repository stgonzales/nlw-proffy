//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener("click", cloneField)

//Executar uma acao
function cloneField(){
    //Procura os campos a serem duplicados
    const newFieldsContainer = document.querySelector(".schedule-item").cloneNode(true) 

    //Limpar campos
    const fields = newFieldsContainer.querySelectorAll('input')

    fields.forEach(field => {
        field.value = ""
    });

    //Duplicar os campos 
    document.querySelector("#schedule-items").appendChild(newFieldsContainer)
}