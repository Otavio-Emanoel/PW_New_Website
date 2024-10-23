const menuButton = document.getElementById('menu-button');
const closeMenuButton = document.getElementById('close-menu');
const body = document.body;

menuButton.addEventListener('click', () => {
    body.classList.add('menu-open');
});

closeMenuButton.addEventListener('click', () => {
    body.classList.remove('menu-open');
});

document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});