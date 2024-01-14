/* alterar entre temas 
1- alterar entre icones de acordo com o tema
alterar para modo-escuro no body quando clicar no icoone

-passo 1- pegar no js o elemento html correspondente ao botão de troca de tema
-passo2- pegar no js o elemento html correspondente ao body
-passo 3- identificar o clique do usuario no botão de troca de tema
-passo 4- adicio ar classe modo escuro no body
-passo 5- alterar o icone qundo trocar o tema

-objetivo 2 - quando clicar no botão trocar novamente para o modo claro removendo a classe do body

-passo 6 - verificar se existe a classe modo-escuro no body
-passo 7 - remover a classe do mode-escuro do body
-passo 8 - trocar a iagem do botão de alterar tema 

*/
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//passo 2
const body = document.querySelector("body");
console.log(body);

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

//passo 3
botaoAlterarTema.addEventListener("click", () => {

    //passo 6
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    if (body.classList.contains("modo-escuro")) {
        //passo 7
        body.classList.remove("modo-escuro");

        //passo 8
        imagemBotaoTrocaDeTema.setAttribute("src", "/src/imagens/sun.png")

    } else {
        //passo 4
        body.classList.add("modo-escuro");
        //passo 5
        imagemBotaoTrocaDeTema.setAttribute("src", "/src/imagens/moon.png")
    }



});