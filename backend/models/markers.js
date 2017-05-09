
var mongoose = require('mongoose');

var markersSchema = new mongoose.Schema({
  lat: {type: Number, required: false},
  lng: {type: Number, required: false},
  smalltext: { type: String, required: false},
  bigtext: { type: String, required: false },
  img: { type: String, required: false },
  clicked: { type: Boolean, required: false}
});

var Markers = mongoose.model('Markers', markersSchema);

module.exports = Markers;
