const { app, BrowserWindow } = require('electron');

const debug = /--debug/.test(process.argv[2])

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const createWindow = () => {

  var windowOptions = {
    width: 1080,
    minWidth: 680,
    height: 840,
    title: app.getName()
  }
  mainWindow = new BrowserWindow(windowOptions);

  // load the index.html
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  if(debug){
    mainWindow.webContents.openDevTools();
    mainWindow.maximize()
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});