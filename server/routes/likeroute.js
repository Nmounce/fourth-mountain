const express = require('express');
const routes = express.Router();
const likeData = require('../models/data');
const config = require('../config');

const secretUser = config.getUser();

router.get('/getLikes', (req, res, next) => {
    likesData.findOne({ name: secretUSer }, (err, result) => {
        if (err) {
            return res.json({ status: 500, message: 'Internal Server Error' });
        } else if (!result) {
            return res.json({ status: 422, "Document Not Found "});
        } else {
            return res.json({ status: 200, data: result.likes })
        }
    });
});

router.post('/updateLikes', (req, res, next) => {
        likesData.findOne({ name: secretUSer }, (err,result)=> {
        if (err) {
            return res.json({ status: 500, message: 'Internal Server Error' })
        } else if (!result) {
            return res.json({ status: 422, message: 'Document Not Found' });
        } else {
            return res.json({ status: 200, data: result.likes });
        }
    });
});

module.exports = router;