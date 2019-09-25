const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');

const Comment = require('../models/coments') ;

router.get('/', (req,res, next) => {
    Comment.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
});

router.post('/', (req, res, next) => {
    const comment = new Comment({
        _id: new mongoose.Types.ObjectId(),
        agentName: req.body.agentName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contact: req.body.contact,
        comment: req.body.comment,
        date: req.body.date,
        emotion: req.body.emotion,
        rating: req.body.rating
    });
    
    comment.save()
    .then(comment =>{
        console.log('the comment data',req.body)
        res.status(200).json({ 'message': 'handling the comment post',})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
});

module.exports = router;