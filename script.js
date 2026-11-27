const startBtn = document.getElementById('startBtn');
const intro = document.getElementById('intro');
const townArea = document.getElementById('townArea');
const doneBtn = document.getElementById('doneBtn');

const sumberBtn = document.getElementById('sumberBtn');
const infoModal = document.getElementById('infoModal');
const closeModal = document.getElementById('closeModal');

// elemen post-credit Doomsday
const doomsdayScreen = document.getElementById('doomsdayScreen');
const openingNote = document.getElementById('openingNote');
const backToTownBtn = document.getElementById('backToTownBtn');

const DOOMSDAY_YT_URL = "https://www.youtube.com/live/f17J3AXVK5w?si=MRW2QEdV-jBTbC7a";
let openTabTimer;

// kunci scroll pas halaman baru dibuka
document.body.classList.add('locked');

// tombol Start -> masuk ke kota & munculin tombol Done Reading
startBtn.addEventListener('click', () => {
    intro.classList.add('hide');
    townArea.classList.add('show');
    doneBtn.classList.add('show');
    document.body.classList.remove('locked');
});

// buka pop-up Sumber
sumberBtn.addEventListener('click', () => {
    infoModal.classList.add('open');
});

// tutup pop-up Sumber
closeModal.addEventListener('click', () => {
    infoModal.classList.remove('open');
});

infoModal.addEventListener('click', (e) => {
    if (e.target === infoModal) {
        infoModal.classList.remove('open');
    }
});

// tombol Done Reading -> fade satu per satu pelan-pelan lalu buka tab countdown
doneBtn.addEventListener('click', () => {
    clearTimeout(openTabTimer);
    document.body.classList.add('locked');
    openingNote.classList.remove('show');

    doomsdayScreen.classList.remove('active');
    void doomsdayScreen.offsetWidth;
    doomsdayScreen.classList.add('active');

    openTabTimer = setTimeout(() => {
        openingNote.classList.add('show');
        const newTab = window.open(DOOMSDAY_YT_URL, '_blank', 'noopener,noreferrer');
        if (!newTab) {
            openingNote.textContent = "Tab baru ditahan browser — klik tombol di bawah buat buka countdown!";
        } else {
            openingNote.textContent = "Opening countdown in a new tab...";
        }
    }, 5200);
});

// tombol kembali ke kota dari layar Doomsday
backToTownBtn.addEventListener('click', () => {
    clearTimeout(openTabTimer);
    doomsdayScreen.classList.remove('active');
    openingNote.classList.remove('show');
    document.body.classList.remove('locked');
});