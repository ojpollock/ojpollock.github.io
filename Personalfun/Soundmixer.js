const soundList = [
    'CRT.mp3',
    'metal.mp3',
    'basement.mp3',
    // Add more sound file URLs as needed
];

let audioContext;
let audioBuffer;
let playRandomizedInterval;

function loadSound(url) {
    return fetch(url)
        .then(response => response.arrayBuffer())
        .then(buffer => audioContext.decodeAudioData(buffer));
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

async function initialize() {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();

    const randomizeButton = document.getElementById('randomizeButton');
    const playButton = document.getElementById('playButton');

    randomizeButton.addEventListener('click', async () => {
        shuffleArray(soundList);
        audioBuffer = await loadSound(soundList[0]);
        playButton.disabled = false;
    });

    playButton.addEventListener('click', () => {
        playRandomizedSounds();
        playButton.disabled = true;
    });
}

function playRandomizedSounds() {
    let totalTime = 0;
    let currentIndex = 0;
    const maxDuration = 60 * 1000; // 1 minute in milliseconds

    playRandomizedInterval = setInterval(() => {
        if (totalTime >= maxDuration) {
            clearInterval(playRandomizedInterval);
            return;
        }

        if (!audioBuffer) {
            // Load the next sound if audioBuffer is not set
            currentIndex++;
            if (currentIndex >= soundList.length) {
                currentIndex = 0;
                shuffleArray(soundList);
            }
            audioBuffer = loadSound(soundList[currentIndex]);
        }

        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);

        const startTime = Math.random() * (audioBuffer.duration - 3);
        const duration = 3;

        source.start(0, startTime, duration);
        totalTime += duration * 1000; // Convert seconds to milliseconds
    }, 3000); // Play a new 3-second portion every 3 seconds
}

initialize();
