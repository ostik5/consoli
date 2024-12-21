// Дані про консолі
const consolesData = {
    "series-x": {
        title: "Xbox Series X",
        description: `
            <strong>Дата виходу:</strong> Листопад 2020<br>
            <strong>Ключові особливості:</strong><ul>
                <li>Найпотужніша консоль від Microsoft, що пропонує 12 терафлопс графічної потужності.</li>
                <li>Підтримка 4K-геймінгу на частоті до 120 кадрів/секунду.</li>
                <li>SSD-диск на 1 ТБ забезпечує миттєве завантаження ігор.</li>
                <li>Зворотна сумісність із тисячами ігор з Xbox One, Xbox 360 і оригінальної Xbox.</li>
                <li>Преміум-дизайн у вигляді компактної чорної «вежі».</li>
            </ul>`
    },
    "series-s": {
        title: "Xbox Series S",
        description: `
            <strong>Дата виходу:</strong> Листопад 2020<br>
            <strong>Ключові особливості:</strong><ul>
                <li>Доступніша альтернатива Xbox Series X, оптимізована для 1440p-геймінгу.</li>
                <li>4 терафлопс графічної потужності та SSD-диск на 512 ГБ.</li>
                <li>Тонкий білий корпус, компактніший, ніж у Series X.</li>
                <li>Підтримує зворотну сумісність, але без приводу для дисків — тільки цифрові версії ігор.</li>
            </ul>`
    },
    "xbox-one": {
        title: "Xbox One",
        description: `
            <strong>Дата виходу:</strong> Листопад 2013<br>
            <strong>Ключові особливості:</strong><ul>
                <li>Головна консоль свого покоління, фокус на мультимедійність (відео, музика, телебачення).</li>
                <li>Потужність: 1,3 терафлопс.</li>
                <li>Підтримка Blu-ray-дисків і внутрішній жорсткий диск до 1 ТБ.</li>
                <li>Версії: Xbox One, Xbox One S (тонший і підтримує HDR), Xbox One X (потужніший для 4K-геймінгу).</li>
                <li>Величезна бібліотека ігор із підтримкою зворотної сумісності з Xbox 360.</li>
            </ul>`
    },
    "xbox-360": {
        title: "Xbox 360",
        description: `
            <strong>Дата виходу:</strong> Листопад 2005<br>
            <strong>Ключові особливості:</strong><ul>
                <li>Революційна консоль, яка принесла онлайн-геймінг у маси через Xbox Live.</li>
                <li>500 ГБ внутрішньої пам’яті та підтримка зовнішніх носіїв.</li>
                <li>Популярність завдяки хітовим іграм: Halo, Gears of War, Forza Motorsport.</li>
                <li>Дизайн із бездротовими контролерами став проривом у ті часи.</li>
                <li>Консоль мала кілька ревізій, включаючи тонку версію Xbox 360 S і економну Xbox 360 E.</li>
            </ul>`
    }
};

// Елементи модального вікна
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeButton = document.querySelector(".close-button");

// Відкрити модальне вікно з відповідною інформацією
document.querySelectorAll(".card-button").forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault(); // Забороняємо перехід за посиланням
        const consoleKey = e.target.getAttribute("href").substring(1); // Видаляємо символ `#`
        const consoleData = consolesData[consoleKey]; // Отримуємо дані для цієї консолі

        if (consoleData) {
            modalTitle.textContent = consoleData.title; // Встановлюємо заголовок
            modalDescription.innerHTML = consoleData.description; // Встановлюємо опис
            modal.style.display = "flex"; // Показуємо модальне вікно
        }
    });
});

// Закрити модальне вікно при натисканні на кнопку закриття
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Закрити модальне вікно при кліку на фон
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

















