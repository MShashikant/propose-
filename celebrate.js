// Confetti Animation
function createConfetti() {
    const colors = ["#ff5e57", "#ffcc00", "#ff3399", "#66ccff", "#00cc66"];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        const confettiPiece = document.createElement("div");
        confettiPiece.style.position = "absolute";
        confettiPiece.style.top = `${Math.random() * 100}%`;
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.width = `${Math.random() * 10 + 5}px`;
        confettiPiece.style.height = `${Math.random() * 10 + 5}px`;
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiPiece.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear infinite`;
        document.querySelector(".confetti").appendChild(confettiPiece);
    }
}

createConfetti();
