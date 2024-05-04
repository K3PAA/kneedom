class Sprite {
  constructor({
    dimensions,
    tileSize,
    src,
    scale = 1,
    parts = 1,
    imageOffset = { x: 0, y: 0 },
  }) {
    this.dimensions = dimensions
    this.tileSize = tileSize
    this.scale = scale

    this.image = new Image()
    this.image.src = src
    this.parts = parts

    this.position = { x: 0, y: 0 }
    this.backgroundOffset = { x: 0, y: 0 }
    this.animationOffset = { x: 0, y: 0 }
    this.imageOffset = imageOffset
  }

  animate() {}

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
      this.animationOffset.x,
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

export default Sprite
