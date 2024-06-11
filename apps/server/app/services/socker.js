function initializeSocket(io) {
  io.on('connection', (socket) => {
    socket.on('connect', (mess) => {
      console.log('[message]:', mess);
    });
  });
}

export default initializeSocket;
