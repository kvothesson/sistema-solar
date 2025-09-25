# 🌌 Sistema Solar - Simulación Interactiva

Una simulación completa e interactiva del sistema solar construida con HTML5, CSS3 y JavaScript vanilla. Perfecta para educación, entretenimiento y demostración de conceptos astronómicos.

## 🚀 Características

- **Simulación Realista**: Órbitas planetarias con velocidades relativas aproximadas
- **Planetas Detallados**: Información completa de los 8 planetas principales
- **Interactividad Completa**: Click en planetas, controles de velocidad, pausa/reproducción
- **Efectos Visuales**: Estrellas de fondo, animaciones suaves, efectos de hover
- **Responsive Design**: Compatible con dispositivos móviles y desktop
- **Optimizado para GitHub Pages**: Listo para desplegar

## 🎮 Controles

### Mouse
- **Click en planeta**: Seleccionar y ver información detallada
- **Click en espacio vacío**: Deseleccionar planeta

### Teclado
- **Espacio**: Pausar/Reproducir simulación
- **R**: Reiniciar simulación
- **1-8**: Seleccionar planetas directamente (1=Mercurio, 2=Venus, etc.)
- **ESC**: Deseleccionar planeta actual

### Controles de Panel
- **Velocidad**: Ajustar velocidad de las órbitas (0.5x - 10x)
- **Mostrar Órbitas**: Alternar visibilidad de las trayectorias
- **Mostrar Información**: Alternar panel de información

## 🪐 Planetas Incluidos

1. **Mercurio** - El planeta más cercano al Sol
2. **Venus** - El planeta más caliente
3. **Tierra** - Nuestro hogar con su luna
4. **Marte** - El Planeta Rojo
5. **Júpiter** - El gigante gaseoso
6. **Saturno** - El planeta de los anillos
7. **Urano** - El gigante de hielo
8. **Neptuno** - El planeta más lejano

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Animaciones, gradientes, efectos visuales
- **JavaScript ES6+**: Lógica de simulación, interactividad
- **Web APIs**: AudioContext para efectos de sonido
- **Responsive Design**: CSS Grid y Flexbox

## 📱 Compatibilidad

- ✅ Chrome/Chromium (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles (iOS/Android)

## 🚀 Despliegue en GitHub Pages

1. **Fork este repositorio**
2. **Ve a Settings > Pages**
3. **Selecciona "Deploy from a branch"**
4. **Elige "main" como branch**
5. **¡Tu simulación estará disponible en `https://tu-usuario.github.io/sistema-solar`**

## 🔧 Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/sistema-solar.git

# Navegar al directorio
cd sistema-solar

# Abrir en el navegador (no requiere servidor)
open index.html
```

## 📊 Datos Científicos

La simulación incluye datos reales de:
- Distancias orbitales
- Tamaños planetarios
- Composición atmosférica
- Períodos orbitales
- Temperaturas superficiales
- Número de lunas

*Nota: Las velocidades orbitales están simplificadas para mejor visualización*

## 🎨 Personalización

### Cambiar Velocidades
Modifica las duraciones de animación en `styles.css`:
```css
.mercury-orbit { animation-duration: 8s; }
.venus-orbit { animation-duration: 12s; }
/* etc... */
```

### Agregar Nuevos Planetas
1. Añade la órbita en `index.html`
2. Define estilos en `styles.css`
3. Agrega datos en `script.js`
4. Actualiza los event listeners

### Modificar Información
Edita el objeto `planetsData` en `script.js` para cambiar la información mostrada.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Algunas ideas:

- [ ] Agregar planetas enanos (Plutón, Ceres, etc.)
- [ ] Implementar cinturón de asteroides animado
- [ ] Añadir cometas periódicos
- [ ] Crear diferentes vistas (desde arriba, desde el lado)
- [ ] Implementar zoom in/out
- [ ] Agregar más efectos de sonido
- [ ] Crear modo educativo con preguntas

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🙏 Agradecimientos

- Datos astronómicos de NASA
- Inspiración de simulaciones educativas
- Comunidad de desarrolladores web

## 📞 Contacto

Si tienes preguntas o sugerencias, no dudes en:
- Abrir un issue en GitHub
- Crear un pull request
- Contactar al desarrollador

---

**¡Explora el universo desde tu navegador!** 🌟
