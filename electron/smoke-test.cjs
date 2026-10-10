// Smoke test for the desktop build: `npx electron electron/smoke-test.cjs`
// Loads the app, opens a continent and an animal, saves screenshots and reports any request
// that would need the internet. Not part of the packaged app.
const { app, session } = require('electron')
const fs = require('node:fs')
const path = require('node:path')

const out = process.env.SMOKE_OUT || path.join(__dirname, '..', 'release', 'smoke')
fs.mkdirSync(out, { recursive: true })
const external = new Set()

app.whenReady().then(() => {
  session.defaultSession.webRequest.onBeforeRequest((details, cb) => {
    if (/^(https?|wss?):/.test(details.url)) external.add(details.url)
    cb({})
  })
})
app.on('browser-window-created', (_e, win) => {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms))
  const shot = async (name) => fs.writeFileSync(path.join(out, name), (await win.webContents.capturePage()).toPNG())
  win.webContents.once('did-finish-load', async () => {
    await wait(2500)
    await shot('1-home.png')
    await win.webContents.executeJavaScript("location.hash = '#/australia/middle'")
    await wait(4000)
    await shot('2-australia.png')
    await win.webContents.executeJavaScript("document.querySelector('.animal-pin')?.click()")
    await wait(2500)
    await shot('3-animal.png')
    const font = await win.webContents.executeJavaScript("document.fonts.check('20px Fredoka')")
    console.log('SMOKE fredoka font loaded:', font)
    console.log('SMOKE external requests:', external.size ? [...external].join('\n  ') : 'none')
    app.quit()
  })
})
require('./main.cjs')
