const config = require('dotenv').config()
const menubar = require('menubar')
const path = require('path')

const { isDev, getConfigVariable } = require('./util/config')

const mb = menubar({
  width: isDev() ? 840 : 425,
  height: isDev() ? 800 : 657,
  icon: path.join(__dirname, 'assets', 'logo.png')
})

function handleAppReady() {
  console.log('ready!')
}

function handleAfterCreateWindow() {
  if (isDev())
    mb.window.openDevTools()

  console.log('mb.window:', mb.window)
  console.log('mb.window.loadUrl:', mb.window.loadUrl)

  mb.window.loadURL(getConfigVariable(config, 'nestThermostatUrl'))
}

mb.on('ready', handleAppReady)
mb.on('after-create-window', handleAfterCreateWindow)
