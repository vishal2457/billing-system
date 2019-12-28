const electron = require("electron");
const { BrowserWindow, ipcMain } = electron;
const path = require("path");

const isDev = require("electron-is-dev");

const Datastore = require("nedb");

let db = new Datastore({
  filename: "./data/data.json",
  autoload: true,
  corruptAlertThreshold: 1
});
const app = electron.app;
let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  mainWindow.on("closed", () => (mainWindow = null));
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

//Store data in database
ipcMain.on("channel1", (e, args) => {
  console.log(args);
  saveAppData(args);
});

saveAppData = data => {
  db.insert(data, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
};

//Find data from database
getAppData = () => {
  db.find({}, (err, args) => {
    if (err) {
      console.log(err);
    }

    mainWindow.send("handleData", {
      success: "true",
      message: "Data Fetched",
      args
    });
  });
};

ipcMain.on("fetchData", (e, arg) => {
  getAppData();
});
