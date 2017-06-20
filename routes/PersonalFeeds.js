var express = require('express');
var router = express.Router();
var PersonalFeed = require('../models/PersonalFeed');

router.get('/:id_user?', function(req, res, next) {
    PersonalFeed.getPersonalFeedByUserId(req.params.id_user, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
router.post('/', function(req, res, next) {
    PersonalFeed.addPersonalFeed(req.body, function(err, count) {
        //console.log(req.body);
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 & 0
        }
    });
});
router.delete('/', function(req, res, next) {
    if (req.body.id_feed === 0) {
        PersonalFeed.deleteAllPersonalFeed(req.body, function(err, count) {
            if (err) {
                res.json(err);
            } else {
                res.json(count);
            }
        });
    } else {
        PersonalFeed.deletePersonalFeed(req.body, function(err, count) {
            if (err) {
                res.json(err);
            } else {
                res.json(count);
            }
        });
    }
});
router.delete('/:id_feed?', function(req, res, next) {
    PersonalFeed.deletePersonalFeedById(req.params.id_feed, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});
router.put('/', function(req, res, next) {
    PersonalFeed.updatePersonalFeed(req.body, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;