const mongoose = require('mongoose'), Schema = mongoose.Schema;
const db = require('./index.js');
mongoose.Promise = global.Promise;



const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
},
  {
    timestamps: true
  }
);

//// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require("../database-mysql");
// const Item = require('../database-mongo/Item.model.js');

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// const selectAll = function (req, res) {
//   db.query("SELECT * FROM items", (err, items, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(items);
//     }
//   });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES
// const selectAll = f
const Admin = mongoose.model('Admin', adminSchema);
// var host1 = new Admin({ username: 'root', password: 'root' });
//   host1.save(function (err) {
//     if (err) return handleError(err);
//     // saved!
//   }); 
module.exports = Admin;