// Your code goes here

// Update the map given a location object
function setImagePosition(location) {
  console.log(location);
  const latitude = location.coords.latitude
  const longitude = location.coords.longitude
  const new_src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=17&size=600x400&maptype=satellite&key=AIzaSyBrLfaqBHZNoiI8463XDdy57fJHiwA8vy4"
  document.querySelector("img").src = new_src
}

