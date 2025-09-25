// Sistema Solar - Simulación Interactiva
class SolarSystemSimulation {
    constructor() {
        this.isPlaying = true;
        this.speed = 1;
        this.selectedPlanet = null;
        this.showOrbits = true;
        this.showInfo = true;
        
        // Datos de los planetas
        this.planetsData = {
            mercury: {
                name: 'Mercurio',
                distance: '57.9 millones km',
                diameter: '4,879 km',
                mass: '3.30 × 10²³ kg',
                temperature: '167°C promedio',
                dayLength: '58.6 días terrestres',
                yearLength: '88 días terrestres',
                moons: '0',
                description: 'El planeta más cercano al Sol y el más pequeño del sistema solar. Tiene grandes variaciones de temperatura entre el día y la noche.',
                atmosphere: 'Prácticamente sin atmósfera'
            },
            venus: {
                name: 'Venus',
                distance: '108.2 millones km',
                diameter: '12,104 km',
                mass: '4.87 × 10²⁴ kg',
                temperature: '464°C promedio',
                dayLength: '243 días terrestres',
                yearLength: '225 días terrestres',
                moons: '0',
                description: 'El planeta más caliente del sistema solar debido a su densa atmósfera de dióxido de carbono que crea un efecto invernadero extremo.',
                atmosphere: 'Dióxido de carbono (96.5%), Nitrógeno (3.5%)'
            },
            earth: {
                name: 'Tierra',
                distance: '149.6 millones km',
                diameter: '12,756 km',
                mass: '5.97 × 10²⁴ kg',
                temperature: '15°C promedio',
                dayLength: '24 horas',
                yearLength: '365.25 días',
                moons: '1 (Luna)',
                description: 'Nuestro hogar. El único planeta conocido que alberga vida. Tiene agua líquida, una atmósfera respirable y un campo magnético protector.',
                atmosphere: 'Nitrógeno (78%), Oxígeno (21%), Otros (1%)'
            },
            mars: {
                name: 'Marte',
                distance: '227.9 millones km',
                diameter: '6,792 km',
                mass: '6.39 × 10²³ kg',
                temperature: '-65°C promedio',
                dayLength: '24.6 horas',
                yearLength: '687 días terrestres',
                moons: '2 (Fobos, Deimos)',
                description: 'El "Planeta Rojo". Tiene evidencia de agua en el pasado y es el objetivo principal para la exploración humana futura.',
                atmosphere: 'Dióxido de carbono (95%), Nitrógeno (3%), Argón (2%)'
            },
            jupiter: {
                name: 'Júpiter',
                distance: '778.5 millones km',
                diameter: '142,984 km',
                mass: '1.90 × 10²⁷ kg',
                temperature: '-110°C promedio',
                dayLength: '9.9 horas',
                yearLength: '11.9 años terrestres',
                moons: '95+ conocidas',
                description: 'El planeta más grande del sistema solar. Es un gigante gaseoso con la Gran Mancha Roja, una tormenta masiva que ha durado siglos.',
                atmosphere: 'Hidrógeno (89%), Helio (10%), Otros (1%)'
            },
            saturn: {
                name: 'Saturno',
                distance: '1,429 millones km',
                diameter: '120,536 km',
                mass: '5.68 × 10²⁶ kg',
                temperature: '-140°C promedio',
                dayLength: '10.7 horas',
                yearLength: '29.4 años terrestres',
                moons: '146+ conocidas',
                description: 'Famoso por sus espectaculares anillos. Es menos denso que el agua y tiene una luna, Titán, con una atmósfera densa.',
                atmosphere: 'Hidrógeno (96%), Helio (3%), Otros (1%)'
            },
            uranus: {
                name: 'Urano',
                distance: '2,871 millones km',
                diameter: '51,118 km',
                mass: '8.68 × 10²⁵ kg',
                temperature: '-195°C promedio',
                dayLength: '17.2 horas',
                yearLength: '84 años terrestres',
                moons: '27 conocidas',
                description: 'Un gigante de hielo que gira de lado. Su atmósfera contiene metano que le da su color azul verdoso.',
                atmosphere: 'Hidrógeno (83%), Helio (15%), Metano (2%)'
            },
            neptune: {
                name: 'Neptuno',
                distance: '4,504 millones km',
                diameter: '49,528 km',
                mass: '1.02 × 10²⁶ kg',
                temperature: '-200°C promedio',
                dayLength: '16.1 horas',
                yearLength: '164.8 años terrestres',
                moons: '16 conocidas',
                description: 'El planeta más lejano del Sol. Tiene los vientos más fuertes del sistema solar, alcanzando hasta 2,100 km/h.',
                atmosphere: 'Hidrógeno (80%), Helio (19%), Metano (1%)'
            }
        };
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.updatePlanetInfo();
        this.updateSpeedDisplay();
        this.toggleOrbits(this.showOrbits);
        this.toggleInfoPanel(this.showInfo);
    }
    
