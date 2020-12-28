const express = require('express');
const { checkSchema } = require('express-validator');

const service = require('./services.js');
const { authSchema } = require('./schemas.js');

const router = express.Router();

router.post('/register',
    checkSchema(authSchema),
    async (req, res, next) => {
        const {
            username,
            password
        } = req.body;

        try {
            await service.register(username, password);

            res.status(201).end();
        } catch (err) {
            next(err);
        }
    });

router.post('/login',
    checkSchema(authSchema),
    async (req, res, next) => {
        const {
            username,
            password
        } = req.body;

        try {
            const token = await service.login(username, password);

            res.status(200).json(token);
        } catch (err) {
            next(err);
        }
    });

module.exports = router;