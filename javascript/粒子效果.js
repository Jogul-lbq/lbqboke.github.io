// 粒子效果
function createParticle() {
    var particle = document.createElement('div');
    particle.classList.add('particle');

    var size = Math.random() * 2 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    var startX = Math.random() * window.innerWidth;
    var startY = Math.random() * window.innerHeight;
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;

    particle.style.opacity = Math.random() * 0.7 + 0.3;

    document.body.appendChild(particle);

    var duration = Math.random() * 10 + 10;
    var endX = Math.random() * window.innerWidth;
    var endY = Math.random() * window.innerHeight;
    var offsetX = (Math.random() - 0.5) * window.innerWidth * 0.2;

    function animate(timestamp) {
        if (!particle.startTime) particle.startTime = timestamp;
        var progress = (timestamp - particle.startTime) / (duration * 1000);

        if (progress < 1) {
            var x = startX + progress * (endX - startX) + offsetX * Math.sin(progress * Math.PI);
            var y = startY + progress * (endY - startY);

            var clampedX = Math.max(0, Math.min(x, window.innerWidth));
            var clampedY = Math.max(0, Math.min(y, window.innerHeight));

            particle.style.transform = `translate(${clampedX - startX}px, ${clampedY - startY}px)`;
            requestAnimationFrame(animate);
        } else {
            particle.remove();
        }
    }

    requestAnimationFrame(animate);
}

// 窗口大小改变时移除现有粒子
window.addEventListener('resize', () => {
    document.querySelectorAll('.particle').forEach(p => p.remove());
});

// 页面加载完成后开始创建粒子
document.addEventListener('DOMContentLoaded', () => {
    setInterval(createParticle, 200);
});