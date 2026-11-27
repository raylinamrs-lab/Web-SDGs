document.addEventListener("DOMContentLoaded", () => {
    const hypeBtn = document.getElementById("hypeBtn");
    const hypeText = document.getElementById("hypeText");
    const copyBtn = document.getElementById("copyBtn");
    const profilePic = document.getElementById("profilePic");

    const quotes = [
        "SO EXCITED FOR AVENGERS: DOOMSDAY!! 💜✨",
        "Doomsday countdown vibes are ON 🌸🎬",
        "Marvel fan mode activated!! 🍿💜",
        "Can't wait for Doomsday!! ✨🌷"
    ];

    let clickCount = 0;

    hypeBtn.addEventListener("click", () => {
        hypeText.textContent = quotes[clickCount % quotes.length];
        clickCount++;
    });

    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText("lasagnawcheese").then(() => {
            copyBtn.textContent = "Copied @lasagnawcheese! ✅";
            setTimeout(() => {
                copyBtn.textContent = "Copy Username";
            }, 2000);
        });
    });

    profilePic.addEventListener("click", () => {
        alert("Hi! Welcome to Ray's page 🌸✨");
    });
});