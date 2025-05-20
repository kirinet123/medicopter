const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // Папка с фронтендом
app.use(express.json());

app.post('/api/action', (req, res) => {
    const { action } = req.body;
    console.log(`Получено действие: ${action}`);
    
    // Здесь можно добавить логику обработки (запись в БД, сохранение видео и т.д.)
    res.json({ message: `Действие "${action}" выполнено!` });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});