function initializeSocket(io) {
  io.on('connection', (socket) => {
    console.log('New connection:', socket.id);

    socket.on('message', (message) => {
      console.log('Received message:', message);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected:', socket.id);
    });
  });
}

export default initializeSocket;
