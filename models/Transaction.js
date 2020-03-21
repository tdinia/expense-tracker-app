const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, `Merci d'ajouter une description`]
  },

  amount: {
    type: Number,
    required: [true, `Merci d'ajouter un montant`]
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
 