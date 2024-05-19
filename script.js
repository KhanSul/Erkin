document.addEventListener('DOMContentLoaded', (event) => {
    const texts = document.querySelectorAll('.text');
    const container = document.getElementById('container');
    const speeds = Array.from({ length: texts.length }, () => ({
        dx: (Math.random() * 4 + 2) * (Math.random() < 0.5 ? 1 : -1),
        dy: (Math.random() * 4 + 2) * (Math.random() < 0.5 ? 1 : -1),
    }));

    function animate() {
        texts.forEach((text, index) => {
            let rect = text.getBoundingClientRect();
            let newX = rect.left + speeds[index].dx;
            let newY = rect.top + speeds[index].dy;

            if (newX <= 0 || newX + rect.width >= container.clientWidth) {
                speeds[index].dx *= -1;
            }

            if (newY <= 0 || newY + rect.height >= container.clientHeight) {
                speeds[index].dy *= -1;
            }

            text.style.transform = `translate(${newX}px, ${newY}px)`;
        });

        requestAnimationFrame(animate);
    }

    animate();
});
