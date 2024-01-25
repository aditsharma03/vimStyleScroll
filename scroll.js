
function handleKeyPress(event) {

    if (!event.altKey) {
        return;
    }

    const key = event.key.toLowerCase();

    // Determine the scroll direction based on the pressed key
    let deltaX = 0, deltaY = 0;
    switch (key) {
        case 'h':
            deltaX = -100; // Scroll left
            break;
        case 'j':
            deltaY = 100; // Scroll down
            break;
        case 'k':
            deltaY = -100; // Scroll up
            break;
        case 'l':
            deltaX = 100; // Scroll right
            break;
        default:
            return;
    }

	// Scroll the page

	window.scrollBy({
        left: deltaX,
        top: deltaY,
        behavior: 'smooth' // Optional: Smooth scrolling
    });

    event.preventDefault();
}


document.addEventListener('keydown', handleKeyPress);



