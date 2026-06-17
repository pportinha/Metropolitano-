// js/navbar.js

// 1. Injeta o CSS imediatamente para evitar que a página carregue sem estilos
if (!document.querySelector('link[href="css/navbar.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/navbar.css';
    document.head.appendChild(link);
}

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("navbar-placeholder");
    
    if (container) {
        // Injeta a estrutura HTML com o novo formulário de pesquisa incluído
        container.innerHTML = `
            <nav class="navbar">
                <a href="index.html" class="navbar-brand">
                    <img src="assets/logo2.0.png" alt="Logo Metropolitano" class="navbar-logo-img">
                    <span class="brand-text">Metropolitano</span>
                </a>

                <ul class="navbar-menu">
                    <li><a href="index.html" id="link-index">Inicio</a></li>
                    <li><a href="jogos.html" id="link-jogos">Jogos</a></li>
                    <li><a href="plantel.html" id="link-plantel">Plantel</a></li>
                    <li><a href="clube.html" id="link-clube">Clube</a></li>
                    <li><a href="bilheteira.html" id="link-bilheteira">Bilheteira</a></li>
                </ul>

                <form class="search-form" id="navbar-search">
                    <input type="text" id="search-input" placeholder="Pesquisar equipa, jogos..." required>
                    <button type="submit">🔍</button>
                </form>
            </nav>
        `;

        // Lógica inteligente da classe active
        const caminhoCompleto = window.location.pathname;
        const paginaAtual = caminhoCompleto.substring(caminhoCompleto.lastIndexOf('/') + 1);

        if (paginaAtual === "" || paginaAtual === "index.html") {
            document.getElementById("link-index").classList.add("active");
        } else if (paginaAtual === "jogos.html") {
            document.getElementById("link-jogos").classList.add("active");
        } else if (paginaAtual === "plantel.html") {
            document.getElementById("link-plantel").classList.add("active");
        } else if (paginaAtual === "clube.html") {
            document.getElementById("link-clube").classList.add("active");
        } else if (paginaAtual === "bilheteira.html") {
            document.getElementById("link-bilheteira").classList.add("active");
        }

        // Lógica de processamento da Pesquisa
        const searchForm = document.getElementById("navbar-search");
        searchForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Impede o recarregamento automático da página
            
            // Pega no texto, passa para minúsculas e remove espaços vazios extra
            const query = document.getElementById("search-input").value.toLowerCase().trim();

            // Redirecionamento inteligente baseado em palavras-chave (carro, livro, equipa, etc.)
            if (query.includes("plantel") || query.includes("jogador") || query.includes("equipa")) {
                window.location.href = "plantel.html";
            } else if (query.includes("jogo") || query.includes("calendario") || query.includes("proximo")) {
                window.location.href = "jogos.html";
            } else if (query.includes("bilhete") || query.includes("comprar") || query.includes("bilheteira")) {
                window.location.href = "bilheteira.html";
            } else if (query.includes("clube") || query.includes("historia") || query.includes("estadio")) {
                window.location.href = "clube.html";
            } else if (query !== "") {
                // Mensagem de fallback caso pesquisem algo fora das rotas diretas
                alert("A pesquisar por '" + query + "' na base de dados do Metropolitano Clube de Futebol...");
            }
        });
    }
});