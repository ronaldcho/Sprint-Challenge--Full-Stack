const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  accountName: {
    type: String,
    required: true
  },
  accountDescription:{
    type: String,
  },
  accountBudgetedAmount:{
    type: Number,
  },
  accountisActive: {
    type: Boolean,
  }

});

module.exports = mongoose.model('Accounts', accountSchema);