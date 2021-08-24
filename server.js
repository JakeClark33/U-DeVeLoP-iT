const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const inputCheck = require('./utils/inputCheck');

const db = require('./db/connection');

const apiRoutes = require ('./routes/apiRoutes');




//Express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Add after Express middleware
app.use('/api', apiRoutes);

//Connect to database

// Get all candidates




  // Update a candidate's party


// db.query(sql, params, (err, result) => {
// if (err) {
//     console.log(err);
// }
// console.log(result);
// });



app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);

});