// components/modal.js

// Глобальная функция для открытия модального окна
window.openModal = function() {
    const modal = document.getElementById('confirmation-modal');
    if (modal) {
        modal.style.display = 'flex';
    } else {
        console.error('Модальное окно не найдено');
    }
};

// Глобальная функция для закрытия модального окна
window.closeModal = function() {
    const modal = document.getElementById('confirmation-modal');
    if (modal) {
        modal.style.display = 'none';
    }
};

// Функция обработки результата покаяния
window.submitConfession = function(confirmed) {
    const finalMessage = document.getElementById('final-message');
    if (confirmed) {
        finalMessage.textContent = "Ваши грехи отпущены, ступай, Дитя";
    } else {
        finalMessage.textContent = "Что ж, ступай, Дитя, я тебя услышал..";
    }
    document.getElementById('confessional-screen').classList.remove('active');
    document.getElementById('final-screen').classList.add('active');
};

// Обработчики событий для кнопок "Да"/"Нет"
document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.querySelector('[data-action="yes"]');
    const noButton = document.querySelector('[data-action="no"]');

    if (yesButton) {
        yesButton.addEventListener('click', () => {
            submitConfession(true);
            closeModal();
        });
    }

    if (noButton) {
        noButton.addEventListener('click', () => {
            submitConfession(false);
            closeModal();
        });
    }
});
