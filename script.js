function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Efeito de digitação no título
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".typewriter");
    const text = textElement.innerText;
    textElement.innerText = "";

    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();
});
