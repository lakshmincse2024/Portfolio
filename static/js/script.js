const texts = ["Database Designer", "Software Developer"];
let index = 0;

function typeText() {
    const typingText = document.getElementById("typing-text");
    let text = texts[index];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
        if (charIndex < text.length) {
            typingText.textContent += text[charIndex];
            charIndex++;
        } else {
            clearInterval(typeInterval);

            setTimeout(() => eraseText(typingText), 1500);
        }
    }, 100);
}

function eraseText(typingText) {
    let charIndex = typingText.textContent.length;

    const eraseInterval = setInterval(() => {
        if (charIndex > 0) {
            typingText.textContent = typingText.textContent.slice(0, -1);
            charIndex--;
        } else {
            clearInterval(eraseInterval);

            index = (index + 1) % texts.length;

            setTimeout(typeText, 500);
        }
    }, 100);
}

typeText();

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
});

document.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('.about-section');
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        aboutSection.classList.add('visible');
    }
});

function openResume() {
    window.location.href = "{{ url_for('static', filename='resume/Lakshmi N.pdf') }}";
}

function goBack() {
    window.history.back();
}
