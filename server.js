const net = require("net");

const PORT = 5000;
const HOST = "0.0.0.0"; // aceita conexões de qualquer IP

const server = net.createServer((socket) => {
  console.log("Cliente conectado:", socket.remoteAddress);

  socket.on("data", (data) => {
    console.log(`${socket.remoteAddress} | ${data.toString()}`);
    socket.write("Mensagem recebida com sucesso!");
  });

  socket.on("end", () => {
    console.log("Cliente desconectado.");
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Servidor TCP aguardando na porta ${PORT}...`);
});