// Модальне вікно для Nintendo
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close-button');
const cardButtons = document.querySelectorAll('.card-button');

// Функція для відкриття модального вікна
cardButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const cardTitle = e.target.previousElementSibling.textContent;
        const cardDescription = e.target.previousElementSibling.nextElementSibling.textContent;
        
        // Оновлюємо контент модального вікна
        document.getElementById('modal-title').textContent = cardTitle;
        document.getElementById('modal-description').textContent = cardDescription;
        
        // Показуємо модальне вікно
        modal.style.display = 'block';
    });
});

// Закриття модального вікна
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закриття модального вікна, якщо користувач клікає поза ним
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
