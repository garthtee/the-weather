const {app, BrowserWindow} = require('electron');

let win = null;

process.env.GOOGLE_API_KEY = 'AIzaSyCgT0X9tyBw3yLC9lxD_0Igy2EOdT4E5g4';

app.on('ready', function () {

  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1000, height: 600});

  // Specify entry point to default entry point of vue.js
  win.loadURL('http://localhost:8080');

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });

});

// Create the application window if the window variable is null
app.on('activate', function () {
  if (win === null) {
    createWindow();
  }
})

// Quit the app once closed
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
