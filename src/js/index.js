const botaoAlterarTema = document.getElementById("botao-alterar-tema")

const body = document.querySelector("body")

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const ModoEscuroAtivo = body.classList.contains("modo-escuro")

    if (ModoEscuroAtivo) {
        body.classList.remove("modo-escuro")
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        body.classList.add("modo-escuro")
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }

})
