// Objecte UI per gestionar la interfície d'usuari
const ui = {
    // Mostrar instruccions
    showInstructions() {
        document.getElementById('instructionsModal').style.display = 'flex';
    },

    // Tancar instruccions
    closeInstructions() {
        document.getElementById('instructionsModal').style.display = 'none';
    },

    // Mostrar modal d'època
    showEraModal() {
        const modal = document.getElementById('eraModal');
        const era = eraData[gameData.currentChapter];
        const title = document.getElementById('eraTitle');
        const body = document.getElementById('eraBody');
        
        title.textContent = `SINCRONITZACIÓ: ${era.title}`;
        
        body.innerHTML = `
            <div class="era-location">
                <div class="location-label">Ubicació Temporal</div>
                <div class="location-value">${era.location} - ${era.year}</div>
            </div>
            
            <div class="instructions-section">
                <h3>📍 CONTEXT HISTÒRIC</h3>
                <p>${era.context}</p>
            </div>
            
            <div class="era-objective">
                <div class="objective-label">Objectius de Missió</div>
                <ul>
                    ${era.objectives.map(obj => `<li>${obj}</li>`).join('')}
                </ul>
            </div>
            
            <div class="instructions-section">
                <h3>⚠️ AMENACES IDENTIFICADES</h3>
                <p style="color: #ff6666;">${era.threats}</p>
            </div>
            
            <div class="instructions-section">
                <h3>🎵 INFORMACIÓ MUSICAL</h3>
                <p>${era.musicInfo}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <button class="action-btn" onclick="ui.closeEraModal(); game.loadChapter();" style="font-size: 1.2em; padding: 18px 40px;">
                    INICIAR SINCRONITZACIÓ
                </button>
            </div>
        `;
        
        modal.style.display = 'flex';
    },

    // Tancar modal d'època
    closeEraModal() {
        document.getElementById('eraModal').style.display = 'none';
    },

    // Actualitzar barra de progrés
    updateProgressBar() {
        const progress = (gameData.currentChapter / gameData.chapters.length) * 100;
        document.getElementById('progressBar').style.width = progress + '%';
    },

    // Actualitzar display de vides
    updateLivesDisplay() {
        const livesSymbols = '❤️'.repeat(gameData.lives) + '🖤'.repeat(3 - gameData.lives);
        document.getElementById('livesDisplay').textContent = livesSymbols;
    },

    // Mostrar inventari
    showInventory() {
        const modal = document.getElementById('inventoryModal');
        const inventoryList = document.getElementById('inventoryList');
        
        if (gameData.fragments.length === 0) {
            inventoryList.innerHTML = '<div style="padding: 30px; text-align: center; color: #666;">Base de dades buida. Cap fragment recuperat encara.</div>';
        } else {
            inventoryList.innerHTML = gameData.fragments.map(fragment => `
                <div class="fragment-item">
                    <div class="fragment-name">⚔️ ${fragment.name}</div>
                    <div class="fragment-desc">${fragment.description}</div>
                    <small style="color: #666; font-style: italic;">${fragment.chapter}</small>
                </div>
            `).join('');
        }
        
        modal.style.display = 'flex';
    },

    // Tancar inventari
    closeInventory() {
        document.getElementById('inventoryModal').style.display = 'none';
    },

    // Crear efecte de partícules
    createParticleEffect(x, y) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = '#00d4ff';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.animation = 'particleFade 1s ease-out forwards';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000);
    },

    // Mostrar pantalla final
    showFinalScreen() {
        const content = document.getElementById('gameContent');
        content.innerHTML = `
            <div class="final-screen">
                <h2 style="color: #00d4ff; margin-bottom: 30px; font-size: 2.2em;">🏆 MISSIÓ COMPLETA - TEMPLARS DERROTATS 🏆</h2>
                <p style="font-size: 1.4em; margin-bottom: 25px;">Heu derrotat definitivament l'Ordre dels Templars i restaurat la història del ritme musical!</p>
                <p style="margin-bottom: 30px;">Com a <strong style="color: #00d4ff;">GRAN MESTRE ASSASSÍ DEL RITME</strong>, heu sobreviscut a tots els perills temporals i recollit els ${gameData.fragments.length} Fragments Sagrats.</p>
                
                <div style="background: rgba(0, 162, 255, 0.1); padding: 25px; margin: 25px 0; border: 2px solid #00a2ff; clip-path: polygon(20px 0, 100% 0, calc(100% - 20px) 100%, 0 100%);">
                    <h3 style="color: #00d4ff; margin-bottom: 20px;">🗂️ BASE DE DADES COMPLETA:</h3>
                    ${gameData.fragments.map(fragment => 
                        `<div class="fragment-item" style="margin: 10px 0;">
                            <div class="fragment-name">⚔️ ${fragment.name}</div>
                        </div>`
                    ).join('')}
                </div>
                
                <div style="background: rgba(0, 255, 136, 0.1); padding: 20px; margin: 30px 0; border-left: 4px solid #00ff88;">
                    <p style="font-style: italic; font-size: 1.1em;">
                        <strong>"MISSIÓ ANIMUS COMPLETA. Els Templars han estat eliminats de la història musical. La humanitat pot gaudir lliurement del ritme per a totes les generacions futures."</strong>
                    </p>
                    <p style="text-align: right; margin-top: 15px; color: #00d4ff;">
                        <em>— ABSTERGO INDUSTRIES: PROJECTE TANCAT</em>
                    </p>
                </div>
                
                <p style="margin: 25px 0; font-size: 1.3em;">RANG FINAL: <strong style="color: #00ff88;">LLEGENDA DEL RITME ETERN</strong></p>
                
                <button class="action-btn" onclick="game.restartGame()" style="background: linear-gradient(135deg, #00d4ff 0%, #66ccff 100%); font-size: 1.3em; padding: 20px 40px;">🔄 NOVA MISSIÓ TEMPORAL</button>
            </div>
        `;
        
        document.getElementById('progressBar').style.width = '100%';
    }
};

// Event listeners per a la interfície
document.addEventListener('DOMContentLoaded', function() {
    // Tancar modals amb ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            ui.closeInventory();
            ui.closeInstructions();
            ui.closeEraModal();
        }
    });

    // Tancar modals fent clic fora
    document.getElementById('inventoryModal').addEventListener('click', function(event) {
        if (event.target === this) {
            ui.closeInventory();
        }
    });

    document.getElementById('instructionsModal').addEventListener('click', function(event) {
        if (event.target === this) {
            ui.closeInstructions();
        }
    });

    document.getElementById('eraModal').addEventListener('click', function(event) {
        if (event.target === this) {
            ui.closeEraModal();
        }
    });

    // Detectar clics per crear efectes de partícules
    document.addEventListener('click', function(e) {
        if (Math.random() > 0.7) { // 30% de probabilitat
            ui.createParticleEffect(e.clientX, e.clientY);
        }
    });
});