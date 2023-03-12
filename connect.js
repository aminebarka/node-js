import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/DatabaseCommerce', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connexion à la base de données réussie');
  } catch (err) {
    console.error('Impossible de se connecter à la base de données', err);
    process.exit(1);
  }
};

export default connectDB;
