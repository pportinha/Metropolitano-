// js/plantel.js
if (!document.querySelector('link[href="css/plantel.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/plantel.css';
    document.head.appendChild(link);
}

const JOGADORES = [
    { id: 1, numero: 1, nome: "Diego Silva", posicao: "Guarda-redes", nacionalidade: "Portuguesa", jogos: 9, imagem: "assets/jogador1.jpg" },
    { id: 2, numero: 3, nome: "Carlos André", posicao: "Defesa", nacionalidade: "Brasileira", jogos: 8, imagem: "assets/jogador1.jpg" },
    { id: 3, numero: 4, nome: "Ricardo Fonte", posicao: "Defesa", nacionalidade: "Portuguesa", jogos: 9, imagem: "assets/jogador1.jpg" },
    { id: 4, numero: 6, nome: "João Moutinho", posicao: "Médio", nacionalidade: "Portuguesa", jogos: 7, imagem: "assets/jogador1.jpg" },
    { id: 5, numero: 10, nome: "Lucas Pires", posicao: "Médio", nacionalidade: "Brasileira", jogos: 9, imagem: "assets/jogador1.jpg" },
    { id: 6, numero: 7, nome: "Pedro Neto", posicao: "Avançado", nacionalidade: "Portuguesa", jogos: 9, imagem: "assets/jogador1.jpg" },
    { id: 7, numero: 9, nome: "Gonçalo Ramos", posicao: "Avançado", nacionalidade: "Portuguesa", jogos: 8, imagem: "assets/jogador1.jpg" },
    { id: 8, numero: 11, nome: "Rafael Leão", posicao: "Avançado", nacionalidade: "Portuguesa", jogos: 6, imagem: "assets/jogador1.jpg" }
    
];


document.addEventListener("DOMContentLoaded", function() {
    const rosterGrid = document.getElementById("roster-grid");

    if (rosterGrid) {
        let htmlGerado = "";

        // Percorre o array de jogadores e cria o template de cada um
        JOGADORES.forEach(jogador => {
            htmlGerado += `
                <div class="player-card">
                    <div class="player-number">${jogador.numero}</div>
                    <div class="player-img-container">
                        <img src="${jogador.imagem}" alt="${jogador.nome}" class="player-img">
                    </div>
                    <div class="player-info">
                        <span class="player-position">${jogador.posicao}</span>
                        <h3>${jogador.nome}</h3>
                        <div class="player-stats">
                            <span>🌍 ${jogador.nacionalidade}</span>
                            <span>🏃‍♂️ ${jogador.jogos} Jogos</span>
                        </div>
                    </div>
                </div>
            `;
        });

        // Injeta as estruturas geradas no contentor flexbox
        rosterGrid.innerHTML = htmlGerado;
    }
});