const net = require("net");

const PORT = 5000;
const HOST = "0.0.0.0";

const server = net.createServer((socket) => {
  console.log("Aluno conectado:", socket.remoteAddress);

  socket.on("data", (data) => {
    console.log("Mensagem:", data.toString());
    socket.write(`Servidor recebeu: ${data.toString()}`);
  });

  socket.on("end", () => {
    console.log("Aluno desconectado");
  });

  // Captura erros de conexão
  socket.on("error", (err) => {
    console.log("Erro no socket:", err.code);
  });
});

server.on("error", (err) => {
  console.log("Erro no servidor:", err.code);
});

server.listen(PORT, HOST, () => {
  console.log(`Servidor TCP rodando em ${HOST}:${PORT}`);
});