    setupEventListeners() {
        // Controles de velocidad
        const speedSlider = document.getElementById('speed');
        speedSlider.addEventListener('input', (e) => {
            this.speed = parseFloat(e.target.value);
            this.updateSpeed();
            this.updateSpeedDisplay();
        });
        
        // Botón de play/pausa
        const playPauseBtn = document.getElementById('play-pause');
        playPauseBtn.addEventListener('click', () => {
            this.togglePlayPause();
        });
        
        // Botón de reset
        const resetBtn = document.getElementById('reset');
        resetBtn.addEventListener('click', () => {
            this.resetSimulation();
        });
        
        // Mostrar/ocultar órbitas
        const showOrbitsCheckbox = document.getElementById('show-orbits');
        showOrbitsCheckbox.addEventListener('change', (e) => {
            this.showOrbits = e.target.checked;
            this.toggleOrbits(this.showOrbits);
        });
        
        // Mostrar/ocultar información
        const showInfoCheckbox = document.getElementById('show-info');
        showInfoCheckbox.addEventListener('change', (e) => {
            this.showInfo = e.target.checked;
            this.toggleInfoPanel(this.showInfo);
        });
        
        // Click en planetas
        document.querySelectorAll('.planet').forEach(planet => {
            planet.addEventListener('click', (e) => {
                e.stopPropagation();
                const planetName = planet.dataset.planet;
                this.selectPlanet(planetName);
            });
        });
        
        // Click en el universo para deseleccionar
        document.querySelector('.universe').addEventListener('click', () => {
            this.deselectPlanet();
        });
        
        // Teclado shortcuts
        document.addEventListener('keydown', (e) => {
            switch(e.code) {
                case 'Space':
                    e.preventDefault();
                    this.togglePlayPause();
                    break;
                case 'KeyR':
                    this.resetSimulation();
                    break;
                case 'Escape':
                    this.deselectPlanet();
                    break;
                case 'Digit1':
                    this.selectPlanet('mercury');
                    break;
                case 'Digit2':
                    this.selectPlanet('venus');
                    break;
                case 'Digit3':
                    this.selectPlanet('earth');
                    break;
                case 'Digit4':
                    this.selectPlanet('mars');
                    break;
                case 'Digit5':
                    this.selectPlanet('jupiter');
                    break;
                case 'Digit6':
                    this.selectPlanet('saturn');
                    break;
                case 'Digit7':
                    this.selectPlanet('uranus');
                    break;
                case 'Digit8':
                    this.selectPlanet('neptune');
                    break;
            }
        });
    }
    
