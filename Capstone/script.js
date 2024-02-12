// script.js

// Initialize p5.js sound and create canvas
function setup() {
    createCanvas(windowWidth, windowHeight);
}

// Draw sound wave pattern
function draw() {
    background(255); // Set background color (white)

    // Calculate sound wave pattern
    let amplitude = 200; // Set amplitude of the wave
    let frequency = 0.05; // Set frequency of the wave

    for (let x = 0; x < width; x += 10) {
        let angle = frameCount * frequency + map(x, 0, width, 0, TWO_PI);
        let yOffset = sin(angle) * amplitude;

        // Draw the sound wave
        ellipse(x, height / 2 + yOffset, 5, 5);
    }
}

// Resize canvas when the window is resized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
