// Respostas corretas
const respostasCorretas = [0, 2, 1, 0, 2, 1, 2, 3, 0, 0]; // Ajustei conforme as perguntas feitas no HTML

function verificarRespostas() {
    let acertos = 0;
    let erros = 0;

    // Verifica as respostas para todas as perguntas
    for (let i = 1; i <= 10; i++) {
        const resposta = document.querySelector(`input[name="pergunta${i}"]:checked`);
        if (resposta && parseInt(resposta.value) === respostasCorretas[i - 1]) {
            acertos++;
        } else {
            erros++;
        }
    }

    // Armazena os resultados no localStorage
    localStorage.setItem("acertos", acertos);
    localStorage.setItem("erros", erros);

    // Redireciona para a página de resultados
    window.location.href = "resultado.html";
}
