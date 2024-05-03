import Sprite from './Sprite'
import backgroundImage from '../assets/background.png'
import Input from './Input'
import Mouse from './Mouse'
import Action from './Action'

class Game {
  constructor({ canvas }) {
    this.canvas = canvas
    this.background = new Sprite({ src: backgroundImage, canvas })
    this.input = new Input()
    this.mouse = new Mouse({ canvas })
    this.action = new Action({
      keys: this.input.keys,
      background: this.background,
    })
    this.sliding = false
  }

  update(time) {
    this.action.select(this.mouse.scroll)
    this.background.update({ move: this.mouse.moved })
  }

  draw(c) {
    this.background.draw(c)
  }
}

export default Game
