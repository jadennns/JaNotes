import { app, BrowserWindow, screen } from "electron";

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const mainWindow = new BrowserWindow({
    height,
    width,
    fullscreenable: true,
  });

  mainWindow.setMenu(null);
  mainWindow.loadURL("http://localhost:3000/");
}

app.on("ready", () => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length == 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
