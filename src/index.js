//---------------------------\\ IMPORTS //---------------------------\\

const { app, BrowserWindow, ipcMain, screen } = require("electron");
const ejsElectron = require("ejs-electron");
const path = require("path");
const ipc = ipcMain;

//--------------------------\\ FUNCTIONS //--------------------------\\

// Creating browser window
const createWindow = () => {
	screenDimention = screen.getPrimaryDisplay().workAreaSize;
	const mainWindow = new BrowserWindow({
		width: screenDimention.width,
		height: screenDimention.height,
		frame: false,
		minWidth: 800,
		minHeight: 450,
		resizable: true,
		autoHideMenuBar: true,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		},
	});

	mainWindow.loadURL(path.join(__dirname, "views/main.ejs"));
};

//------------------------\\ APP FUNCTIONS //------------------------\\

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
