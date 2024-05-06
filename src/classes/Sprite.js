import { assets } from '../data/data'

class Sprite {
  constructor({ dimensions, tileSize, scale }) {
    this.dimensions = dimensions
    this.tileSize = tileSize
    this.scale = scale

    this.image = new Image()

    this.fi = 20
    this.frame = 0
    this.ft = 0

    this.position = { x: 0, y: 0 }
    this.backgroundOffset = { x: 0, y: 0 }
    this.animationOffset = { x: 0, y: 0 }
  }

  update({ backgroundOffset, scale }) {
    this.backgroundOffset = backgroundOffset
    this.scale = scale
    this.position = this.calculatePosition()
  }

  calculatePosition() {
    return {
      x:
        this.dimensions.x * (this.tileSize / this.scale) -
        this.backgroundOffset.x / this.scale,
      y:
        this.dimensions.y * (this.tileSize / this.scale) -
        this.backgroundOffset.y / this.scale,
    }
  }

  box({ c, scale }) {
    c.fillStyle = 'rgba(150,150,150, 0.4)'
    c.fillRect(
      this.position.x,
      this.position.y,
      this.tileSize / scale,
      this.tileSize / scale
    )
  }

  renderImage({ c, scale }) {
    c.drawImage(
      this.image,
      this.animationOffset.x + (this.image.width / this.parts) * this.frame,
      this.animationOffset.y,
      this.image.width / this.parts,
      this.image.height,
      this.position.x - this.imageOffset.x / scale,
      this.position.y - this.imageOffset.y / scale,
      this.image.width / this.parts / scale,
      this.image.height / scale
    )
  }

  draw({ c, scale }) {
    this.box({ c, scale })
    this.renderImage({ c, scale })
  }
}

class Tree extends Sprite {
  constructor({ dimensions, tileSize, scale }) {
    super({
      dimensions,
      tileSize,
      scale,
    })

    this.image.src = assets.tree.src
    this.parts = assets.tree.parts
    this.states = assets.tree.states
    this.actions = assets.tree.actions

    this.action = this.actions.idle
    this.imageOffset = { x: tileSize * 1, y: tileSize * 2 }
  }

  animate() {
    this.ft++
    if (this.ft > this.fi) {
      this.ft = 0
      if (this.states[this.action][this.frame]) {
        this.frame++
      } else {
        this.frame = this.states[this.action][0]
      }
    }
  }
}

class Tower extends Sprite {
  constructor({ dimensions, tileSize, scale }) {
    super({
      dimensions,
      tileSize,
      scale,
    })

    this.image.src = assets.tower.src
    this.parts = assets.tower.parts
    this.states = assets.tower.states
    this.actions = assets.tower.actions

    this.level = 0

    this.action = this.actions.level
    this.imageOffset = { x: 0, y: tileSize * 1 }
  }
  setAction(name) {
    if (this.actions[name]) this.action = this.actions[name]
  }
  animate() {
    this.ft++
    if (this.ft > this.fi) {
      this.ft = 0
      if (this.states[this.action][this.frame]) {
        if (this.action === this.actions.level) {
          this.frame = this.states[this.action][this.level]
        } else this.frame++
      } else {
        this.frame = this.states[this.action][0]
      }
    }
  }
}

class Sheep extends Sprite {
  constructor({ dimensions, tileSize, scale }) {
    super({
      dimensions,
      tileSize,
      scale,
    })

    this.image.src = assets.sheep.src
    this.parts = assets.sheep.parts
    this.states = assets.sheep.states
    this.actions = assets.sheep.actions

    this.action = this.actions.idle
    this.imageOffset = { x: tileSize / 2, y: tileSize / 2 }
  }

  animate() {
    this.ft++
    if (this.ft > this.fi) {
      this.ft = 0
      if (
        this.states[this.action][this.frame] ||
        this.states[this.action][this.frame] === 0
      ) {
        this.frame++
      } else {
        this.frame = this.states[this.action][0]
      }
    }
  }
}

class Castle extends Sprite {
  constructor({ dimensions, tileSize, scale }) {
    super({
      dimensions,
      tileSize,
      scale,
    })

    this.image.src = assets.castle.src
    this.parts = assets.castle.parts
    this.states = assets.castle.states
    this.actions = assets.castle.actions

    this.level = 0

    this.action = this.actions.level
    this.imageOffset = { x: 0, y: tileSize * 1 }
  }
  setAction(name) {
    if (this.actions[name]) this.action = this.actions[name]
  }
  animate() {
    this.ft++
    if (this.ft > this.fi) {
      this.ft = 0
      if (this.states[this.action][this.frame]) {
        if (this.action === this.actions.level) {
          this.frame = this.states[this.action][this.level]
        } else this.frame++
      } else {
        this.frame = this.states[this.action][0]
      }
    }
  }
}

class House extends Sprite {
  constructor({ dimensions, tileSize, scale }) {
    super({
      dimensions,
      tileSize,
      scale,
    })

    this.image.src = assets.house.src
    this.parts = assets.house.parts
    this.states = assets.house.states
    this.actions = assets.house.actions

    this.level = 0

    this.action = this.actions.level
    this.imageOffset = { x: 0, y: tileSize * 1 }
  }
  setAction(name) {
    if (this.actions[name]) this.action = this.actions[name]
  }
  animate() {
    this.ft++
    if (this.ft > this.fi) {
      this.ft = 0
      if (this.states[this.action][this.frame]) {
        if (this.action === this.actions.level) {
          this.frame = this.states[this.action][this.level]
        } else this.frame++
      } else {
        this.frame = this.states[this.action][0]
      }
    }
  }
}
class Foam extends Sprite {
  constructor({ dimensions, tileSize, scale }) {
    super({
      dimensions,
      tileSize,
      scale,
    })

    this.image.src = assets.foam.src
    this.parts = assets.foam.parts
    this.states = assets.foam.states
    this.actions = assets.foam.actions

    this.action = this.actions.idle
    this.imageOffset = { x: tileSize * 1, y: tileSize * 1 }
  }

  animate() {
    this.ft++
    if (this.ft > this.fi) {
      this.ft = 0
      if (
        this.states[this.action][this.frame + 1] ||
        this.states[this.action][this.frame] === 0
      ) {
        this.frame++
      } else {
        this.frame = this.states[this.action][0]
      }
    }
  }
}

class Rock extends Sprite {
  constructor({ dimensions, tileSize, scale, name }) {
    super({
      dimensions,
      tileSize,
      scale,
    })

    this.image.src = assets[name].src
    this.parts = assets[name].parts
    this.states = assets[name].states
    this.actions = assets[name].actions

    this.action = this.actions.idle
    this.imageOffset = { x: tileSize * 1, y: tileSize * 1 }
  }

  animate() {
    this.ft++
    if (this.ft > this.fi) {
      this.ft = 0
      if (
        this.states[this.action][this.frame + 1] ||
        this.states[this.action][this.frame] === 0
      ) {
        this.frame++
      } else {
        this.frame = this.states[this.action][0]
      }
    }
  }

  calculatePosition() {
    return {
      x:
        this.dimensions.x * (this.tileSize / this.scale) -
        this.backgroundOffset.x / this.scale +
        this.tileSize / this.scale,
      y:
        this.dimensions.y * (this.tileSize / this.scale) -
        this.backgroundOffset.y / this.scale +
        this.tileSize / this.scale,
    }
  }
}

export { Tree, Tower, Foam, Castle, House, Rock, Sheep }
export default Sprite
