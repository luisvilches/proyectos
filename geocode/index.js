var NodeGeocoder = require('node-geocoder');
 
var options = {
  provider: 'google',
 
  // Optional depending on the providers 
  httpAdapter: 'https', // Default 
  apiKey: 'AIzaSyCXMhQBho-BJRC3PXUeLUM1QQide-8sIs0', // for Mapquest, OpenCage, Google Premier 
  formatter: 'json'         // 'gpx', 'string', ... 
};
 
var geocoder = NodeGeocoder(options);

geocoder.geocode('pasaje montecarlo 968 chile')
  .then(function(res) {
    console.log(`mi latidud es: ${res.latitude} y mi longitud es: ${res.longitude}`);
  })
  .catch(function(err) {
    console.log(err);
  });