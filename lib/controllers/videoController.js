const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');


module.exports = router.get('/', (req, res) => {
  try{
    res.redirect(`/api/v1/chat/${uuidv4()}`);
  }catch(e){
    e.status = 500;
    throw(e);
  }
})
  .get('/:rooms', (req, res) => {
    try{
      res.render('room', { roomid: req.params.rooms });
    }catch(e){
      e.status = 500;
      throw(e);
    }
  });
