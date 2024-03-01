import * as path from "path";
const { app, BrowserWindow } = require("electron");
require("electron-reload")(path.resolve(__dirname, "../"), {
  electron: require(path.resolve(__dirname, "../node_modules/electron")),
});

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});
