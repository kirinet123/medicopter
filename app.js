const video = document.getElementById('webcam');
const collectHoneyBtn = document.getElementById('collectHoney');
const collectWaxBtn = document.getElementById('collectWax');
let mediaStream = null;

// Запуск веб-камеры
async function startWebcam() {
    try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        video.srcObject = mediaStream;
    } catch (err) {
        console.error("Ошибка доступа к камере:", err);
        alert("Не удалось получить доступ к камере!");
    }
}

// Остановка камеры
function stopWebcam() {
    if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
    }
}

// Отправка данных на сервер (имитация)
function sendData(action) {
    console.log(`Действие: ${action}`);
    fetch('/api/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action })
    })
    .then(response => response.json())
    .then(data => alert(`Успешно: ${data.message}`))
    .catch(err => alert(`Ошибка: ${err}`));
}

// Обработчики кнопок
collectHoneyBtn.addEventListener('click', () => sendData('collect_honey'));
collectWaxBtn.addEventListener('click', () => sendData('collect_wax'));

// Инициализация
startWebcam();