const menubar = require('menubar')
const path = require('path')

const { isDev } = require('./util/config')

const NEST_URL = 'https://home.nest.com'

const mb = menubar({
  width: isDev() ? 840 : 425,
  height: isDev() ? 800 : 657,
  icon: path.join(__dirname, 'assets', 'logo.png')
})

function handleAfterCreateWindow() {
  if (isDev())
    mb.window.openDevTools()

  console.log('mb.window:', mb.window)
  console.log('mb.window.loadUrl:', mb.window.loadUrl)

  mb.window.loadURL(NEST_URL)
}

mb.on('after-create-window', handleAfterCreateWindow)
