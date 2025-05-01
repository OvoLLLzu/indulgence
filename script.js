// Инициализация Telegram SDK
const tg = window.Telegram.WebApp;
tg.ready();
tg.setHeaderColor('transparent');
tg.enableClosingConfirmation(false);

// Загрузка звука (автовоспроизведение после клика)
let doorSound = document.getElementById('door-sound');
let choirSound = new Audio('audio/choir.mp3');
let isAudioPlayed = false;

function enterConfessional() {
    document.getElementById('temple-screen').classList.remove('active');
    document.getElementById('confessional-screen').classList.add('active');
    
    // Звук двери
    doorSound.play().catch(() => {
        alert('Пожалуйста, разрешите воспроизведение звука');
    });
    
    // Автовоспроизведение хора при первом взаимодействии
    if (!isAudioPlayed) {
        choirSound.loop = true;
        choirSound.volume = 1;
        choirSound.play().catch(() => {
            console.log('Фоновая музыка не воспроизведена');
        });
        isAudioPlayed = true;
    }
}

function showInput() {
    document.getElementById('confession-input').style.display = 'block';
    setTimeout(() => document.getElementById('confession-input').focus(), 300);
}

function confirmConfession() {
    const confession = document.getElementById('confession-input').value.trim();
    if (confession === '') {
        alert('Введите текст покаяния');
        return;
    }
    openModal(); // Вызов функции из modal.js
}
