document.addEventListener('DOMContentLoaded', (event) => {
    const text = document.getElementById('text');
    let position = -text.offsetWidth;

    function animate() {
        position += 2; // Speed of the animation
        text.style.transform = `translateX(${position}px)`;

        if (position > window.innerWidth) {
            position = -text.offsetWidth;
        }

        requestAnimationFrame(animate);
    }

    animate();
});
