const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        minWidth: 600,
        minHeight: 400,
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
            // webSecurity: false,
        },
    });

    win.loadFile("./index.html");
}


app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Menu.setApplicationMenu(null);
