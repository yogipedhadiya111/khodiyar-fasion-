function initMap() {
  const location = { lat: 23.0951, lng: 72.6229 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 15
  });
  new google.maps.Marker({ position: location, map });
}

function smoothScrollToMap() {
  document.getElementById('map').scrollIntoView({ behavior: 'smooth' });
}

document.querySelector('.tagline').addEventListener('click', smoothScrollToMap);
  <script async
  src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>