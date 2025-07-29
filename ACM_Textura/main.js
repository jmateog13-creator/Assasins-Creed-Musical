// Inicialització principal del joc
window.addEventListener('DOMContentLoaded', function() {
    // SEMPRE començar des de zero quan es recarrega la pàgina
    resetGameState();
    
    // NO carregar partida guardada - sempre començar nou
    // game.loadGame(); // <- COMENTAT per començar sempre des de zero
    
    // Event listener per guardar abans de tancar (opcional - comentat)
    // window.addEventListener('beforeunload', function() {
    //     game.saveGame();
    // });
    
    // Missatge inicial de benvinguda Abstergo
    console.log('%cABSTERGO INDUSTRIES - ANIMUS 4.3 INICIALITZAT', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
    console.log('%cProjecte: Fragments de l\'Harmonia', 'color: #66ccff; font-size: 12px;');
    console.log('%cEstat: Sistema preparat per sincronització - NOVA SESSIÓ', 'color: #00ff88; font-size: 12px;');
    
    // Efectes adicionals d'inicialització
    initializeAnimations();
});

// Funció per restablir l'estat del joc
function resetGameState() {
    gameData.currentChapter = 0;
    gameData.lives = 3;
    gameData.fragments = [];
    
    // Netejar localStorage si existeix (opcional)
    if (typeof(Storage) !== "undefined") {
        localStorage.removeItem('animus_harmony_save');
    }
    
    console.log('%cEstat del joc restablert - Nova missió iniciada', 'color: #00ff88; font-size: 10px;');
}

// Funcions d'animacions i efectes
function initializeAnimations() {
    // Crear efectes de fons adicionals
    createBackgroundEffects();
    
    // Inicialitzar efectes de so (si es desitja)
    // initializeAudioEffects();
}

function createBackgroundEffects() {
    // Efecte de línies escanejant ocasionalment
    setInterval(() => {
        if (Math.random() > 0.8) {
            createScanLine();
        }
    }, 3000);
}

function createScanLine() {
    const scanLine = document.createElement('div');
    scanLine.style.position = 'fixed';
    scanLine.style.top = '0';
    scanLine.style.left = '0';
    scanLine.style.width = '100%';
    scanLine.style.height = '2px';
    scanLine.style.background = 'linear-gradient(90deg, transparent 0%, #00a2ff 50%, transparent 100%)';
    scanLine.style.zIndex = '9998';
    scanLine.style.pointerEvents = 'none';
    scanLine.style.animation = 'scanLineMove 2s linear forwards';
    
    // Afegir keyframe d'animació dinàmicament
    if (!document.getElementById('scanLineAnimation')) {
        const style = document.createElement('style');
        style.id = 'scanLineAnimation';
        style.textContent = `
            @keyframes scanLineMove {
                0% { transform: translateY(0px); opacity: 1; }
                100% { transform: translateY(100vh); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(scanLine);
    
    setTimeout(() => {
        if (scanLine.parentNode) {
            scanLine.parentNode.removeChild(scanLine);
        }
    }, 2000);
}

// Funcions de utilitat
const utils = {
    // Formatitzar text per efectes
    formatText(text) {
        return text.replace(/\n/g, '<br>');
    },
    
    // Crear efecte de màquina d'escriure
    typeWriter(element, text, speed = 50) {
        element.innerHTML = '';
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    },
    
    // Efecte de parpelleig
    blink(element, times = 3) {
        let count = 0;
        const blinkInterval = setInterval(() => {
            element.style.opacity = element.style.opacity === '0' ? '1' : '0';
            count++;
            if (count >= times * 2) {
                clearInterval(blinkInterval);
                element.style.opacity = '1';
            }
        }, 200);
    }
};

// GESTIÓ D'ERRORS GLOBALS DESACTIVADA TEMPORALMENT
// Comentat per evitar errors automàtics no desitjats
/*
window.addEventListener('error', function(e) {
    console.error('Error del joc:', e.error);
    
    // En cas d'error molt crític, mostrar missatge
    const gameContainer = document.getElementById('gameContainer');
    if (gameContainer && !gameContainer.classList.contains('hidden')) {
        const content = document.getElementById('gameContent');
        if (content && e.error && e.error.message && e.error.message.includes('Cannot read property')) {
            const existingErrors = content.querySelectorAll('.feedback-panel.error');
            if (existingErrors.length === 0) {
                content.innerHTML += `
                    <div class="feedback-panel error">
                        <div class="feedback-title">⚠️ ERROR DEL SISTEMA ANIMUS</div>
                        <p>S'ha detectat una anomalia temporal. Reiniciant seqüència...</p>
                        <button class="action-btn" onclick="game.loadChapter()">CONTINUAR</button>
                    </div>
                `;
            }
        }
    }
});
*/

// Prevenir comportaments no desitjats
document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Desactivar menú contextual
});

// Desactivar selecció de text en elements de joc per millorar l'experiència
document.addEventListener('selectstart', function(e) {
    if (e.target.closest('.option-btn') || e.target.closest('.action-btn') || e.target.closest('.menu-btn')) {
        e.preventDefault();
    }
});

// Debug mode (només per desenvolupament)
if (window.location.search.includes('debug=true')) {
    window.gameDebug = {
        skipToChapter(chapterIndex) {
            gameData.currentChapter = chapterIndex;
            gameData.lives = 3;
            ui.showEraModal();
        },
        addAllFragments() {
            gameData.chapters.forEach((chapter, index) => {
                gameData.fragments.push({
                    name: chapter.fragment,
                    chapter: chapter.title,
                    description: `Fragment de debug - ${chapter.title}`
                });
            });
            console.log('Tots els fragments afegits');
        },
        showFinal() {
            ui.showFinalScreen();
        },
        // Nova funció de debug per restaurar guardats
        enableSaveSystem() {
            console.log('%cSistema de guardats reactivat per debug', 'color: #ffaa00; font-weight: bold;');
            window.addEventListener('beforeunload', function() {
                game.saveGame();
            });
        }
    };
    console.log('Mode debug activat. Utilitza gameDebug.* per funcions de debug.');
    console.log('Usa gameDebug.enableSaveSystem() per reactivar guardats si cal.');
}
