import { io, Socket } from "socket.io-client";

// This is in a singleton pattern
export const socketEndpoint = "https://socket-dev.quadra.trade";
export const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0cmFkZXJfaWQiOiIwZmRiMDFmOC0wNGU4LTRmNGMtYjA4ZC0zMDg4NzY3MDhhMjkiLCJmaXJzdF9uYW1lIjoiQW1icm9zZSIsImxhc3RfbmFtZSI6IlJlZ2FuIiwiZW1haWwiOiJhbWJyb3NlLnJlZ2FuQHF1YWRyYS50cmFkZSIsImNvdW50cnkiOiJVbml0ZWQgS2luZ2RvbSIsInVzZXJuYW1lIjoiYW1icm9zZS5yZWdhbkBxdWFkcmEudHJhZGUiLCJ1c2VyX2RhdGEiOiJiYjZhNjY2ZDg4M2RjNWEyN2Y1ZWYxNDU2ZDkxMTE0MCIsIm5iZiI6MTY4MzgwMjExNywiZXhwIjoxNjgzODMwOTE3LCJpYXQiOjE2ODM4MDIxMTcsImlzcyI6ImFwaS5kZXZlbG9wbWVudC5xdWFkcmEudHJhZGUiLCJhdWQiOiJhcGkuZGV2ZWxvcG1lbnQucXVhZHJhLnRyYWRlIn0.ci2n8Ut2aEZag0SlVpnp8PPU-mS69CenwmEX8HG5KVI";

declare global {
  var socket: Socket | undefined;
}

export const socket =
  global.socket ||
  io(socketEndpoint, {
    transports: ["websocket"],
    auth: {
      traderID: "test-trader",
      quadraID: "test-123",
      token: token,
    },
  });

/* 

From JS module:
client.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

  client.on("connect", () => {
    console.log(`ClinetId: ${client.id}`);
    // Only need this payload to join private channels
    const payload = {
      session_id: "1234",
      trader_id: "1234",
      trader_exchange_ids: ["1234", "12345"],
      token: token,
    };

    // client.emit("join-channel", "test@trades13@trader_ex_id");
    // client.emit("leave-channel", "test@trades13@trader_ex_id");
    // client.emit("join-channels", ["test@trades13@trader_ex_id", "test2@trades13@trader_ex_id"]);
    // client.emit("leave-channels", ["test@trades13@trader_ex_id", "test2@trades13@trader_ex_id"]);
    // client.emit("join-private-channel", "test@trades13@trader_ex_id", payload);
    // client.emit("leave-private-channel", "test@trades13@trader_ex_id");
    // client.emit("join-private-channels", ["test@trades13@trader_ex_id", "test2@trades13@trader_ex_id"], payload);
    // client.emit("leave-private-channels", ["test@trades13@trader_ex_id", "test2@trades13@trader_ex_id"]);
  });

  client.on("err", (message) => {
    console.log(message);
  });

  client.on("data", (message) => {
    console.log("data:", message);
  });
*/
