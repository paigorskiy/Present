function login() {
    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert("Будь ласка, заповніть усі поля!");
        return;
    }

    if (username === "anoNikus" && password === "aki2$no&3mys6") {
        document.body.style.transition = "transform 2s ease-in-out, opacity 2s ease-in-out";
        document.body.style.transform = "scale(1.5)";
        document.body.style.opacity = "0";
        setTimeout(() => {
            document.querySelector('.background-video').src = "font1.mp4";
            window.location.href = "heart.html";
        }, 2000);
    } else {
        alert("Невірні дані!");
    }
}

// Обробка зміни хом'ячка
function changeHamster(image) {
    document.getElementById('hamster').src = image;
}

// Обробка натискання на "Забули пароль"
document.querySelector('.forgot-password').addEventListener('click', function(e) {
    e.preventDefault();
    alert("Вспоминай, бебебе ❤️");
});
