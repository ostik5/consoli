// Дані про PlayStation
const playstationData = {
    "playstation-5-pro": {
        title: "PlayStation 5 Pro",
        description: `
            <strong>Дата виходу:</strong> Листопад 2020<br>
            <strong>Ключові особливості:</strong><ul>
                <li>Найпотужніша консоль від Sony.</li>
                <li>Підтримка 4K/120 FPS.</li>
                <li>1TB SSD для миттєвого завантаження.</li>
                <li>Зворотна сумісність з PlayStation 4 і PlayStation VR.</li>
            </ul>`
    },
    "playstation-5": {
        title: "PlayStation 5",
        description: `
            <strong>Дата виходу:</strong> Листопад 2020<br>
            <strong>Ключові особливості:</strong><ul>
                <li>Роздільна здатність 4K.</li>
                <li>Підтримка 120 FPS.</li>
                <li>1TB SSD для миттєвого завантаження.</li>
            </ul>`
    },
    "playstation-4-pro": {
        title: "PlayStation 4 Pro",
        description: `
            <strong>Дата виходу:</strong> Листопад 2016<br>
            <strong>Ключові особливості:</strong><ul>
                <li>Підтримка 4K.</li>
                <li>60 FPS для більшості ігор.</li>
                <li>1TB HDD.</li>
            </ul>`
    },
    "playstation-4": {
        title: "PlayStation 4",
        description: `
            <strong>Дата виходу:</strong> Листопад 2013<br>
            <strong>Ключові особливості:</strong><ul>
                <li>Підтримка 1080p.</li>
                <li>60 FPS.</li>
                <li>500GB/1TB HDD.</li>
            </ul>`
    }
};

// Обробка натискання кнопки "Детальніше"
document.querySelectorAll(".card-button").forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const consoleKey = e.target.getAttribute("href").substring(1); // Отримуємо частину href після "#"
        const consoleData = playstationData[consoleKey];

        // Перевірка, чи існує така консоль
        if (consoleData) {
            // Отримуємо елементи модального вікна
            const modal = document.getElementById("modal");
            const modalTitle = document.getElementById("modal-title");
            const modalDescription = document.getElementById("modal-description");
            const closeButton = document.getElementById("close-button");

            // Встановлюємо дані для модального вікна
            modalTitle.textContent = consoleData.title;
            modalDescription.innerHTML = consoleData.description;

            // Відкриваємо модальне вікно
            modal.style.display = "flex";

            // Закриття модального вікна
            closeButton.addEventListener("click", () => {
                modal.style.display = "none";
            });

            window.addEventListener("click", (e) => {
                if (e.target === modal) {
                    modal.style.display = "none";
                }
            });
        }
    });
});
