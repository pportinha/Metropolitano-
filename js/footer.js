// js/footer.js

document.addEventListener("DOMContentLoaded", function() {
    // 1. Cria e injeta o CSS dinamicamente no <head>
    if (!document.querySelector('link[href="css/footer.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'css/footer.css';
        document.head.appendChild(link);
    }

    // 2. Injeta o HTML dentro do footer
    const footerElement = document.querySelector('.main-footer');
    if (footerElement) {
        footerElement.innerHTML = `
            <div class="footer-container">
                
               <div class="footer-brand">
                        <img src="assets/logo2.0.png" alt="Logo Metropolitano" class="footer-logo-img">
                        <h3 class="footer-logo-text">Metropolitano</h3>
                    </div>

                <div class="footer-section links">
                    <h4>Links Úteis</h4>
                    <ul>
                        <li><a href="index.html">Início</a></li>
                        <li><a href="plantel.html">Plantel</a></li>
                        <li><a href="bilheteira.html">Bilheteira</a></li>
                        <li><a href="noticias.html">Notícias</a></li>
                    </ul>
                </div>

                <div class="footer-section social">
                    <h4>Siga-nos</h4>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook">FB</a>
                        <a href="#" aria-label="Instagram">IG</a>
                        <a href="#" aria-label="Twitter">TW</a>
                        <a href="#" aria-label="YouTube">YT</a>
                    </div>
                    <p class="footer-email">contacto@metropolitanocf.pt</p>
                </div>

            </div>

            <div class="footer-bottom">
                <p> 2026 Metropolitano Clube de Futebol.</p>
            </div>
        `;
    }
});