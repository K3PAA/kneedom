class Tile {
  constructor({ position, number, size = 64, scale = 1 }) {
    this.position = position
    this.number = number
    this.size = size
    this.scale = scale

    this.position = this.createPosition()
  }

  update({ move, scale }) {
    if (scale !== this.scale) this.scale = scale
    this.position.x -= move.x
    this.position.y -= move.y
  }

  createPosition() {
    return {
      x: this.position.x * (this.size / this.scale),
      y: this.position.y * (this.size / this.scale),
    }
  }

  draw({ c }) {
    c.fillStyle = 'rgba(255,0,0,0.4)'
    c.fillRect(
      this.position.x / this.scale,
      this.position.y / this.scale,
      this.size / this.scale,
      this.size / this.scale
    )
  }
}

export default Tile
