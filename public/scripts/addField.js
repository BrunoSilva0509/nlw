// procurar o botao
document.querySelector("#add-time")
.addEventListener("click",cloneField)
//quando clicar no botao

// executar uma acao
function cloneField(){
    console.log()

    // duplicar os campos. quais campos?
  /*const=variavel constante*/ const newfieldsContainer = document.querySelector(".schedule-item").cloneNode(true)

  //pegar os campos. quais campos?
    const fields = newfieldsContainer.querySelectorAll("input")
    
  //para cada campo, limpar  
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
        field.value=""
    })
    

    // colocar na página. Onde?
    document.querySelector("#schedule-items").appendChild(newfieldsContainer) /*selecionando os filhos para duplicar*/
}