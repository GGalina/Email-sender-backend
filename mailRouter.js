const express = require('express');
const router = express.Router();
const { validateEmailSchema } = require('./middleware');
const { sendEmail } = require('./controller');

router.post('/sendEmail', validateEmailSchema, sendEmail);

module.exports = router;