const config = require('dotenv').config()
const { app, BrowserWindow } = require('electron')

const configUtil = require('./util/config')

function createWindow () {
  const mainWindow = getWindowEnvSettings()
  console.log('mainWindow:', mainWindow)
  const url = configUtil.getConfigVariable(config, 'nestThermostatUrl')

  mainWindow.loadURL(url)
}

function getWindowEnvSettings() {
  if (configUtil.isDev()) {
    const window = new BrowserWindow({ width: 840, height: 800 })
    window.openDevTools()
    return window
  } else {
    return new BrowserWindow({ width: 425, height: 657 })
  }
}
  
app.on('ready', createWindow)
