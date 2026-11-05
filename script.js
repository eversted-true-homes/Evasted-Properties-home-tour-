document.getElementById('year').textContent = new Date().getFullYear();

// Photo-based guided property tour
const tourStops = [
  { room: 'Home exterior', image: 'images/exterior.jpg', description: "Begin outside and take a look at the property's exterior." },
  { room: 'Living room', image: 'images/living-room.jpg', description: 'Explore the living area, its tiled floor, windows and ceiling fan.' },
  { room: 'Kitchen', image: 'images/kitchen.jpg', description: 'Take a closer look at the kitchen, cabinetry and appliances shown in the photo.' },
  { room: 'Bedroom', image: 'images/bedroom.jpg', description: 'View the bedroom, closet space and carpeted floor.' },
  { room: 'Bathroom', image: 'images/bathroom.jpg', description: 'Finish the tour with a look at the bathroom, bathtub and fixtures.' }
];
let currentStop = 0;
const tourImage = document.getElementById('tour-image');
const tourRoom = document.getElementById('tour-room');
const tourDescription = document.getElementById('tour-description');
const tourStep = document.getElementById('tour-step');
const tourCount = document.getElementById('tour-count');
const tourFill = document.getElementById('tour-progress-fill');
const previousButton = document.getElementById('tour-prev');
const nextButton = document.getElementById('tour-next');

function showTourStop(index) {
  currentStop = Math.max(0, Math.min(index, tourStops.length - 1));
  const stop = tourStops[currentStop];
  tourImage.src = stop.image;
  tourImage.alt = stop.room;
  tourRoom.textContent = stop.room;
  tourDescription.textContent = stop.description;
  tourStep.textContent = `STOP ${currentStop + 1}`;
  tourCount.textContent = `${currentStop + 1} / ${tourStops.length}`;
  tourFill.style.width = `${((currentStop + 1) / tourStops.length) * 100}%`;
  previousButton.disabled = currentStop === 0;
  nextButton.textContent = currentStop === tourStops.length - 1 ? 'Tour complete ✓' : currentStop === 0 ? 'Start tour →' : 'Next room →';
  nextButton.disabled = currentStop === tourStops.length - 1;
}

previousButton.addEventListener('click', () => showTourStop(currentStop - 1));
nextButton.addEventListener('click', () => showTourStop(currentStop + 1));
document.getElementById('tour-restart').addEventListener('click', () => showTourStop(0));
showTourStop(0);
