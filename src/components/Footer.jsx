import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">NFL Conference Finals</h3>
            <p className="footer-text">
              A emoção dos playoffs da NFL ao vivo. Não perca nenhum momento!
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Links Rápidos</h4>
            <ul className="footer-links">
              <li><a href="#games">Jogos</a></li>
              <li><a href="#stats">Estatísticas</a></li>
              <li><a href="#schedule">Calendário</a></li>
              <li><a href="#teams">Times</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Redes Sociais</h4>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📸</a>
              <a href="#" className="social-link">▶️</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 NFL Conference Finals. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
