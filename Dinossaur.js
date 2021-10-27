const mongoose = require('mongoose');

// 1) Declara o Schema do nosso Dinossauro (padrão de cada documento)
const dinossaurSchema = new mongoose.Schema({
  nome: { type: String, required: true, minlength: 3, maxlength: 50 },
  numeroPatas: { type: Number, required: true, min: 2, max: 10000 },
  periodoExistencia: { type: String, required: true, enum: ['jurassico', 'mesosoico', 'triassico'] },
  extinto: { type: Boolean, default: true },
}, {
  timestamps: true,
});

// 2) Declarar o nome da nossa coleção (dinossaur)
const dinossaur = mongoose.model('dinossaur', dinossaurSchema);

module.exports = dinossaur;
