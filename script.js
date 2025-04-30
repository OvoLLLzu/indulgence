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
    // Переключение экранов
    document.getElementById('temple-screen').classList.remove('active');
    document.getElementById('confessional-screen').classList.add('active');
    
    // Звук двери
    doorSound.play().catch(() => {
        alert('Пожалуйста, разрешите воспроизведение звука');
    });
    
    // Автовоспроизведение хора при первом взаимодействии
    if (!isAudioPlayed) {
        choirSound.loop = true;
        choirSound.volume = 0.3;
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
    document.getElementById('confirmation-modal').style.display = 'flex';
}

function submitConfession(confirmed) {
    const finalMessage = document.getElementById('final-message');
    if (confirmed) {
        finalMessage.textContent = "Ваши грехи отпущены, ступай, Дитя";
    } else {
        finalMessage.textContent = "Что ж, ступай, Дитя, я тебя услышал..";
    }
    document.getElementById('confirmation-modal').style.display = 'none';
    document.getElementById('confessional-screen').classList.remove('active');
    document.getElementById('final-screen').classList.add('active');
}
