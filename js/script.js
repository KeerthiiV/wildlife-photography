const images = [
    "images/ge1.jpg",
    "images/flamingo.jpg",
    "images/bird.jpg"
];

let currentIndex = 0;
const hero = document.getElementById("hero-bg");

function updateHero() {
    // 1. Fade out and reset scale slightly
    hero.style.opacity = "0";
    
    setTimeout(() => {
        // 2. Change Image
        currentIndex = (currentIndex + 1) % images.length;
        hero.style.backgroundImage = `url('${images[currentIndex]}')`;
        
        // 3. Reset zoom position to start "Ken Burns" effect
        hero.style.transform = "scale(1.2)"; 
        hero.style.opacity = "1";

        // 4. Trigger the slow zoom-in
        setTimeout(() => {
            hero.style.transform = "scale(1.0)";
        }, 50);
    }, 1500);
}

// Initialize
hero.style.backgroundImage = `url('${images[0]}')`;
hero.style.transform = "scale(1.0)";

// Interval for changing background
setInterval(updateHero, 8000);