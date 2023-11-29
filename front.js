document.addEventListener("DOMContentLoaded", function () {
    // Mostra a aba principal por padrão
    exibirAba("aba-jogo");

    // Adiciona eventos de clique aos itens do menu
    document.getElementById("link-jogo").addEventListener("click", function () {
        exibirAba("aba-jogo");
    });

    document.getElementById("link-equipe").addEventListener("click", function () {
        exibirAba("aba-equipe");
    });

    document.getElementById("link-agradecimentos").addEventListener("click", function () {
        exibirAba("aba-agradecimentos");
    });

    document.getElementById("link-beta-testers").addEventListener("click", function () {
        exibirAba("aba-beta-testers");
    });

    document.getElementById("link-outros-jogos").addEventListener("click", function () {
        exibirAba("aba-outros-jogos");
    });
});

function exibirAba(idAba) {
    // Oculta todas as abas
    var abas = document.getElementsByClassName("aba");
    for (var i = 0; i < abas.length; i++) {
        abas[i].style.display = "none";
    }

    // Exibe a aba clicada
    document.getElementById(idAba).style.display = "block";
}
