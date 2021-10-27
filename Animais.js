const mongoose = require('mongoose');

const animaisSchema = new mongoose.Schema({
  nome: { type: String, required: true, minlength: 3, maxlength: 50 },
  especie: { type: String, required: true, enum: ['baleia', 'dinossauro'] },
  peso: { type: Number, required: true, min: 0 },
  periodoExistencia: { type: String, required: true, enum: ['jurassico', 'mesosoico', 'triassico'] },
  extinto: { type: Boolean, default: true },
}, {
  timestamps: true,
});