    updateSpeed() {
        const solarSystem = document.querySelector('.solar-system');
        const orbits = document.querySelectorAll('.orbit');
        const moons = document.querySelectorAll('.moon-orbit');
        
        orbits.forEach(orbit => {
            const currentDuration = parseFloat(orbit.style.animationDuration || 
                getComputedStyle(orbit).animationDuration);
            orbit.style.animationDuration = `${currentDuration / this.speed}s`;
        });
        
        moons.forEach(moon => {
            const currentDuration = parseFloat(moon.style.animationDuration || 
                getComputedStyle(moon).animationDuration);
            moon.style.animationDuration = `${currentDuration / this.speed}s`;
        });
        
        if (this.isPlaying) {
            solarSystem.classList.remove('paused');
        }
    }
    
    updateSpeedDisplay() {
        const speedValue = document.getElementById('speed-value');
        speedValue.textContent = `${this.speed}x`;
    }
    
    togglePlayPause() {
        const solarSystem = document.querySelector('.solar-system');
        const playPauseBtn = document.getElementById('play-pause');
        
        this.isPlaying = !this.isPlaying;
        
        if (this.isPlaying) {
            solarSystem.classList.remove('paused');
            playPauseBtn.textContent = '⏸️';
        } else {
            solarSystem.classList.add('paused');
            playPauseBtn.textContent = '▶️';
        }
    }
    
    resetSimulation() {
        const solarSystem = document.querySelector('.solar-system');
        solarSystem.classList.add('paused');
        
        // Reset all animations
        const orbits = document.querySelectorAll('.orbit');
        const moons = document.querySelectorAll('.moon-orbit');
        const planets = document.querySelectorAll('.planet');
        
        orbits.forEach(orbit => {
            orbit.style.animation = 'none';
            orbit.offsetHeight; // Trigger reflow
            orbit.style.animation = null;
        });
        
        moons.forEach(moon => {
            moon.style.animation = 'none';
            moon.offsetHeight;
            moon.style.animation = null;
        });
        
        planets.forEach(planet => {
            planet.classList.remove('selected');
        });
        
        // Reset to initial state
        setTimeout(() => {
            this.isPlaying = true;
            this.updateSpeed();
            this.updateSpeedDisplay();
            this.deselectPlanet();
            document.getElementById('play-pause').textContent = '⏸️';
        }, 100);
    }
    
    selectPlanet(planetName) {
        // Remove previous selection
        document.querySelectorAll('.planet').forEach(planet => {
            planet.classList.remove('selected');
        });
        
        // Select new planet
        const planetElement = document.querySelector(`[data-planet="${planetName}"]`);
        if (planetElement) {
            planetElement.classList.add('selected');
            this.selectedPlanet = planetName;
            this.updatePlanetInfo(planetName);
        }
    }
    
    deselectPlanet() {
        document.querySelectorAll('.planet').forEach(planet => {
            planet.classList.remove('selected');
        });
        this.selectedPlanet = null;
        this.updatePlanetInfo();
    }
    
    updatePlanetInfo(planetName = null) {
        const planetNameElement = document.getElementById('planet-name');
        const planetDetailsElement = document.getElementById('planet-details');
        
        if (planetName && this.planetsData[planetName]) {
            const planet = this.planetsData[planetName];
            planetNameElement.textContent = planet.name;
            
            planetDetailsElement.innerHTML = `
                <p><strong>Distancia del Sol:</strong> ${planet.distance}</p>
                <p><strong>Diámetro:</strong> ${planet.diameter}</p>
                <p><strong>Masa:</strong> ${planet.mass}</p>
                <p><strong>Temperatura:</strong> ${planet.temperature}</p>
                <p><strong>Duración del día:</strong> ${planet.dayLength}</p>
                <p><strong>Año:</strong> ${planet.yearLength}</p>
                <p><strong>Lunas:</strong> ${planet.moons}</p>
                <p><strong>Atmósfera:</strong> ${planet.atmosphere}</p>
                <hr style="margin: 15px 0; border-color: rgba(255,255,255,0.2);">
                <p style="font-style: italic;">${planet.description}</p>
            `;
        } else {
            planetNameElement.textContent = 'Sistema Solar';
            planetDetailsElement.innerHTML = `
                <p>Bienvenido a la simulación del Sistema Solar</p>
                <p><strong>Controles:</strong></p>
                <ul style="margin-left: 20px; margin-top: 10px;">
                    <li>Click en un planeta para seleccionarlo</li>
                    <li>Espacio: Pausar/Reproducir</li>
                    <li>R: Reiniciar simulación</li>
                    <li>1-8: Seleccionar planetas directamente</li>
                    <li>ESC: Deseleccionar</li>
                </ul>
                <p style="margin-top: 15px;"><strong>Datos:</strong></p>
                <p>Esta simulación muestra las órbitas de los 8 planetas principales del sistema solar con velocidades relativas aproximadas.</p>
            `;
        }
    }
    
