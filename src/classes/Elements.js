import Sprite from './Sprite'

import { elements, scale, assets } from '../data/data'

class Elements {
  constructor({ tileSize, canvas }) {
    this.data = this.prepareElements({ tileSize, canvas })
  }

  prepareElements({ tileSize, canvas }) {
    const arr = []

    for (const { dimensions, identifier } of elements) {
      if (identifier === assets.tree.code) {
        arr.push(
          new Sprite({
            dimensions,
            tileSize,
            scale,
            src: assets.tree.src,
            parts: assets.tree.parts,
            imageOffset: { x: tileSize * 1, y: tileSize * 2 },
          })
        )
      }
      if (identifier === assets.tower.code) {
        arr.push(
          new Sprite({
            dimensions,
            tileSize,
            scale,
            src: assets.tower.src,
            parts: assets.tree.parts,
            imageOffset: { x: 0, y: tileSize * 1 },
          })
        )
      }
    }

    return arr
  }
}

class Tree {
  constructor({ position, tileSize }) {
    this.position = position
    this.tileSize = tileSize

    this.image = new Image()
    this.image.src = assets.tree.src
    this.parts = assets.tree.parts

    this.fi = 0
    this.toGo = 20

    this.offset = { x: 0, y: 0 }
    this.animationOffset = { x: 0, y: 0 }
    this.imageOffset = { x: this.tileSize * 1, y: this.tileSize * 2 }
  }

  update({ offset }) {
    this.fi++
    if (this.toGo < this.fi) {
      this.fi = 0
      this.animationOffset.x += this.image.width / this.parts
      if (this.animationOffset.x >= this.image.width) this.animationOffset.x = 0
    }
    this.offset = offset
  }

  draw({ c, scale }) {
    c.fillStyle = 'rgba(255,0,0, 0.4)'
    c.fillRect(
      this.position.x * (this.tileSize / scale) - this.offset.x / scale,
      this.position.y * (this.tileSize / scale) - this.offset.y / scale,
      this.tileSize / scale,
      this.tileSize / scale
    )

    c.drawImage(
      this.image,
      this.animationOffset.x,
      this.animationOffset.y,
      this.image.width / this.parts,
      this.image.height,
      this.position.x * (this.tileSize / scale) -
        this.offset.x / scale -
        this.imageOffset.x / scale,
      this.position.y * (this.tileSize / scale) -
        this.offset.y / scale -
        this.imageOffset.y / scale,
      this.image.width / this.parts / scale,
      this.image.height / scale
    )
  }
}

class Tower {
  constructor({ position, tileSize }) {
    this.position = position
    this.tileSize = tileSize

    this.image = new Image()
    this.image.src = assets.tower.src
    this.parts = assets.tower.parts

    this.fi = 0
    this.toGo = 20

    this.offset = { x: 0, y: 0 }
    this.animationOffset = { x: 0, y: 0 }
    this.imageOffset = { x: this.tileSize * 0, y: this.tileSize * 1 }
  }

  update({ offset }) {
    this.offset = offset
  }

  draw({ c, scale }) {
    c.fillStyle = 'rgba(255,0,0, 0.4)'
    c.fillRect(
      this.position.x * (this.tileSize / scale) -
        this.offset.x / scale +
        this.imageOffset.x / scale,
      this.position.y * (this.tileSize / scale) -
        this.offset.y / scale +
        this.imageOffset.y / scale,
      this.tileSize / scale,
      this.tileSize / scale
    )

    c.drawImage(
      this.image,
      this.animationOffset.x,
      this.animationOffset.y,
      this.image.width / this.parts,
      this.image.height,
      this.position.x * (this.tileSize / scale) -
        this.offset.x / scale -
        this.imageOffset.x / scale,
      this.position.y * (this.tileSize / scale) -
        this.offset.y / scale -
        this.imageOffset.y / scale,
      this.image.width / this.parts / scale,
      this.image.height / scale
    )
  }
}

export default Elements
