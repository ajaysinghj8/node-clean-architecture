const router               = require('express').Router();
const {chamberController}  = require('../controller');
const hof                  = require('./hof');
const 
    {
        queryFilterParser,
        querySortParser,
        querySearchParser
    }                     = require('../middleware');

// middleware


// routes

router.get('/',[queryFilterParser(),querySortParser()],hof(chamberController.getList,(req)=>[req]));
router.get('/search/',[queryFilterParser(),querySortParser(),querySearchParser()],hof(chamberController.getSearchList,(req)=>[req]));
router.get('/:id',hof(chamberController.getById,(req)=>[req]))

module.exports = router;