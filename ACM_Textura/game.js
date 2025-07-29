// Objecte principal del joc (VERSIÓ TEXTURA)
const game = {
    // Iniciar joc
    startGame() {
        document.getElementById('startScreen').style.display = 'none';
        document.getElementById('gameContainer').classList.remove('hidden');
        ui.showEraModal();
    },

    // Carregar capítol actual
    loadChapter() {
        const chapter = gameData.chapters[gameData.currentChapter];
        const content = document.getElementById('gameContent');
        
        content.innerHTML = `
            <div class="memory-panel">
                <div class="memory-header">
                    <div class="memory-title">${chapter.title}</div>
                </div>
                <div class="memory-content">
                    <div class="story-text">${chapter.intro}</div>
                    <div class="challenge-section">
                        <div class="challenge-title">Desafiament Templar Detectat</div>
                        <div class="question-text">${chapter.question}</div>
                        <div class="options-grid" id="questionOptions">
                            ${chapter.options.map((option, index) => 
                                `<button class="option-btn" onclick="game.answerQuestion(${index})">${option}</button>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        ui.updateProgressBar();
        ui.updateLivesDisplay();
    },

    // Respondre pregunta principal
    answerQuestion(selectedAnswer) {
        const chapter = gameData.chapters[gameData.currentChapter];
        const buttons = document.querySelectorAll('#questionOptions .option-btn');
        const content = document.getElementById('gameContent');
        
        buttons.forEach(btn => btn.disabled = true);
        
        if (selectedAnswer === chapter.correctAnswer) {
            buttons[selectedAnswer].classList.add('correct');
            
            setTimeout(() => {
                content.innerHTML += `
                    <div class="feedback-panel success">
                        <div class="feedback-title">⚔️ SINCRONITZACIÓ EXITOSA</div>
                        <p>${chapter.feedback.correct}</p>
                        <button class="action-btn" onclick="game.startTextureChallenge()">CONTINUAR INVESTIGACIÓ</button>
                    </div>
                `;
            }, 1000);
        } else {
            buttons[selectedAnswer].classList.add('incorrect');
            buttons[chapter.correctAnswer].classList.add('correct');
            
            gameData.lives--;
            ui.updateLivesDisplay();
            
            if (gameData.lives <= 0) {
                setTimeout(() => {
                    content.innerHTML += `
                        <div class="feedback-panel error">
                            <div class="warning-panel">
                                <div class="feedback-title">💀 DESINCRONITZACIÓ TOTAL</div>
                                <p>L'Animus ha perdut el senyal. Els Templars han guanyat el control sobre la textura.</p>
                                <p><em>"Res no és veritat, tot està permès... excepte la ignorància textural."</em></p>
                            </div>
                            <button class="action-btn" onclick="game.restartGame()">REINICIAR SEQÜÈNCIA</button>
                        </div>
                    `;
                }, 1000);
            } else {
                setTimeout(() => {
                    content.innerHTML += `
                        <div class="feedback-panel error">
                            <div class="feedback-title">⚡ ERROR DE SINCRONITZACIÓ</div>
                            <p>${chapter.feedback.incorrect}</p>
                            <p><strong>Vides restants: ${gameData.lives}</strong></p>
                            <button class="action-btn" onclick="game.loadChapter()">REINTENTAR</button>
                        </div>
                    `;
                }, 1000);
            }
        }
    },

    // Iniciar desafiament de textura (pregunta secundària)
    startTextureChallenge() {
        const chapter = gameData.chapters[gameData.currentChapter];
        const content = document.getElementById('gameContent');
        
        content.innerHTML = `
            <div class="memory-panel">
                <div class="memory-header">
                    <div class="memory-title">VALIDACIÓ FINAL REQUERIDA</div>
                </div>
                <div class="memory-content">
                    <div class="challenge-section">
                        <div class="challenge-title">Prova Addicional del Sistema</div>
                        <div class="question-text">${chapter.rhythmGame.question}</div>
                        <div class="options-grid" id="textureOptions">
                            ${chapter.rhythmGame.options.map((option, index) => 
                                `<button class="option-btn" onclick="game.answerTextureChallenge(${index})">${option}</button>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // Respondre pregunta de textura
    answerTextureChallenge(selectedAnswer) {
        const chapter = gameData.chapters[gameData.currentChapter];
        const buttons = document.querySelectorAll('#textureOptions .option-btn');
        const content = document.getElementById('gameContent');
        
        buttons.forEach(btn => btn.disabled = true);
        
        if (selectedAnswer === chapter.rhythmGame.correctAnswer) {
            buttons[selectedAnswer].classList.add('correct');
            
            gameData.fragments.push({
                name: chapter.fragment,
                chapter: chapter.title,
                description: `Fragment recuperat després de superar els perills Templars de ${chapter.title}`
            });
            
            setTimeout(() => {
                content.innerHTML += `
                    <div class="feedback-panel success">
                        <div class="feedback-title">🗂️ FRAGMENT DE TEXTURA SINCRONITZAT</div>
                        <p>L'Animus ha registrat <strong>${chapter.fragment}</strong> a la base de dades!</p>
                        <p>Els secrets del teixit sonor d'aquesta època són vostres.</p>
                        <button class="action-btn" onclick="game.nextChapter()">AVANÇAR TEMPORAL</button>
                    </div>
                `;
            }, 1000);
        } else {
            buttons[selectedAnswer].classList.add('incorrect');
            buttons[chapter.rhythmGame.correctAnswer].classList.add('correct');
            
            gameData.lives--;
            ui.updateLivesDisplay();
            
            if (gameData.lives <= 0) {
                setTimeout(() => {
                    content.innerHTML += `
                        <div class="feedback-panel error">
                            <div class="warning-panel">
                                <div class="feedback-title">💀 DESINCRONITZACIÓ CRÍTICA</div>
                                <p>L'Animus ha perdut les memòries genètiques...</p>
                            </div>
                            <button class="action-btn" onclick="game.restartGame()">REINICIAR PROJECTE</button>
                        </div>
                    `;
                }, 1000);
            } else {
                setTimeout(() => {
                    content.innerHTML += `
                        <div class="feedback-panel error">
                            <div class="feedback-title">⚡ INTERFERÈNCIA DETECTADA</div>
                            <p>Els Templars estan sabotejant la sincronització. Vides restants: ${gameData.lives}</p>
                            <button class="action-btn" onclick="game.startTextureChallenge()">REINTENTAR</button>
                        </div>
                    `;
                }, 1000);
            }
        }
    },

    // Avançar al següent capítol
    nextChapter() {
        gameData.currentChapter++;
        
        if (gameData.currentChapter >= gameData.chapters.length) {
            ui.showFinalScreen();
        } else {
            gameData.lives = 3; // Restaurar vides per la nova època
            ui.showEraModal(); // Mostrar popup de la nova època
        }
    },

    // Reiniciar joc
    restartGame() {
        gameData.currentChapter = 0;
        gameData.lives = 3;
        gameData.fragments = [];
        ui.showEraModal();
    },

    // Guardar partida
    saveGame() {
        if (typeof(Storage) !== "undefined") {
            const saveData = {
                currentChapter: gameData.currentChapter,
                lives: gameData.lives,
                fragments: gameData.fragments
            };
            localStorage.setItem('animus_texture_save', JSON.stringify(saveData));
        }
    },

    // Carregar partida
    loadGame() {
        if (typeof(Storage) !== "undefined") {
            const saved = localStorage.getItem('animus_texture_save');
            if (saved) {
                const savedData = JSON.parse(saved);
                gameData.currentChapter = savedData.currentChapter || 0;
                gameData.lives = savedData.lives || 3;
                gameData.fragments = savedData.fragments || [];
            }
        }
    }
};
