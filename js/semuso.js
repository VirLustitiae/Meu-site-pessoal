
// Adiciona o evento de passar o mouse sobre o body
document.body.addEventListener('mousemove', function(event) {
    // Obtém as coordenadas do mouse
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calcula a posição do efeito de água
    const waterEffectX = mouseX / window.innerWidth * 100;
    const waterEffectY = mouseY / window.innerHeight * 100;

    // Aplica o efeito de água no background do body
    document.body.style.backgroundPosition = `${waterEffectX}% ${waterEffectY}%`;
});
