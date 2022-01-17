const { app, BrowserWindow, protocol } = require("electron");
const path = require("path");
const url = require("url");

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            webSecurity: false,
        },
    });

    // win.loadFile("index.html");
    win.loadURL(
        url.format({
            pathname: "index.html",
            protocol: "file",
            slashes: true,
        })
    );

    win.on("closed", () => {
        win = null;
    });
}

app.on("ready", () => {
    protocol.interceptFileProtocol(
        "file",
        (request, callback) => {
            const url =
                request.url.substr(7); /* all urls start with 'file://' */
            callback({ path: path.normalize(`${__dirname}/${url}`) });
        },
        (err) => {
            if (err) console.error("Failed to register protocol");
        }
    );
    createWindow();
});

// app.whenReady().then(() => {
//     createWindow();

//     app.on("activate", () => {
//         if (BrowserWindow.getAllWindows().length === 0) {
//             createWindow();
//         }
//     });
// });

// Menu.setApplicationMenu(null);
