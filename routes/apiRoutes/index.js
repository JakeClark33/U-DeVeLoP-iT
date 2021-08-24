const express = require('express');
const router = express.Router();

const candidate = require('./candidateRoutes')
const party = require('./partyRoutes')
const voter = require('./voterRoutes')
router.use('/candidate', candidate);
router.use('/party', party);
router.use('/voters', voter);

module.exports = router;