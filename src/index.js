//---------------------------\\ IMPORTS //---------------------------\\

require("dotenv").config();

const { app, BrowserWindow, ipcMain, screen } = require("electron");
const ejsElectron = require("ejs-electron");
const mongoose = require("mongoose");
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
	// Maximize window on load
	mainWindow.maximize();
	// Load main.ejs file when the app starts
	mainWindow.loadURL(path.join(__dirname, "views/main.ejs"));
	// Handles the titlebar buttons on the right side
	ipc.on("closeApp", () => mainWindow.close());
	ipc.on("maximizeApp", () => {
		if (mainWindow.isMaximized()) {
			mainWindow.unmaximize();
		} else {
			mainWindow.maximize();
		}
	});
	ipc.on("minimizeApp", () => mainWindow.minimize());

	// Connect to mongoose database
	mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
	const db = mongoose.connection;

	// Testing code, to be removed
	db.on("error", () => console.log("Error connecting to database"));
	db.once("open", () => console.log("Connected to MongoDB"));
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
