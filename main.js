function sistema() {
    let agora = new Date
    let saida = document.querySelector("section#resultado")
    saida.innerHTML = `<p>O que eu recebi do sistema foi ${agora}</p>`
}