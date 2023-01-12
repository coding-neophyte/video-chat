const express = require('express');
const router = express.Router();
const { v4: uuidV4 } = require('uuid');


module.exports = router.get('/', (req, res) => {
  try{
    res.redirect(`/${uuidV4()}`);
  }catch(e){
    e.status = 500;
    throw(e);
  }
})
  .get('/:room', (req, res) => {
    try{
      res.render('room', { roomId: req.params.room });
    }catch(e){
      e.status = 500;
      throw(e);
    }
  });
