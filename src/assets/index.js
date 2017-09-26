import background from './background.js'
import images from './images.js'
import devices from './devices.js'
import graphics from './graphics.js'
import icons from './icons.js'
import shapes from './shapes.js'
import screenshots from './screenshots.js'

const assets = {
  graphics: {
    ...graphics
  },
  devices: {
    ...devices
  },
  icons: {
    ...icons
  },
  bg: {
    ...background
  },
  images: {
    ...images
  },
  svg: {
    ...shapes
  },
  screenshot: {
    ...screenshots
  }
}

export default assets