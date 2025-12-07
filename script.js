const toggleTheme = document.getElementById('toggle-theme');
const body = document.body;
const cards = document.querySelectorAll('.card');

// Жарық/түн режим
toggleTheme.addEventListener('click', () => {
    body.classList.toggle('dark');
    toggleTheme.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// Карточка click интерактив
cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('clicked');
    });
});