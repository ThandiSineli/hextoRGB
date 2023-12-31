
function updateColor() {
    const red = document.getElementById('red').value;
    const green = document.getElementById('green').value;
    const blue = document.getElementById('blue').value;

    const hexColor = rgbToHex(red, green, blue);
    document.getElementById('hex').innerText = hexColor;

    // Apply the color to the background for visual representation
    document.body.style.backgroundColor = hexColor;
}

// Function to convert RGB to Hex
function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    const hex = Number(c).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

// Attach event listeners to update color on input change
document.getElementById('red').addEventListener('input', updateColor);
document.getElementById('green').addEventListener('input', updateColor);
document.getElementById('blue').addEventListener('input', updateColor);

// Initial color update when the page loads
updateColor();
