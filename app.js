const slider = document.getElementById('colorSlider');
const colorDisplay = document.getElementById('colorDisplay');

slider.addEventListener('input', () => {
  const hue = slider.value; // Get the slider value
  colorDisplay.style.backgroundColor = `hsl(${hue}, 100%, 50%)`; // Set the background color
});
