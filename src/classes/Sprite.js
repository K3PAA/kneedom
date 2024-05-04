class Sprite {
  constructor({
    src,
    width = 0,
    height = 0,
    position = { x: 0, y: 0 },
    offset = { x: 0, y: 0 },
    parts = 1,
  }) {
    this.position = position
    this.width = width
    this.height = height

    this.parts = parts

    this.image = new Image()
    this.image.src = src

    if (!this.width) this.width = this.image.width
    if (!this.height) this.height = this.image.height

    this.offset = offset
  }

  update({ move }) {
    this.offset.x += move.x
    this.offset.y += move.y
  }

  draw({ c, scale }) {
    c.drawImage(
      this.image,
      this.offset.x,
      this.offset.y,
      (this.width * scale) / this.parts,
      this.height * scale,
      this.position.x,
      this.position.y,
      this.width / this.parts,
      this.height
    )
  }
}

export default Sprite
