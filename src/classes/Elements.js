import { Tree, Tower, Foam } from './Sprite'

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
          new Tree({
            dimensions,
            tileSize,
            scale,
          })
        )
      }
      if (identifier === assets.tower.code) {
        arr.push(
          new Tower({
            dimensions,
            tileSize,
            scale,
          })
        )
      }
      if (assets.foam.code.includes(identifier)) {
        arr.push(
          new Foam({
            dimensions,
            tileSize,
            scale,
          })
        )
      }
    }

    return arr
  }
}

export default Elements
