const net = require("net");

const client = net.connect("8080", "localhost", () => {
  console.log("つながったよ");
  client.write("GET / HTTP/1.1\r\n");
  client.write("HOST: localhost\r\n");
  client.write("\r\n");
});

client.on("data", recieve_data => {
  console.log(String(recieve_data));
});
