// Mongoose
// - Vai nos ajudar a conectar em qualquer banco de dados MongoDB de uma forma Rápida e simples
// - Ele nos ajuda a criar um padrão para as nossas coleções
// - Ele abstrai as queries de CRUD através de métodos

const mongoose = require('mongoose');
const Dinossaur = require('./Dinossaur');

console.log(Dinossaur);

// mongoose.connect('mongodb://localhost:27017')
//   .then(() => {
//     console.log('Conectado no banco de dados');
//   })
//   .catch(error => {
//     console.log('Erro ao conectar com o banco. Error: ', error);
//   });

const initConnection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/dinossaur-database');
    console.log('Conectado no banco de dados');

    // Aqui conseguimos utilizar o nosso modelo para fazer o que agente quiser!!!
    const newDinossaur = {
      nome: 'Rex',
      numeroPatas: 2,
      periodoExistencia: 'jurassico',
    };

    const dinoToDatabase = new Dinossaur(newDinossaur);
    await dinoToDatabase.save();

    const dinosFromDatabase = await Dinossaur.find();
    console.log(dinosFromDatabase);

    const rex = await Dinossaur.findById('6178a24be8a84cec8156a9dc');
    
    await Dinossaur.updateOne({ _id: rex._id }, { nome: 'Tiranossauro Rex' });

    await Dinossaur.findByIdAndDelete('6178a24be8a84cec8156a9dc');

    const updatedRex = await Dinossaur.findById(rex._id);
    console.log(updatedRex);


  } catch (error) {
    console.log('Erro ao manipular o banco. Error: ', error);
  }
};

initConnection();
