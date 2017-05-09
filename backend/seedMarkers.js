

require('dotenv').config({ silent: true });

var mongoose = require('mongoose');
mongoose.connect(process.env.mapdb_conn);

var Markers = require('./models/markers');

var seedMarkers = [
  {
    lat: 30.2672,
    lng: -97.7431,
    smalltext: 'map marker 1 small text',
    bigtext: 'MAP MARKER 1 BIG TEXT'
  },
  {
    lat: 30.3,
    lng: -99,
    smalltext: 'map marker 2 small text',
    bigtext: 'MAP MARKER 2 BIG TEXT'
  }
];

Markers.create(seedMarkers, function(err,marker) {
  if (err) {
    console.log('Database Error: ', err);
  }

  console.log('Profile inserted: ', marker);
  process.exit();
});
