// Create web server

var express = require('express');
var router = express.Router();

// Import comments model
var Comments = require('../models/comments');

// GET handler for /comments
router.get('/', function(req, res, next) {
    // Get all comments
    Comments.find(function(err, comments) {
        if (err) {
            console.log(err);
            res.render('error');
        }
        else {
            // Load comments view
            res.render('comments', {
                title: 'Comments',
                comments: comments
            });
        }
    });
});

// POST handler for /comments
router.post('/', function(req, res, next) {
    // Create comment
    Comments.create({
        name: req.body.name,
        comment: req.body.comment
    }, function(err, Comments) {
        if (err) {
            console.log(err);
            res.render('error');
        }
        else {
            // Reload comments page
            res.redirect('/comments');
        }
    });
});

// GET handler for /comments/delete/:_id
router.get('/delete/:_id', function(req, res, next) {
    // Get id from url
    var _id = req.params._id;

    // Delete comment
    Comments.remove({
        _id: _id
    }, function(err) {
        if (err) {
            console.log(err);
            res.render('error');
        }
        else {
            // Reload comments page
            res.redirect('/comments');
        }
    });
});

// Make controller public
module.exports = router;


