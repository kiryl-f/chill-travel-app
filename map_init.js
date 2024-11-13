document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([51.505, -0.09], 13); // Default to London
  
    // Add a tile layer from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
  
    // Example marker
    L.marker([51.505, -0.09]).addTo(map)
      .bindPopup('Welcome to this beautiful destination!')
      .openPopup();
  });
  