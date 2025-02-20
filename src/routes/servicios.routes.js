const express = require('express');
const servicios = express.Router();
const { getServiciosUnach } = require('../controllers/serviciousunach');

const router = Router();
router.get('/api/servicio', getServiciosUnach);

module.exports = router;
