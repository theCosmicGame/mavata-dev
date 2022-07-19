require('dotenv').config()

const mdb_token = process.env.MDB_TOKEN;
const mdb_url = process.env.MDB_URL;

// console.log(process.env)

// module.exports = {
//   token: mdb_token,
//   url: mdb_url,
// }
console.log(`git+https://oauth2:${mdb_token}@${mdb_url}`)

// var npm = require('npm');
// npm.load(function(err) {
//   // handle errors
//   // install module ffi
//   npm.commands.install([`git+https://oauth2:${mdb_token}@${mdb_url}`], function(er, data) {
//     // log errors or data
//   });

//   npm.on('log', function(message) {
//     // log installation progress
//     console.log(message);
//   });
// });