import Background from './Background'
import Input from './Input'
import Mouse from './Mouse'
import Action from './Action'
import Elements from './Elements'

import { assets, tileSize } from '../data/data'

class Game {
  constructor({ canvas }) {
    this.canvas = canvas
    this.tileSize = tileSize
    this.scale = 0.5

    this.background = new Background({ src: assets.background.src, canvas })

    this.input = new Input()
    this.mouse = new Mouse({ canvas })
    this.action = new Action({
      keys: this.input.keys,
      scale: { up: this.scaleUp.bind(this), down: this.scaleDown.bind(this) },
    })

    this.elements = new Elements({ tileSize: this.tileSize, canvas })
  }

  update(time) {
    this.action.select({ mouse: this.mouse })
    this.background.update({ moved: this.mouse.moved, scale: this.scale })

    for (const element of this.elements.data) {
      element.update({
        backgroundOffset: this.background.offset,
        scale: this.scale,
      })
    }
  }

  scaleUp() {
    if (this.background.canScale({ scale: this.scale })) this.scale += 0.005
  }

  scaleDown() {
    if (this.scale >= 0.5) this.scale -= 0.005
  }

  draw(c) {
    this.background.draw({ c, scale: this.scale })
    for (const element of this.elements.data) {
      element.draw({ c, scale: this.scale })
      element.animate()
    }
  }
}

export default Game
