// Desktop (offline) version of Animals of the World.
// Serves the built web app (dist/) through a private app:// protocol, so absolute paths like
// /animals/... and /maps/... work exactly as on the website – no internet needed.
const { app, BrowserWindow, protocol, net, shell, Menu } = require('electron')
const path = require('node:path')
const { pathToFileURL } = require('node:url')

const DIST = path.join(__dirname, '..', 'dist')

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { standard: true, secure: true, supportFetchAPI: true, stream: true } },
])

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 800,
    minHeight: 560,
    backgroundColor: '#bfe8ff',
    title: 'Zvířata světa',
    icon: path.join(__dirname, 'icon.png'),
    autoHideMenuBar: true,
    show: false,
    webPreferences: { contextIsolation: true, sandbox: true },
  })
  win.maximize()
  win.once('ready-to-show', () => win.show())

  // Photo credit links etc. open in the normal web browser, not inside the app
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:/.test(url)) shell.openExternal(url)
    return { action: 'deny' }
  })
  win.webContents.on('will-navigate', (e, url) => {
    if (!url.startsWith('app://')) {
      e.preventDefault()
      if (/^https?:/.test(url)) shell.openExternal(url)
    }
  })

  // F11 = full screen (handy for kids), Esc leaves it
  win.webContents.on('before-input-event', (_e, input) => {
    if (input.type !== 'keyDown') return
    if (input.key === 'F11') win.setFullScreen(!win.isFullScreen())
    if (input.key === 'Escape' && win.isFullScreen()) win.setFullScreen(false)
  })

  win.loadURL('app://local/index.html')
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null)
  protocol.handle('app', (request) => {
    const { pathname } = new URL(request.url)
    const rel = decodeURIComponent(pathname).replace(/^\/+/, '') || 'index.html'
    const file = path.normalize(path.join(DIST, rel))
    if (!file.startsWith(DIST)) return new Response('Not found', { status: 404 })
    return net.fetch(pathToFileURL(file).toString())
  })
  createWindow()
})

app.on('window-all-closed', () => app.quit())
