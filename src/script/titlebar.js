//-----------------------------\\ ELEMENTS //-----------------------------\\

const TBcloseBtn = document.querySelector("[data-tb-close-btn]");
const TBmaximizeBtn = document.querySelector("[data-tb-maximize-btn]");
const TBminimizeBtn = document.querySelector("[data-tb-minimize-btn]");

//------------------------------\\ OTHERS //-------------------------------\\

const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;

//-----------------------------\\ FUNCTIONS //-----------------------------\\

TBcloseBtn.addEventListener("click", () => ipc.send("closeApp"));
TBmaximizeBtn.addEventListener("click", () => ipc.send("maximizeApp"));
TBminimizeBtn.addEventListener("click", () => ipc.send("minimizeApp"));
