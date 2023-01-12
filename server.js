const app = require('./lib/app');
const pool = require('./lib/utils/pool');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { v4: uuidV4 } = require('uuid');

const API_URL = process.env.API_URL || 'http://localhost';
const PORT = process.env.PORT || 7890;

io.on('connection', (socket) => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit('User Connected', userId);

    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('User Disconnected', userId);
    });
  });
});

app.listen(PORT, () => {
  console.log(`🚀  Server started on ${API_URL}:${PORT}`);
});

process.on('exit', () => {
  console.log('👋  Goodbye!');
  pool.end();
});
