import Sprite from './Sprite'
import Input from './Input'
import Mouse from './Mouse'
import Action from './Action'

import { elements } from '../data'

import backgroundImage from '../assets/background.png'

class Game {
  constructor({ canvas, scale, size = 64 }) {
    this.canvas = canvas
    this.scale = scale
    this.size = size

    this.background = new Sprite({
      src: backgroundImage,
      width: canvas.width,
      height: canvas.height,
      scale: this.scale,
    })

    this.input = new Input()
    this.mouse = new Mouse({ canvas })
    this.action = new Action({
      keys: this.input.keys,
      setScale: this.setScale.bind(this),
    })

    this.elements = elements
  }

  update(time) {
    this.action.select(this.mouse.scroll)
    for (const tile of this.elements) {
      tile.update({ move: this.mouse.moved, scale: this.scale })
    }
    this.background.update({ move: this.mouse.moved })
  }

  setScale(value) {
    if (this.scale >= 2 && value > 0) return
    if (this.scale <= 1 && value < 0) return
    this.scale += value
  }

  draw(c) {
    this.background.draw({ c, scale: this.scale })

    for (const tile of this.elements) tile.draw({ c })
  }
}

export default Game
