// Inicialización de consejos de ahorro
const adviceList = [
    "Establece un presupuesto mensual y cúmplelo.",
    "Ahorra al menos un 10% de tu ingreso cada mes.",
    "Evita gastos innecesarios, como cafés diarios.",
    "Compara precios antes de hacer una compra.",
    "Haz una lista de compras y cíñete a ella.",
    "Considera las compras de segunda mano.",
    "Utiliza aplicaciones para rastrear tus gastos.",
    "Revisa tus suscripciones y cancela las que no uses.",
    "Crea un fondo de emergencia para imprevistos."
];

// Evento para iniciar sesión
document.getElementById("login-button").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("options-container").style.display = "block";
    } else {
        alert("Por favor, ingresa tu nombre y contraseña.");
    }
});

// Eventos para las opciones de ahorro
document.querySelectorAll('.option-button').forEach(button => {
    button.addEventListener('click', function() {
        const goalName = this.getAttribute('data-goal');
        document.getElementById("selected-goal").innerText = `Objetivo: ${goalName}`;
        document.getElementById("total-amount").focus();
        document.getElementById("options-container").style.display = "none";
        document.getElementById("goal-container").style.display = "block";
    });
});

// Evento para el botón "Otro: Especificar objetivo"
document.getElementById("custom-goal-button").addEventListener("click", function() {
    const customInput = document.getElementById("custom-goal-input");
    customInput.style.display = customInput.style.display === "none" ? "block" : "none";
    if (customInput.style.display === "block") {
        customInput.focus();
    } else {
        const customGoal = customInput.value;
        if (customGoal) {
            document.getElementById("selected-goal").innerText = `Objetivo: ${customGoal}`;
            document.getElementById("total-amount").focus();
            document.getElementById("options-container").style.display = "none";
            document.getElementById("goal-container").style.display = "block";
        }
    }
});

// Evento para mostrar consejos de ahorro
document.getElementById("advice-button").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * adviceList.length);
    const advice = adviceList[randomIndex];
    document.getElementById("advice-text").innerText = advice;
    document.getElementById("advice-container").style.display = "block";
});

// Evento para mostrar la calculadora de ahorro
document.getElementById("calculator-button").addEventListener("click", function() {
    const calculatorContainer = document.getElementById("calculator-container");
    calculatorContainer.style.display = calculatorContainer.style.display === "none" ? "block" : "none";
});

// Evento para calcular el ahorro
document.getElementById("calculate-button").addEventListener("click", function() {
    const monthlySavings = parseFloat(document.getElementById("monthly-savings").value);
    const months = parseInt(document.getElementById("months").value);
    
    if (!isNaN(monthlySavings) && !isNaN(months)) {
        const totalSavings = monthlySavings * months;
        document.getElementById("calculation-result").innerText = `Ahorro total después de ${months} meses: $${totalSavings.toFixed(2)}`;
    } else {
        alert("Por favor, ingresa valores válidos.");
    }
});

// Control de música
let isMusicPlaying = true;

document.getElementById("music-toggle").addEventListener("click", function() {
    const music = document.getElementById("background-music");
    if (isMusicPlaying) {
        music.pause();
        this.innerText = "Reproducir Música";
    } else {
        music.play();
        this.innerText = "Pausar Música";
    }
    isMusicPlaying = !isMusicPlaying;
});

// Evento para guardar el objetivo
document.getElementById("save-goal-button").addEventListener("click", function() {
    const goalName = document.getElementById("selected-goal").innerText;
    const totalAmount = document.getElementById("total-amount").value;
    const goalDate = document.getElementById("goal-date").value;
    const weeklyAmounts = {
        monday: document.getElementById("monday").value,
        tuesday: document.getElementById("tuesday").value,
        wednesday: document.getElementById("wednesday").value,
        thursday: document.getElementById("thursday").value,
        friday: document.getElementById("friday").value,
        saturday: document.getElementById("saturday").value,
        sunday: document.getElementById("sunday").value,
    };

    console.log("Objetivo Guardado:", {
        goalName,
        totalAmount,
        goalDate,
        weeklyAmounts
    });

    alert("Objetivo guardado con éxito.");
});
