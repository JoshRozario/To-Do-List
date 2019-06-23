const {Menu,electron,Tray,app, BrowserWindow} = require('electron');


const path = require('path');
const url = require('url');
const iconPath = path.join(__dirname+'/components/icon/favicon.ico')

let mainWindow;

const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
});

function createWindow() {
    mainWindow = new BrowserWindow({transparent: true, frame: false, width:320 , height: 410, icon: iconPath, skipTaskbar: true});
    mainWindow.loadURL(startUrl);
    tray = new Tray(iconPath);
    var contextMenu = Menu.buildFromTemplate([
        {
            label: 'Show',
            click: function(){
                mainWindow.show()
            }
        },
        {
            label: 'Quit',
            click: function(){
                app.quit()
            }
        }
    ])

    

    tray.setToolTip("To-Do List");
    tray.setContextMenu(contextMenu);
    tray.on('double-click', function(){
        mainWindow.show()
    });


    mainWindow.on('closed', function () {
        mainWindow = null
    })
}
app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});