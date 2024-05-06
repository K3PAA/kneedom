import { Tree, Tower, Foam, Castle, House, Rock, Sheep } from './Sprite'

import { elements, scale, assets } from '../data/data'

class Elements {
  constructor({ tileSize, canvas }) {
    this.data = this.prepareElements({ tileSize, canvas })
  }

  prepareElements({ tileSize }) {
    const layerZero = []
    const layerOne = []

    for (const { dimensions, identifier } of elements) {
      if (identifier === assets.tree.code) {
        layerOne.push(
          new Tree({
            dimensions,
            tileSize,
            scale,
          })
        )
      }
      if (identifier === assets.tower.code) {
        layerOne.push(
          new Tower({
            dimensions,
            tileSize,
            scale,
          })
        )
      }
      if (assets.foam.code === identifier) {
        layerZero.push(
          new Foam({
            dimensions,
            tileSize,
            scale,
          })
        )
      }
      if (identifier === assets.castle.code) {
        layerOne.push(
          new Castle({
            dimensions,
            tileSize,
            scale,
          })
        )
      }
      if (identifier === assets.house.code) {
        layerOne.push(
          new House({
            dimensions,
            tileSize,
            scale,
          })
        )
      }
      if (identifier === assets.rock01.code) {
        layerZero.push(
          new Rock({
            dimensions,
            tileSize,
            scale,
            name: 'rock01',
          })
        )
      }
      if (identifier === assets.rock02.code) {
        layerZero.push(
          new Rock({
            dimensions,
            tileSize,
            scale,
            name: 'rock02',
          })
        )
      }
      if (identifier === assets.rock03.code) {
        layerZero.push(
          new Rock({
            dimensions,
            tileSize,
            scale,
            name: 'rock03',
          })
        )
      }
      if (identifier === assets.rock04.code) {
        layerZero.push(
          new Rock({
            dimensions,
            tileSize,
            scale,
            name: 'rock04',
          })
        )
      }
      if (identifier === assets.sheep.code) {
        layerOne.push(
          new Sheep({
            dimensions,
            tileSize,
            scale,
          })
        )
      }
    }

    return { zero: layerZero, one: layerOne }
  }
}

export default Elements
