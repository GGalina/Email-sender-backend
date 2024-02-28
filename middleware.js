const express = require('express');
const { emailSchema } = require('./mailModel');

function validateEmailSchema(req, res, next) {
    const { error } = emailSchema.validate(req.body);

    if (error) {
        const errorMessage = error.details[0].message;
        return res.status(400).json({ error: errorMessage });
    }
    next();
};

module.exports = {
  validateEmailSchema
};