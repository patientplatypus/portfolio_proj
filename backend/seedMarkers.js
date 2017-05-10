//
// var mongoose = require('mongoose');
//
// var markersSchema = new mongoose.Schema({
//   lat: {type: Number, required: false},
//   lng: {type: Number, required: false},
//   smalltext: { type: String, required: false},
//   bigtext: { type: String, required: false },
//   overlaytext: {type: String, required: false},
//   overlayimg: {type: String, required: false},
//   img: { type: String, required: false },
//   clicked: { type: Boolean, required: false}
// });
//
// var Markers = mongoose.model('Markers', markersSchema);
//
// module.exports = Markers;


require('dotenv').config({ silent: true });

var mongoose = require('mongoose');
mongoose.connect(process.env.mapdb_conn);

var Markers = require('./models/markers');

var seedMarkers = [
  {
    lat: 30.2672,
    lng: -97.7431,
    smalltext: 'map marker 1 small text',
    bigtext: 'MAP MARKER 1 BIG TEXT',
    clicked: false,
    overlaytext: 'OVERLAY TEXT 1',
    img: '',
    overlayimg: ''
  },
  {
    lat: 30.3,
    lng: -99,
    smalltext: 'map marker 2 small text',
    bigtext: 'MAP MARKER 2 BIG TEXT',
    clicked: false,
    overlaytext: 'OVERLAY TEXT 2',
    img: '',
    overlayimg: ''
  }
];

Markers.create(seedMarkers, function(err,marker) {
  if (err) {
    console.log('Database Error: ', err);
  }

  console.log('Profile inserted: ', marker);
  process.exit();
});