    toggleOrbits(show) {
        const orbits = document.querySelectorAll('.orbit');
        orbits.forEach(orbit => {
            if (show) {
                orbit.classList.add('show-orbit');
            } else {
                orbit.classList.remove('show-orbit');
            }
        });
    }
    
    toggleInfoPanel(show) {
        const infoPanel = document.querySelector('.info-panel');
        if (show) {
            infoPanel.classList.remove('hidden');
        } else {
            infoPanel.classList.add('hidden');
        }
    }
    
    // Método para agregar efectos de partículas (futuro)
    addParticleEffects() {
        // Placeholder para efectos futuros como cometas, asteroides, etc.
    }
    
    // Método para cambiar la perspectiva de cámara (futuro)
    changeCameraView(view) {
        // Placeholder para diferentes vistas del sistema solar
    }
}

// Inicializar la simulación cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    window.solarSystemSim = new SolarSystemSimulation();
    
    // Mostrar instrucciones iniciales
    console.log(`
    🚀 Sistema Solar - Simulación Interactiva
    
    Controles:
    • Click en planetas para seleccionarlos
    • Espacio: Pausar/Reproducir
    • R: Reiniciar
    • 1-8: Seleccionar planetas
    • ESC: Deseleccionar
    
    ¡Disfruta explorando nuestro sistema solar!
    `);
});

// Función para generar estrellas dinámicas (mejora visual)
function generateStars() {
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 200;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.position = 'absolute';
        star.style.width = Math.random() * 2 + 'px';
        star.style.height = star.style.width;
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random() * 0.8 + 0.2;
        star.style.animation = `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite alternate`;
        
        starsContainer.appendChild(star);
    }
}

// Llamar a la función de generación de estrellas
document.addEventListener('DOMContentLoaded', generateStars);

// Función para efectos de sonido (opcional)
class SoundEffects {
    constructor() {
        this.audioContext = null;
        this.init();
    }
    
    init() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Web Audio API no soportada');
        }
    }
    
    playPlanetSelect() {
        if (!this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, this.audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.1);
    }
}

// Inicializar efectos de sonido
document.addEventListener('DOMContentLoaded', () => {
    window.soundEffects = new SoundEffects();
});

// Mejorar la experiencia con efectos de hover
document.addEventListener('DOMContentLoaded', () => {
    const planets = document.querySelectorAll('.planet');
    
    planets.forEach(planet => {
        planet.addEventListener('mouseenter', () => {
            planet.style.transform = 'translateX(-50%) scale(1.3)';
            planet.style.zIndex = '10';
        });
        
        planet.addEventListener('mouseleave', () => {
            if (!planet.classList.contains('selected')) {
                planet.style.transform = 'translateX(-50%) scale(1)';
                planet.style.zIndex = '1';
            }
        });
    });
});

// Función para mostrar información adicional sobre el sistema solar
function showSolarSystemInfo() {
    const info = {
        age: '4.6 mil millones de años',
        planets: '8 planetas principales',
        dwarfPlanets: '5 planetas enanos reconocidos',
        moons: '200+ lunas conocidas',
        asteroids: 'Millones en el cinturón de asteroides',
        comets: 'Miles de cometas conocidos'
    };
    
    return info;
}

// Exportar para uso futuro
window.SolarSystemInfo = showSolarSystemInfo;
